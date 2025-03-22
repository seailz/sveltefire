<script>import { nodeStore } from "../stores/rtdb.js";
import { getFirebaseContext } from "../stores/sdk.js";
export let path;
export let startWith = void 0;
const { rtdb } = getFirebaseContext();
let store = nodeStore(rtdb, path, startWith);
</script>

{#if $store !== undefined}
  <slot data={$store} ref={store.ref} {rtdb} />
{:else}
  <slot name="loading" />
{/if}
