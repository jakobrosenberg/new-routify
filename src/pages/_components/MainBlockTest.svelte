<script>
  import { quintOut } from "svelte/easing";
  import WordSlider from "./WordSlider.svelte";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import { fadeIn, fadeOut } from "../components/pageFade";
  import Scroller from "@sveltejs/svelte-scroller";
  import { writable } from "svelte/store";
  import Modal from "./Modal.svelte";
  import Form from "./Form.svelte";

  let progress;
  let progress1;
  let p1;
  let jarallaxVideo;
  let flipIn;
  let SmoothScroll;
  let visible = false;
  let paused;
  let vid;
  let jarallax;
  let animation;
  let outer;
  let show = false;

  function openModal() {
    show = !show;

    let noScroll = document.body;
    noScroll.classList.add("noScroll");
  }
  function closeModal() {
    show = false;

    let noScroll = document.body;
    noScroll.classList.remove("noScroll");
  }
  onMount(async () => {
    visible = true;
    const module = await import("jarallax");
    jarallaxVideo = module.jarallaxVideo;
    jarallax = module.jarallax;
    jarallaxVideo();
    jarallax(document.getElementById("jara"), {
      speed: 0,
      videoSrc: "mp4:img/sosf-video.mp4",
      videoPlayOnlyVisible: true
    });

    /*
    const smooth = await import("smooth-scroll");
    SmoothScroll = smooth.default;

    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      offset: 80
    });
     */
  });
</script>

<style>

</style>

{#if outer < 760}

  <div class="absolute object-cover top-0 left-0 w-full h-full " id="jara" />

  <div class="h-full w-full absolute top-0 left-0 bg-sosf opacity-50 " />

  <div class="flex flex-col items-center justify-center h-full w-full -mt-10">

    <h1 class=" flipIn text-white text-center">SOSF</h1>

    <h2 class=" flipIn text-white text-center">Your Source of Strength for</h2>

    <div class="flipIn pb-4">
      <WordSlider
        titles={['Crossfit', 'Chiropractic', 'Community']}
        duration={3000}
        interval={4000} />
    </div>
    <div class="pb-4 flipIn">
      <Button href="/" color="white" hoverColor="white">
        Try A Free Class
      </Button>
    </div>

    <div class=" flipIn">
      <a href="#second" class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="z-10 h-12 fill-current text-white hover:text-blue-600"
          viewBox="0 0 20 20">
          <path
            d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000
            16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
        </svg>

      </a>
    </div>

  </div>
{:else}
  <div class="md:flex block w-full">

    <div
      class="flex flex-col items-center justify-center h-screen md:w-1/2 bg-sosf
      h-screen">

      <h1 class=" flipIn text-white text-center">SOSF</h1>

      <h2 class=" flipIn text-white text-center">
        Your Source of Strength for
      </h2>

      <div class="flipIn pb-4">
        <WordSlider
          titles={['Crossfit', 'Chiropractic', 'Community']}
          duration={3000}
          interval={4000} />
      </div>
      <div class="pb-4 flipIn cursor-pointer" on:click={openModal}>
        <Button color="white" hoverColor="white">Try A Free Class</Button>
      </div>

      <div class="flipIn">
        <a href="#second" class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="z-10 h-12 fill-current text-white hover:text-blue-600"
            viewBox="0 0 20 20">
            <path
              d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0
              000 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
          </svg>

        </a>
      </div>

    </div>
    <div class="flex md:w-1/2 z-0 md:h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 1200"
        fill="#1e70c3"
        class=" h-screen pl-0 z-10">
        <polygon points="0,0 100,0 0,1200" />
      </svg>
      <div
        class="md:absolute object-cover md:top-0 md:right-0 h-screen md:w-1/2"
        id="jara" />

      <div
        class="h-screen md:w-1/2 md:absolute md:top-0 md:right-0 bg-sosf
        opacity-0 md:opacity-50" />
    </div>

  </div>
{/if}
<svelte:window bind:outerWidth={outer} />
{#if show}
  <div class="">
    <Modal on:click={closeModal}>
      <Form />
    </Modal>
  </div>
{/if}
