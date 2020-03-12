<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let titles = [];

  let i = 0;
  let namey;
  export let duration;
  export let interval;

  function getTitle() {
    namey = titles[i];

    setTimeout(function() {
      if (i == titles.length - 1) {
        i = 0;
        getTitle();
      } else {
        i++;
        getTitle();
      }
    }, interval);
  }
  getTitle();
  onMount(() => {});
</script>

<style>

</style>

{#if i == 0}
  <h2
    class="text-white"
    in:fly={{ y: 20, duration: duration, easing: quintOut }}>
    {namey}
  </h2>
{/if}

{#if i == 1}
  <h2
    class="text-white"
    in:fly={{ y: 20, duration: duration, easing: quintOut }}>
    {namey}
  </h2>
{/if}

{#if i == 2}
  <h2
    class="text-white"
    in:fly={{ y: 20, duration: duration, easing: quintOut }}>
    {namey}
  </h2>
{/if}
