import { throttle } from '../../utilityFunctions/throttle';

describe('throttle', () => {
  it('1. should preserve the context for immediate and delayed calls', (done) => {
    const obj = {
      count: 0,
      increment: function () {
        this.count++;
      },
    };

    const throttledIncrement = throttle(obj.increment, 20);

    throttledIncrement.call(obj);
    throttledIncrement.call(obj);

    setTimeout(() => {
      expect(obj.count).toBe(2);
      done();
    }, 40);
  });
});
