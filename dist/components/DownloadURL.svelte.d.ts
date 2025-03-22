import { SvelteComponent } from "svelte";
import type { FirebaseStorage, StorageReference } from 'firebase/storage';
declare const __propDef: {
    props: {
        ref: string | StorageReference;
        children?: import("svelte").Snippet<{
            link: string | null;
            ref: StorageReference | null;
            storage: FirebaseStorage | undefined;
        }> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            link: string | null;
            ref: StorageReference | null;
            storage?: FirebaseStorage | undefined;
        };
        loading: {};
    };
};
export type DownloadUrlProps = typeof __propDef.props;
export type DownloadUrlEvents = typeof __propDef.events;
export type DownloadUrlSlots = typeof __propDef.slots;
export default class DownloadUrl extends SvelteComponent<DownloadUrlProps, DownloadUrlEvents, DownloadUrlSlots> {
}
export {};
