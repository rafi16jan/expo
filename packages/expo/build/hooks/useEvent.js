import { useEffect, useState } from 'react';
/**
 * React hook that listens to events emitted by the given object. The returned value is an array of event parameters
 * that get updated whenever a new event is dispatched.
 * @param emitter An object that emits events, e.g. a native module or shared object or an instance of [`EventEmitter`](#eventemitter).
 * @param event Name of the event to listen to.
 * @param initialValue An array of event parameters to use until the event is called for the first time.
 * @returns An array of arguments passed to the event listener.
 */
export function useEvent(emitter, event, initialValue = []) {
    const [eventParams, setEventParams] = useState(initialValue);
    useEffect(() => {
        const listener = (...args) => setEventParams(args);
        const subscription = emitter.addListener(event, listener);
        return () => subscription.remove();
    }, [emitter, event]);
    return eventParams;
}
//# sourceMappingURL=useEvent.js.map