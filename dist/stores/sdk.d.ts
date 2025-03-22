import type { Firestore } from "firebase/firestore";
import type { Database } from "firebase/database";
import type { Auth } from "firebase/auth";
import type { FirebaseStorage } from "firebase/storage";
import type { Analytics } from "firebase/analytics";
export interface FirebaseSDKContext {
    auth?: Auth;
    firestore?: Firestore;
    rtdb?: Database;
    storage?: FirebaseStorage;
    analytics?: Analytics | null;
}
export declare const contextKey = "firebase";
export declare function setFirebaseContext(sdks: FirebaseSDKContext): void;
/**
 * Get the Firebase SDKs from Svelte context
 */
export declare function getFirebaseContext(): FirebaseSDKContext;
