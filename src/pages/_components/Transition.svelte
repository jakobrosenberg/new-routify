<script>
  import { y, innerH } from "./Global.svelte";
  import { onMount } from "svelte";
  export let rect;
  //export let innerH;
  //export let y;
  export let speed;

  onMount(() => {
    // let elemy = document.getElementById("test");
    // let top = elemy.getBoundingClientRect().top;
  });
</script>

<style>
  .test {
    opacity: var(--opacity);
    transform: translateX(var(--translateX));
    will-change: opacity;
  }
</style>

<h1
  id="test"
  class="text-white text-center test"
  style="--opacity:{1 - rect / innerH / speed};">
  Hello World
</h1>
