import { SvelteComponent } from "svelte";
import type { FirebaseStorage, UploadTask, StorageReference, UploadMetadata, UploadTaskSnapshot } from "firebase/storage";
declare const __propDef: {
    props: {
        ref: string | StorageReference;
        data: Blob | Uint8Array | ArrayBuffer;
        metadata?: UploadMetadata | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            task: UploadTask | undefined;
            ref: StorageReference | null;
            snapshot: UploadTaskSnapshot | null;
            progress: number;
            storage?: FirebaseStorage | undefined;
        };
    };
};
export type UploadTaskProps = typeof __propDef.props;
export type UploadTaskEvents = typeof __propDef.events;
export type UploadTaskSlots = typeof __propDef.slots;
export default class UploadTask extends SvelteComponent<UploadTaskProps, UploadTaskEvents, UploadTaskSlots> {
}
export {};
