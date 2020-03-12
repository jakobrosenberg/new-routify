<script>
  import LightBox from "../components/LightBox.svelte";
  import { onMount, onUpdate } from "svelte";
  import "lazysizes";

  export let src;
  export let transition;
  let showLight = false;
  let ScrollReveal;
  let imgSlideRight;
  let imgSlideLeft;

  function openLightBox() {
    showLight = !showLight;
    let noScroll = document.body;
    noScroll.classList.add("noScroll");
  }
  function closeLightBox() {
    showLight = false;
    let noScroll = document.body;
    noScroll.classList.remove("noScroll");
  }

  onMount(async () => {
    const module = await import("scrollreveal");
    ScrollReveal = module.default;

    imgSlideRight = document.querySelectorAll(".imgSlideRight");
    imgSlideLeft = document.querySelectorAll(".imgSlideLeft");
    ScrollReveal().reveal(imgSlideRight, {
      duration: 800,
      reset: true,
      origin: "bottom",
      distance: "50px"
    });

    ScrollReveal().reveal(imgSlideLeft, {
      duration: 800,
      reset: true,
      origin: "left",
      distance: "50px"
    });
  });
</script>

<style>
  img {
    cursor: zoom-in;
  }
</style>

<div class="mx-8 mb-8 pb-2/3 relative">
  <img
    alt="crossfit"
    class="{transition} rounded-lg shadow-lg lazyload absolute top-0 h-full
    w-full object-cover"
    data-src={src}
    on:click={openLightBox} />
</div>
{#if showLight}
  <div on:click={closeLightBox}>
    <LightBox img={src} />
  </div>
{/if}
