<script>
  import MainBlock from "./_components/MainBlock.svelte";
  import Nav from "./_components/Nav.svelte";
  //import Trans from "./_components/Trans.svelte";
  import { onMount, tick } from "svelte";
  // import { scrollYPosition, innerHeight } from "../stores/stores.js";
  //import Anime from "./_components/Anime.svelte";
  //import anime from "animejs/lib/anime.es.js";
  import basicScroll from "basicscroll";
  let y;

  async function myBasicScroll(elem){
    await tick();
        basicScroll
        .create({
          elem: elem,
          from: "top-bottom",
          to: "top-middle",
          direct: true,
          track: true,
          props: {
            "--opacity": {
              from: "0",
              to: "1"
            },
            "--translateX": {
              from: "-1000px",
              to: "0px"
            },
            "--translateZ": {
              from: "1000px",
              to: "0px"
            },
            "--translateY": {
              from: "1000px",
              to: "0px"
            },
            "--scale": {
              from: "0",
              to: "1"
            }
          }
        })
        .start();
  }
</script>

<style>
  .scene {
    /*
	 * Use the same CSS variable as specified in our instance.
	 */
    opacity: var(--opacity);
    /*
	 * The will-change CSS property provides a way for authors to hint browsers about the kind of changes
	 * to be expected on an element, so that the browser can setup appropriate optimizations ahead of time
	 * before the element is actually changed.
   */
    transform: translate3d(
      var(--translateX),
      var(--translateY),
      var(--translateZ)
    );
    will-change: opacity;
  }
</style>

<MainBlock />
<div class="h-full">
  <div class="h-screen bg-red-800">
    <h1 use:myBasicScroll class="scene text-white text-center">Hello</h1>
    <h1 use:myBasicScroll class="scene text-white text-center">Hello</h1>
    <h1 use:myBasicScroll class="scene text-white text-center">Hello</h1>
    <h1 use:myBasicScroll class="scene text-white text-center">Hello</h1>
  </div>

  <div class="h-screen bg-green-900" />
  <div class="h-screen bg-yellow-900" />
</div>

<svelte:head />
<svelte:window bind:scrollY={y} />
