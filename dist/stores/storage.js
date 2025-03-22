import { readable } from "svelte/store";
import { getDownloadURL, list, ref, uploadBytesResumable, } from "firebase/storage";
const defaultListResult = {
    prefixes: [],
    items: [],
};
/**
 * @param  {FirebaseStorage} storage firebase storage instance
 * @param  {string|StorageReference} reference file or storage item path or reference
 * @param  {{prefixes:[], items:[]}} startWith optional default data
 * @returns a store with the list result
 */
export function storageListStore(storage, reference, startWith = defaultListResult) {
    // Fallback for SSR
    if (!globalThis.window) {
        const { subscribe } = readable(startWith);
        return {
            subscribe,
            reference: null,
        };
    }
    // Fallback for missing SDK
    if (!storage) {
        console.warn("Cloud Storage is not initialized. Are you missing FirebaseApp as a parent component?");
        const { subscribe } = readable(defaultListResult);
        return {
            subscribe,
            reference: null,
        };
    }
    const storageRef = typeof reference === "string" ? ref(storage, reference) : reference;
    const { subscribe } = readable(startWith, (set) => {
        list(storageRef).then((snapshot) => {
            set(snapshot);
        });
    });
    return {
        subscribe,
        reference: storageRef,
    };
}
/**
 * @param  {FirebaseStorage} storage firebase storage instance
 * @param  {string|StorageReference} reference file or storage item path or reference
 * @param  {null} startWith optional default data
 * @returns a store with the list result
 */
export function downloadUrlStore(storage, reference, startWith = null) {
    // Fallback for SSR
    if (!globalThis.window) {
        const { subscribe } = readable(startWith);
        return {
            subscribe,
            reference: null,
        };
    }
    // Fallback for missing SDK
    if (!storage) {
        console.warn("Cloud Storage is not initialized. Are you missing FirebaseApp as a parent component?");
        const { subscribe } = readable(null);
        return {
            subscribe,
            reference: null,
        };
    }
    const storageRef = typeof reference === "string" ? ref(storage, reference) : reference;
    const { subscribe } = readable(startWith, (set) => {
        getDownloadURL(storageRef).then((snapshot) => {
            set(snapshot);
        });
    });
    return {
        subscribe,
        reference: storageRef,
    };
}
export function uploadTaskStore(storage, reference, data, metadata) {
    // Fallback for SSR
    if (!globalThis.window) {
        const { subscribe } = readable(null);
        return {
            subscribe,
            reference: null,
        };
    }
    // Fallback for missing SDK
    if (!storage) {
        console.warn("Cloud Storage is not initialized. Are you missing FirebaseApp as a parent component?");
        const { subscribe } = readable(null);
        return {
            subscribe,
            reference: null,
        };
    }
    const storageRef = typeof reference === "string" ? ref(storage, reference) : reference;
    let unsubscribe;
    const { subscribe } = readable(null, (set) => {
        const task = uploadBytesResumable(storageRef, data, metadata);
        unsubscribe = task.on("state_changed", (snapshot) => {
            set(snapshot);
        }, (error) => {
            console.error(error);
            set(task.snapshot);
        }, () => {
            set(task.snapshot);
        });
        return () => unsubscribe();
    });
    return {
        subscribe,
        reference: storageRef,
    };
}
