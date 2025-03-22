<script>import { downloadUrlStore } from "../stores/storage.js";
import { getFirebaseContext } from "../stores/sdk.js";
export let ref;
const { storage } = getFirebaseContext();
const store = downloadUrlStore(storage, ref);
</script>

{#if $store !== undefined}
    <slot link={$store} ref={store.reference} {storage}/>
{:else}
    <slot name="loading" />
{/if}

