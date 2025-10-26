import { debounceEvent } from '../../eventFunctions/debounceEvent';

/**
 * Unit tests for the debounceEvent function.
 */
describe('debounceEvent', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  // Test case 1: Basic debouncing behavior
  it('1. should debounce function calls', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 1000);

    // Act
    debounced('call1');
    debounced('call2');
    debounced('call3');

    // Assert - handler should not be called yet
    expect(handler).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Assert - handler should be called once with last arguments
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('call3');
  });

  // Test case 2: Immediate execution (leading edge)
  it('2. should execute immediately when immediate is true', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 1000, true);

    // Act
    debounced('immediate');

    // Assert - should be called immediately
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('immediate');

    // Additional calls should not trigger handler
    debounced('second');
    expect(handler).toHaveBeenCalledTimes(1);

    // After delay, subsequent calls should work
    jest.advanceTimersByTime(1000);
    debounced('after-delay');
    expect(handler).toHaveBeenCalledTimes(2);
  });

  // Test case 3: Cancel method
  it('3. should cancel pending execution', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 1000);

    // Act
    debounced('call');
    debounced.cancel();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Assert - handler should not be called
    expect(handler).not.toHaveBeenCalled();
  });

  // Test case 4: Multiple arguments
  it('4. should pass multiple arguments to handler', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 500);

    // Act
    debounced(1, 2, 3, 'test', { key: 'value' });

    jest.advanceTimersByTime(500);

    // Assert
    expect(handler).toHaveBeenCalledWith(1, 2, 3, 'test', { key: 'value' });
  });

  // Test case 5: Delay of zero
  it('5. should handle zero delay', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 0);

    // Act
    debounced('test');

    jest.advanceTimersByTime(0);

    // Assert
    expect(handler).toHaveBeenCalledWith('test');
  });

  // Test case 6: Rapid successive calls
  it('6. should handle rapid successive calls correctly', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 500);

    // Act
    for (let i = 0; i < 100; i++) {
      debounced(i);
    }

    jest.advanceTimersByTime(500);

    // Assert - should be called once with last value
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(99);
  });

  // Test case 7: Multiple independent debounced functions
  it('7. should handle multiple independent debounced functions', () => {
    // Arrange
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    const debounced1 = debounceEvent(handler1, 500);
    const debounced2 = debounceEvent(handler2, 800);

    // Act
    debounced1('first');
    debounced2('second');

    jest.advanceTimersByTime(500);

    // Assert - first should be called
    expect(handler1).toHaveBeenCalledWith('first');
    expect(handler2).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);

    // Assert - second should now be called
    expect(handler2).toHaveBeenCalledWith('second');
  });

  // Test case 8: Cancel after immediate execution
  it('8. should handle cancel after immediate execution', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 1000, true);

    // Act
    debounced('immediate');
    debounced.cancel();

    // Assert
    expect(handler).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    // Should not be called again
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // Test case 9: Performance with large delay
  it('9. should handle large delay values efficiently', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 10000);

    // Act
    const startTime = performance.now();
    debounced('test');
    const endTime = performance.now();

    // Assert - should set up timer quickly
    expect(endTime - startTime).toBeLessThan(100);
    expect(handler).not.toHaveBeenCalled();

    jest.advanceTimersByTime(10000);
    expect(handler).toHaveBeenCalledWith('test');
  });

  // Test case 10: TypeScript generic type preservation
  it('10. should preserve argument types', () => {
    // Arrange
    const handler = jest.fn((a: number, b: string, c: boolean) => {
      return a + b + c;
    });
    const debounced = debounceEvent(handler, 500);

    // Act
    debounced(42, 'test', true);

    jest.advanceTimersByTime(500);

    // Assert
    expect(handler).toHaveBeenCalledWith(42, 'test', true);
  });

  // Test case 11: No arguments
  it('11. should handle calls with no arguments', () => {
    // Arrange
    const handler = jest.fn();
    const debounced = debounceEvent(handler, 500);

    // Act
    debounced();

    jest.advanceTimersByTime(500);

    // Assert
    expect(handler).toHaveBeenCalledWith();
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // Test case 12: TypeError for invalid handler
  it('12. should throw TypeError when handler is not a function', () => {
    // Arrange
    const invalidInputs = [123, 'string', null, undefined, [], {}, true];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => debounceEvent(input as unknown as () => void, 1000)).toThrow(
        TypeError,
      );
      expect(() => debounceEvent(input as unknown as () => void, 1000)).toThrow(
        'handler must be a function',
      );
    });
  });

  // Test case 13: TypeError for invalid delay type
  it('13. should throw TypeError when delay is not a number', () => {
    // Arrange
    const handler = jest.fn();
    const invalidInputs = ['string', null, undefined, [], {}, true];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => debounceEvent(handler, input as unknown as number)).toThrow(
        TypeError,
      );
      expect(() => debounceEvent(handler, input as unknown as number)).toThrow(
        'delay must be a number',
      );
    });
  });

  // Test case 14: Error for NaN delay
  it('14. should throw Error when delay is NaN', () => {
    // Arrange
    const handler = jest.fn();

    // Act & Assert
    expect(() => debounceEvent(handler, NaN)).toThrow(Error);
    expect(() => debounceEvent(handler, NaN)).toThrow(
      'delay must be a valid number, not NaN',
    );
  });

  // Test case 15: Error for negative delay
  it('15. should throw Error when delay is negative', () => {
    // Arrange
    const handler = jest.fn();

    // Act & Assert
    expect(() => debounceEvent(handler, -100)).toThrow(Error);
    expect(() => debounceEvent(handler, -100)).toThrow(
      'delay must be non-negative',
    );
  });

  // Test case 16: TypeError for invalid immediate type
  it('16. should throw TypeError when immediate is not a boolean', () => {
    // Arrange
    const handler = jest.fn();
    const invalidInputs = [123, 'string', null, [], {}];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() =>
        debounceEvent(handler, 1000, input as unknown as boolean),
      ).toThrow(TypeError);
      expect(() =>
        debounceEvent(handler, 1000, input as unknown as boolean),
      ).toThrow('immediate must be a boolean');
    });
  });
});
