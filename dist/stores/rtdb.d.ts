/// <reference types="svelte" />
import type { Database } from "firebase/database";
/**
 * @param {Database} rtdb - Firebase Realtime Database instance.
 * @param {string} path - Path to the individual database node.
 * @param {T | undefined} startWith - Optional default data.
 * @returns a store with realtime updates on individual database nodes.
 */
export declare function nodeStore<T = any>(rtdb: Database, path: string, startWith?: T): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T | null>, invalidate?: (() => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: import("@firebase/database").DatabaseReference;
};
/**
 * @param {Database} rtdb - Firebase Realtime Database instance.
 * @param {string} path - Path to the list of nodes.
 * @param {T[]} startWith - Optional default data.
 * @returns a store with realtime updates on lists of nodes.
 */
export declare function nodeListStore<T = any>(rtdb: Database, path: string, startWith?: T[]): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<T[]>, invalidate?: (() => void) | undefined) => import("svelte/store").Unsubscriber;
    ref: import("@firebase/database").DatabaseReference;
};
