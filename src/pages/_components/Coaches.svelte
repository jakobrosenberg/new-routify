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
  h-full relative">

  <h2 class="flipIn text-white p-4">World Class Coaches</h2>

  <h3 class="text-gray-100 p-4">Your Success is Our Success</h3>

  <p class=" text-gray-300 p-4">
    Let our expert coaches set you up for success. Whether you do the Workout of
    the Day or get customized one on one training, the coaches at SOSF are the
    most knowledgeable and caring in the business. Your success is our success.
  </p>

  <div class=" p-4">
    <Button href="/coaches" color="white">Meet The Coaches</Button>
  </div>

</div>
<Parallax background={'img/richSquatLg.jpg'} id="rich" />
