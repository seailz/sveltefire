<script>import { setFirebaseContext } from "../stores/sdk.js";
export let firestore = void 0;
export let rtdb = void 0;
export let auth = void 0;
export let storage = void 0;
export let analytics = void 0;
setFirebaseContext({ firestore, rtdb, auth, storage, analytics });
</script>

<slot />
