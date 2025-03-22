import type { StorageReference, FirebaseStorage, ListResult, UploadTaskSnapshot, UploadMetadata } from "firebase/storage";
interface StorageListStore {
    subscribe: (cb: (value: ListResult) => void) => void | (() => void);
    reference: StorageReference | null;
}
/**
 * @param  {FirebaseStorage} storage firebase storage instance
 * @param  {string|StorageReference} reference file or storage item path or reference
 * @param  {{prefixes:[], items:[]}} startWith optional default data
 * @returns a store with the list result
 */
export declare function storageListStore(storage: FirebaseStorage, reference: string | StorageReference, startWith?: ListResult): StorageListStore;
interface DownloadUrlStore {
    subscribe: (cb: (value: string | null) => void) => void | (() => void);
    reference: StorageReference | null;
}
/**
 * @param  {FirebaseStorage} storage firebase storage instance
 * @param  {string|StorageReference} reference file or storage item path or reference
 * @param  {null} startWith optional default data
 * @returns a store with the list result
 */
export declare function downloadUrlStore(storage: FirebaseStorage, reference: string | StorageReference, startWith?: string | null): DownloadUrlStore;
interface UploadTaskStore {
    subscribe: (cb: (value: UploadTaskSnapshot | null) => void) => void | (() => void);
    reference: StorageReference | null;
}
export declare function uploadTaskStore(storage: FirebaseStorage, reference: string | StorageReference, data: Blob | Uint8Array | ArrayBuffer, metadata?: UploadMetadata | undefined): UploadTaskStore;
export {};
