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
  class="flex flex-col items-center justify-center px-8 text-center bg-white ">

  <h2 class="flipIn p-4">Chiropractic</h2>

  <h3 class="text-gray-900 " p-4>There’s a Tool for Every Pain</h3>

  <p class="text-gray-800 p-4">
    At SOSF we take a multi-faceted approach to health care. We utilize
    chiropractic technique, exercise, nutrition and any other modality we think
    may be appropriate.
  </p>

  <div class=" p-4">
    <Button href="/chiropractic" color="black">
      Check out our state of the art techniques
    </Button>
  </div>
</div>

<Parallax background={'img/cupping.jpg'} id="cupping" />
