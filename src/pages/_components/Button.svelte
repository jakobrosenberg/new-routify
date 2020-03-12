<script>
  import { onMount, onDestroy } from "svelte";

  import { fly, fade } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { goto } from "@sapper/app";

  onMount(() => {});

  export let href;
  export let type;
  export let color;
  export let hoverColor;
</script>

<style>
  .button-white:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    transition: 0.5s;
  }

  .button-black:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    transition: 0.5s;
  }
</style>

<a
  class="button-{color} text-{color} border-2 border-{color} rounded px-2 py-2
  pr-4 hover:border-none flex inline-flex group items-stretch"
  {href}>
  <div class="">
    <slot />
  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    class="z-10 h-4 fill-current text-{color} h-4 w-4 ml-2 hidden mt-1
    group-hover:inline-flex ">
    <polygon
      points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515
      18.485 10.101 17.071 16.172 11 0 11 0 9" />
  </svg>
</a>

<!--

<a href="/chiropractic">Chiropractic</a>
-->
