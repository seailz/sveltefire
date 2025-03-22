<script>import { storageListStore } from "../stores/storage.js";
import { getFirebaseContext } from "../stores/sdk.js";
export let ref;
const { storage } = getFirebaseContext();
const listStore = storageListStore(storage, ref);
</script>

{#if $listStore !== undefined}
    <slot list={$listStore} ref={listStore.reference} {storage} />
{:else}
    <slot name="loading" />
{/if}

