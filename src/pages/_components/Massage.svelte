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
  class="flex flex-col items-center justify-center px-8 text-center z-0 bg-white">

  <h2 class=" flipIn p-4">Massage</h2>

  <h3 class="text-gray-900 p-4">Feel The Power of Release</h3>

  <p class=" text-gray-800 p-4">
    Stimulate your recovery after a hard workout with an invigorating massage.
    Help your tissue heal faster, break up scar tissue, or just relax into the
    weekend.
  </p>

  <div class="p-4">
    <Button href="/massage" color="black">Get A Massage</Button>
  </div>
</div>

<Parallax background={'img/massageHead.jpg'} id="massage" />
