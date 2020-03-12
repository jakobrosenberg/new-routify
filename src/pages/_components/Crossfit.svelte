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
  class="bg-sosf flex flex-col items-center justify-center px-8 text-center z-0
  speed-1">

  <h2 class="flipIn text-white p-4">CROSSFIT</h2>

  <h3 class=" text-gray-100 p-4">There’s a Level for Everyone</h3>

  <p class=" text-gray-300 p-4">
    The SOSF CrossFit training program builds strength and conditioning through
    our 9 week training blocks. You will be challenged on everything from
    strength, mobility, flexibility, gymnastics and cardiovascular ability.
  </p>

  <div class=" p-4">
    <Button href="crossfit" color="white">
      See the different levels of Crossfit we offer
    </Button>
  </div>
</div>

<Parallax background={'img/homeSquat.jpg'} id="squat" />
