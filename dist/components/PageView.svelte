<script>import { logEvent, setUserId, isSupported } from "firebase/analytics";
import { getFirebaseContext } from "../index.js";
import { onMount } from "svelte";
export let eventName = "page_view";
export let setUser = true;
export let customParams = {};
const analytics = getFirebaseContext().analytics;
const auth = getFirebaseContext().auth;
onMount(async () => {
  if (!await isSupported()) {
    return;
  }
  if (setUser) {
    setUserId(analytics, auth.currentUser?.uid ?? null);
  }
  logEvent(analytics, eventName, {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    ...customParams
  });
});
</script>
