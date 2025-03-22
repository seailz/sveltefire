import { SvelteComponent } from "svelte";
import type { FirebaseStorage, ListResult, StorageReference } from 'firebase/storage';
declare const __propDef: {
    props: {
        ref: string | StorageReference;
        children?: import("svelte").Snippet<{
            list: ListResult;
            ref: StorageReference | null;
            storage: FirebaseStorage | undefined;
        }> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            list: ListResult | null;
            ref: StorageReference | null;
            storage?: FirebaseStorage | undefined;
        };
        loading: {};
    };
};
export type StorageListProps = typeof __propDef.props;
export type StorageListEvents = typeof __propDef.events;
export type StorageListSlots = typeof __propDef.slots;
export default class StorageList extends SvelteComponent<StorageListProps, StorageListEvents, StorageListSlots> {
}
export {};
