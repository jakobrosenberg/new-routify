<script>
  import { slide, fly, fade, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import "lazysizes";

  export let img;
</script>

<style>
  img {
    cursor: zoom-out;
  }
</style>

<div class="fixed flex align-middle inset-0 justify-center z-40">
  <!-- Off-canvas menu background overlay -->

  <div
    class="z-10 fixed inset-0 flex z-40"
    transition:fade={{ delay: 0, duration: 400, opacity: 0 }}>
    <div class="absolute inset-0 bg-black opacity-85" tabindex="-1" />
  </div>

  <!-- Off-canvas menu -->
  <div
    class="flex justify-center inset-0 z-10 items-center h-screen absolute z-40
    rounded">
    <div
      class="z-40 bg-white overflow-y-auto w-4/5 h-4/5 rounded-lg "
      transition:scale={{ delay: 300, duration: 800, opacity: 0, start: 0, easing: quintOut }}>

      <div class="relative pb-1/2 z-40 bg-white w-full h-full rounded">

        <img
          alt="crossfit"
          class="absolute rounded-lg shadow-lg lazyload h-full w-full top-0
          object-cover z-40"
          data-src={img} />

      </div>
    </div>
  </div>
</div>
