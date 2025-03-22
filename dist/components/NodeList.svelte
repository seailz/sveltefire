<script>import { nodeListStore } from "../stores/rtdb.js";
import { getFirebaseContext } from "../stores/sdk.js";
export let path;
export let startWith = [];
const { rtdb } = getFirebaseContext();
let store = nodeListStore(rtdb, path, startWith);
</script>

{#if $store !== undefined}
  <slot data={$store} ref={store.ref} count={$store?.length ?? 0} {rtdb} />
{:else}
  <slot name="loading" />
{/if}
