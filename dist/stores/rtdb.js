import { writable } from "svelte/store";
import { onValue, ref as dbRef } from "firebase/database";
/**
 * @param {Database} rtdb - Firebase Realtime Database instance.
 * @param {string} path - Path to the individual database node.
 * @param {T | undefined} startWith - Optional default data.
 * @returns a store with realtime updates on individual database nodes.
 */
export function nodeStore(rtdb, path, startWith) {
    const dataRef = dbRef(rtdb, path);
    const { subscribe } = writable(startWith, (set) => {
        const unsubscribe = onValue(dataRef, (snapshot) => {
            set(snapshot.val());
        });
        return unsubscribe;
    });
    return {
        subscribe,
        ref: dataRef,
    };
}
/**
 * @param {Database} rtdb - Firebase Realtime Database instance.
 * @param {string} path - Path to the list of nodes.
 * @param {T[]} startWith - Optional default data.
 * @returns a store with realtime updates on lists of nodes.
 */
export function nodeListStore(rtdb, path, startWith = []) {
    const listRef = dbRef(rtdb, path);
    const { subscribe } = writable(startWith, (set) => {
        const unsubscribe = onValue(listRef, (snapshot) => {
            const dataArr = [];
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                dataArr.push({
                    nodeKey: childSnapshot.ref.key,
                    ...(typeof childData === "object" ? childData : {}),
                });
            });
            set(dataArr);
        });
        return unsubscribe;
    });
    return {
        subscribe,
        ref: listRef,
    };
}
