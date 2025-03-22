<script>import { uploadTaskStore } from "../stores/storage.js";
import { getFirebaseContext } from "../stores/sdk.js";
export let ref;
export let data;
export let metadata = void 0;
const { storage } = getFirebaseContext();
const upload = uploadTaskStore(storage, ref, data, metadata);
$:
  progress = $upload?.bytesTransferred / $upload?.totalBytes * 100;
</script>

{#if $upload !== undefined}
  <slot task={$upload?.task} snapshot={$upload} {progress} ref={upload.reference} {storage} />
{/if}
