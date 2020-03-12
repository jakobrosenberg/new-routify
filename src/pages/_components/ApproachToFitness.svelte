<script>
  import { onMount, onDestroy } from "svelte";
  import "lazysizes";

  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let tween;
  let controller1;

  let mainContainer;
  onMount(() => {});
</script>

<style>

</style>

<div
  class="flex flex-col items-center justify-center md:px-8 px-2 text-center
  bg-white">

  <h2 class="flipIn h-full" data-aos="fade-zoom-in">OUR APPROACH TO FITNESS</h2>

  <h3 class=" h-full text-gray-900 pb-2" data-aos="fade-zoom-in">
    RELEASE. RE-ENGAGE. RETRAIN.
  </h3>
  <div class="md:px-8 px-2">
    <p class="h-full text-center text-gray-800">
      Tight hips and shoulders never make for a good workout. In fact, most
      people who join a gym can quickly discover that they have moved too
      quickly into the training phase without first addressing the hidden
      impingements that lie waiting to cause injury when overworked. At SOSF we
      take a methodical approach to get you back into the best shape you’ve ever
      been in. Yes, we have clients who are in better shape in their 40’s and
      50’s than when they were in their 20’s and 30’s.
    </p>
  </div>
</div>
<div class="block md:flex justify-center pt-8 bg-white">

  <div
    id="needle"
    class=" md:w-1/3 flex flex-col text-center px-2 items-center ">

    <img
      data-sizes="auto"
      class="md:max-h-1/2 pt-2 lazyload min-h-250 min-w-250"
      data-src="img/needleBlue-1250x.svg"
      alt="Dry Needling" />
    <h3 class=" flipIn pt-2 text-gray-900">Release</h3>
    <p class="text-gray-800">
      First, Release those old injuries through our Chiropractic, massage,
      freezerburn™ and basic training programs. Work through the tightness and
      old injuries to break up scar tissue and restore functional movement.
    </p>

  </div>

  <div
    id="kettleBell"
    class=" md:w-1/3 flex flex-col text-center px-2 items-center">
    <img
      data-sizes="auto"
      class="md:max-h-1/2 pt-2 lazyload min-h-250 min-w-250"
      data-src="img/KBSwingSolidBlue250x1.svg"
      alt="Kettle Bell" />
    <h3 class="flipIn pt-2 text-gray-900">Re-Engage</h3>
    <p class=" text-gray-800">
      Next, Re-engage the muscles by learning new movements. Fully functional
      movements that use all of your body parts in each workout.
    </p>
  </div>

  <div
    id="snatch"
    class=" md:w-1/3 flex flex-col text-center px-2 items-center">
    <img
      data-sizes="auto"
      class="md:max-h-1/2 pt-2 lazyload min-h-250 min-w-250"
      data-src="img/SnatchSolidBlue250x1.svg"
      alt="Snatch" />
    <h3 class="flipIn pt-2 text-gray-900">Retrain</h3>
    <p class=" text-gray-800">
      Finally, Retrain the whole system for peak personal performance. Go to
      levels you never dreamed were possible.
    </p>
  </div>

</div>
