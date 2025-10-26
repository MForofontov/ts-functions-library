/**
 * Waits for a specific event to be emitted and returns the event data as a Promise.
 * Useful for converting event-based APIs to Promise-based async/await patterns.
 *
 * @param target - The event target (EventTarget or object with addEventListener/removeEventListener).
 * @param eventName - The name of the event to wait for.
 * @param timeout - Optional timeout in milliseconds. If provided, rejects after timeout.
 * @returns Promise that resolves with the event data when the event occurs.
 *
 * @throws {TypeError} If target doesn't have addEventListener method.
 * @throws {TypeError} If eventName is not a string.
 * @throws {TypeError} If timeout is provided but not a number.
 * @throws {Error} If timeout is negative or NaN.
 * @throws {Error} If timeout expires before event occurs.
 *
 * @example
 * // Basic usage
 * const button = document.querySelector('button');
 * const clickEvent = await waitForEvent(button, 'click');
 * console.log('Button was clicked', clickEvent);
 *
 * @example
 * // With timeout
 * try {
 *   const event = await waitForEvent(element, 'load', 5000);
 *   console.log('Loaded successfully');
 * } catch (error) {
 *   console.error('Timeout: element did not load');
 * }
 *
 * @example
 * // Custom event emitter
 * const emitter = new EventEmitter();
 * setTimeout(() => emitter.emit('data', { value: 42 }), 1000);
 * const data = await waitForEvent(emitter, 'data');
 * console.log('Received:', data); // { value: 42 }
 *
 * @note The listener is automatically cleaned up after the event fires or timeout occurs.
 *
 * @complexity Time: O(1), Space: O(1)
 */
export function waitForEvent<T = unknown>(
  target:
    | EventTarget
    | {
        addEventListener: (event: string, listener: (data: T) => void) => void;
        removeEventListener: (
          event: string,
          listener: (data: T) => void,
        ) => void;
      },
  eventName: string,
  timeout?: number,
): Promise<T> {
  if (
    !target ||
    typeof (target as { addEventListener?: unknown }).addEventListener !==
      'function'
  ) {
    throw new TypeError('target must have an addEventListener method');
  }
  if (typeof eventName !== 'string') {
    throw new TypeError(`eventName must be a string, got ${typeof eventName}`);
  }
  if (timeout !== undefined) {
    if (typeof timeout !== 'number') {
      throw new TypeError(`timeout must be a number, got ${typeof timeout}`);
    }
    if (isNaN(timeout)) {
      throw new Error('timeout must be a valid number, not NaN');
    }
    if (timeout < 0) {
      throw new Error(`timeout must be non-negative, got ${timeout}`);
    }
  }

  return new Promise<T>((resolve, reject) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let resolved = false;

    const listener = (event: T): void => {
      if (resolved) return;
      resolved = true;

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      (
        target as {
          removeEventListener: (
            event: string,
            listener: (data: T) => void,
          ) => void;
        }
      ).removeEventListener(eventName, listener);
      resolve(event);
    };

    (
      target as {
        addEventListener: (event: string, listener: (data: T) => void) => void;
      }
    ).addEventListener(eventName, listener);

    if (timeout !== undefined) {
      timeoutId = setTimeout(() => {
        if (resolved) return;
        resolved = true;

        (
          target as {
            removeEventListener: (
              event: string,
              listener: (data: T) => void,
            ) => void;
          }
        ).removeEventListener(eventName, listener);
        reject(
          new Error(
            `Timeout waiting for event '${eventName}' after ${timeout}ms`,
          ),
        );
      }, timeout);
    }
  });
}
