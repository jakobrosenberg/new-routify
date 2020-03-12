<script>
  import { onMount } from "svelte";
  import "lazysizes";

  export let background;

  let jarallax;

  export let id;
  onMount(async () => {
    const module = await import("jarallax");

    jarallax = module.jarallax;

    jarallax(document.getElementById(id), {
      speed: 0.5
    });
  });
</script>

<style>
  .img-fill {
    min-height: 50vh;
  }
</style>

<div class="jarallax relative" {id}>
  <img
    alt="alt"
    class="jarallax-img lazyload absolute"
    data-src={background}
    data-sizes="auto" />
  <div class="img-fill" />
</div>
