import { debounce } from '../../utilityFunctions/debounce';

describe('debounce', () => {
  // Test case 1: Basic debounce functionality
  it('1. should debounce function calls correctly', (done) => {
    let callCount = 0;
    const mockFunction = () => {
      callCount++;
    };
    const debouncedFunction = debounce(mockFunction, 100);

    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    expect(callCount).toBe(0);

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 150);
  });

  // Test case 2: Debounce with parameters
  it('2. should pass parameters to debounced function', (done) => {
    let receivedArgs: any[] = [];
    const mockFunction = (...args: any[]) => {
      receivedArgs = args;
    };
    const debouncedFunction = debounce(mockFunction, 100);

    debouncedFunction('test', 123);

    setTimeout(() => {
      expect(receivedArgs).toEqual(['test', 123]);
      done();
    }, 150);
  });

  // Test case 3: Debounce resets timer on subsequent calls
  it('3. should reset timer on subsequent calls', (done) => {
    let callCount = 0;
    const mockFunction = () => {
      callCount++;
    };
    const debouncedFunction = debounce(mockFunction, 100);

    debouncedFunction();
    
    setTimeout(() => {
      debouncedFunction();
    }, 50);

    setTimeout(() => {
      expect(callCount).toBe(0);
    }, 120);

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 200);
  });

  // Test case 4: Debounce with zero delay
  it('4. should handle zero delay correctly', (done) => {
    let callCount = 0;
    const mockFunction = () => {
      callCount++;
    };
    const debouncedFunction = debounce(mockFunction, 0);

    debouncedFunction();

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 10);
  });

  // Test case 5: Multiple debounced functions
  it('5. should handle multiple debounced functions independently', (done) => {
    let callCount1 = 0;
    let callCount2 = 0;
    const mockFunction1 = () => { callCount1++; };
    const mockFunction2 = () => { callCount2++; };
    const debouncedFunction1 = debounce(mockFunction1, 100);
    const debouncedFunction2 = debounce(mockFunction2, 200);

    debouncedFunction1();
    debouncedFunction2();

    setTimeout(() => {
      expect(callCount1).toBe(1);
      expect(callCount2).toBe(0);
    }, 150);

    setTimeout(() => {
      expect(callCount1).toBe(1);
      expect(callCount2).toBe(1);
      done();
    }, 250);
  });

  // Test case 6: Debounce with different parameter types
  it('6. should handle different parameter types correctly', (done) => {
    let receivedArgs: any[] = [];
    const mockFunction = (...args: any[]) => {
      receivedArgs = args;
    };
    const debouncedFunction = debounce(mockFunction, 100);

    debouncedFunction(null, undefined, true, false, 0, '', {}, []);

    setTimeout(() => {
      expect(receivedArgs).toEqual([null, undefined, true, false, 0, '', {}, []]);
      done();
    }, 150);
  });

  // Test case 7: Debounce with very short delay
  it('7. should handle very short delays correctly', (done) => {
    let callCount = 0;
    const mockFunction = () => {
      callCount++;
    };
    const debouncedFunction = debounce(mockFunction, 1);

    debouncedFunction();

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 50);
  });

  // Test case 8: Debounce called many times rapidly
  it('8. should handle rapid successive calls correctly', (done) => {
    let callCount = 0;
    const mockFunction = () => {
      callCount++;
    };
    const debouncedFunction = debounce(mockFunction, 100);

    for (let i = 0; i < 100; i++) {
      debouncedFunction();
    }

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 150);
  });
});