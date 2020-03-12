<script>
  import Parallax from "../components/Parallax.svelte";
  import Button from "../components/Button.svelte";
  import { onMount, onDestroy } from "svelte";

  let kettle;
  let scene;

  onMount(() => {});
</script>

<style>

</style>

<div
  class="bg-sosf flex flex-col items-center justify-center px-8 text-center z-0">

  <h2 class="flipIn text-white p-4">Freezerburn™</h2>

  <h3 class=" text-gray-100 p-4">Blast Your Fat</h3>

  <p class=" text-gray-300 p-4">
    State-of-the-Art Cryolipolysis helps to speed up fat burning in the those
    spots you never thought you could lose fat.
  </p>

  <div class=" p-4">
    <Button color="white">Melt Away Your Fat</Button>
  </div>
</div>

<Parallax background={'img/freezerburn.jpg'} id="freezerBurn" />
