<script>
  export let segment;
  import SideDrawer from "./SideDrawer.svelte";
  import { onMount } from "svelte";

  let y;
  let module;

  let show = false;
  function toggleSide() {
    show = !show;
  }
  function closeSide() {
    show = false;
  }

  onMount(async () => {});
</script>

<style>
  .selected {
    position: relative;
    display: inline-block;
    color: blue;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(12, 113, 195);
    display: block;
    bottom: -1px;
  }
</style>

<div class="z-10 sticky bg-white top-0 {y <= 0 ? '' : 'shadow-md'}">
  <nav
    class=" z-20 relative flex flex-wrap items-center justify-between md:py-4 ">
    <div class="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0 h-12">
      <a href="/" aria-label="Link to the Home Page">
        <img
          class="hidden md:block {y <= 0 ? 'logoBig' : 'logoSmall'} pl-4"
          src="/img/sosf_logo_2.svg"
          alt="Sosf Logo: Your Source for Crossfit, Chiropractic, and Community" />
      </a>
    </div>
    <div class="flex-shrink-0 pr-4 md:hidden">
      <button
        on:click={toggleSide}
        type="button"
        class="block text-gray-600 focus:outline-none focus:text-gray-900"
        aria-label="Menu">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21
            6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" />
          <path
            d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21
            12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
          <path
            d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4
            19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z" />
        </svg>
      </button>
    </div>
    <div
      class="hidden md:block md:ml-10 md:flex md:items-baseline
      md:justify-between md:bg-transparent">
      <div class="lg:absolute inset-0 flex items-center justify-center">

        <a
          aria-label="Link to the Home Page"
          class="{segment === undefined ? 'selected' : ''} text-sm font-medium
          px-2 text-gray-900 hover:text-gray-700"
          href="/">
          Home
        </a>
        <a
          aria-label="Link to the Crossfit Page"
          class="{segment === 'crossfit' ? 'selected' : ''} text-sm font-medium
          px-2 text-gray-900 hover:text-gray-700"
          href="crossfit">
          Crossfit
        </a>

        <a
          aria-label="Link to the Chiropractic Page"
          class="{segment === 'chiropractic' ? 'selected' : ''} text-sm px-2
          font-medium text-gray-900 hover:text-gray-700"
          href="chiropractic">
          Chiropractic
        </a>

        <a
          aria-label="Link to the Coaches Page"
          class="{segment === 'coaches' ? 'selected' : ''} text-sm font-medium
          px-2 text-gray-900 hover:text-gray-700"
          href="coaches">
          Coaches
        </a>

      </div>
    </div>
  </nav>
</div>
{#if show}
  <div on:click={closeSide}>
    <SideDrawer />
  </div>
{/if}
<svelte:window bind:scrollY={y} />
