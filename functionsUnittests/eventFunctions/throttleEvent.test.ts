import { throttleEvent } from '../../eventFunctions/throttleEvent';

/**
 * Unit tests for the throttleEvent function.
 */
describe('throttleEvent', () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  // Test case 1: Basic throttling behavior
  it('1. should throttle function calls', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000);

    // Act
    throttled('call1');
    throttled('call2');
    throttled('call3');

    // Assert - handler should be called once immediately (leading edge)
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('call1');

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Assert - trailing edge call with last arguments
    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler).toHaveBeenLastCalledWith('call3');
  });

  // Test case 2: Leading edge only
  it('2. should execute only on leading edge when trailing is false', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000, {
      leading: true,
      trailing: false,
    });

    // Act
    throttled('call1');
    throttled('call2');
    throttled('call3');

    // Assert - called immediately
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('call1');

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Assert - no trailing call
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // Test case 3: Trailing edge only
  it('3. should execute only on trailing edge when leading is false', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000, {
      leading: false,
      trailing: true,
    });

    // Act
    throttled('call1');
    throttled('call2');

    // Assert - not called immediately
    expect(handler).not.toHaveBeenCalled();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Assert - trailing call
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('call2');
  });

  // Test case 4: Cancel method
  it('4. should cancel pending execution', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000);

    // Act
    throttled('call1');
    expect(handler).toHaveBeenCalledTimes(1);

    throttled('call2');
    throttled.cancel();

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    // Assert - no trailing call because of cancel
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // Test case 5: Multiple throttle cycles
  it('5. should handle multiple throttle cycles', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 500);

    // Act - first cycle
    throttled('cycle1-call1');
    expect(handler).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    expect(handler).toHaveBeenCalledTimes(1);

    // Second cycle
    throttled('cycle2-call1');
    expect(handler).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(500);

    // Third cycle
    throttled('cycle3-call1');
    expect(handler).toHaveBeenCalledTimes(3);
  });

  // Test case 6: Multiple arguments
  it('6. should pass multiple arguments to handler', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 500);

    // Act
    throttled(1, 2, 3, 'test', { key: 'value' });

    // Assert
    expect(handler).toHaveBeenCalledWith(1, 2, 3, 'test', { key: 'value' });
  });

  // Test case 7: Zero limit
  it('7. should handle zero limit', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 0);

    // Act
    throttled('test');

    // Assert
    expect(handler).toHaveBeenCalledWith('test');
  });

  // Test case 8: Rapid successive calls
  it('8. should handle rapid successive calls correctly', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000);

    // Act
    for (let i = 0; i < 10; i++) {
      throttled(i);
    }

    // Assert - called once immediately
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(0);

    jest.advanceTimersByTime(1000);

    // Assert - trailing call with last value
    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler).toHaveBeenLastCalledWith(9);
  });

  // Test case 9: Both leading and trailing false
  it('9. should handle both leading and trailing false', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000, {
      leading: false,
      trailing: false,
    });

    // Act
    throttled('call1');
    throttled('call2');

    jest.advanceTimersByTime(1000);

    // Assert - no calls should be made
    expect(handler).not.toHaveBeenCalled();
  });

  // Test case 10: Cancel resets state
  it('10. should reset state after cancel', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 1000);

    // Act
    throttled('call1');
    expect(handler).toHaveBeenCalledTimes(1);

    throttled('call2');
    throttled.cancel();

    // After cancel, next call should work immediately
    throttled('call3');
    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler).toHaveBeenLastCalledWith('call3');
  });

  // Test case 11: Performance test
  it('11. should handle many rapid calls efficiently', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 100);

    // Act
    const startTime = performance.now();
    for (let i = 0; i < 1000; i++) {
      throttled(i);
    }
    const endTime = performance.now();

    // Assert
    expect(endTime - startTime).toBeLessThan(100);
    expect(handler).toHaveBeenCalledTimes(1); // Only leading call
  });

  // Test case 12: No arguments
  it('12. should handle calls with no arguments', () => {
    // Arrange
    const handler = jest.fn();
    const throttled = throttleEvent(handler, 500);

    // Act
    throttled();

    // Assert
    expect(handler).toHaveBeenCalledWith();
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // Test case 13: TypeError for invalid handler
  it('13. should throw TypeError when handler is not a function', () => {
    // Arrange
    const invalidInputs = [123, 'string', null, undefined, [], {}, true];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => throttleEvent(input as unknown as () => void, 1000)).toThrow(
        TypeError,
      );
      expect(() => throttleEvent(input as unknown as () => void, 1000)).toThrow(
        'handler must be a function',
      );
    });
  });

  // Test case 14: TypeError for invalid limit type
  it('14. should throw TypeError when limit is not a number', () => {
    // Arrange
    const handler = jest.fn();
    const invalidInputs = ['string', null, undefined, [], {}, true];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() => throttleEvent(handler, input as unknown as number)).toThrow(
        TypeError,
      );
      expect(() => throttleEvent(handler, input as unknown as number)).toThrow(
        'limit must be a number',
      );
    });
  });

  // Test case 15: Error for NaN limit
  it('15. should throw Error when limit is NaN', () => {
    // Arrange
    const handler = jest.fn();

    // Act & Assert
    expect(() => throttleEvent(handler, NaN)).toThrow(Error);
    expect(() => throttleEvent(handler, NaN)).toThrow(
      'limit must be a valid number, not NaN',
    );
  });

  // Test case 16: Error for negative limit
  it('16. should throw Error when limit is negative', () => {
    // Arrange
    const handler = jest.fn();

    // Act & Assert
    expect(() => throttleEvent(handler, -100)).toThrow(Error);
    expect(() => throttleEvent(handler, -100)).toThrow(
      'limit must be non-negative',
    );
  });

  // Test case 17: TypeError for invalid leading option
  it('17. should throw TypeError when leading is not a boolean', () => {
    // Arrange
    const handler = jest.fn();
    const invalidInputs = [123, 'string', null, [], {}];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() =>
        throttleEvent(handler, 1000, {
          leading: input as unknown as boolean,
        }),
      ).toThrow(TypeError);
      expect(() =>
        throttleEvent(handler, 1000, {
          leading: input as unknown as boolean,
        }),
      ).toThrow('leading must be a boolean');
    });
  });

  // Test case 18: TypeError for invalid trailing option
  it('18. should throw TypeError when trailing is not a boolean', () => {
    // Arrange
    const handler = jest.fn();
    const invalidInputs = [123, 'string', null, [], {}];

    // Act & Assert
    invalidInputs.forEach((input) => {
      expect(() =>
        throttleEvent(handler, 1000, {
          trailing: input as unknown as boolean,
        }),
      ).toThrow(TypeError);
      expect(() =>
        throttleEvent(handler, 1000, {
          trailing: input as unknown as boolean,
        }),
      ).toThrow('trailing must be a boolean');
    });
  });
});
