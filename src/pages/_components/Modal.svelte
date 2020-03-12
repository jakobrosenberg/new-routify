<script>
  import Form from "./Form.svelte";
  import { slide, fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<style>

</style>

<div class="flex absolute inset-0 items-center justify-center">
  <!-- Off-canvas menu background overlay -->

  <div
    class="absolute inset-0 bg-black opacity-50"
    tabindex="-1"
    transition:fade={{ delay: 0, duration: 400, opacity: 0 }} />

  <!-- Off-canvas menu -->

  <div
    class=" bg-white overflow-y-auto w-3/4 h-full rounded justify-center flex
    max-h-3/4 relative"
    transition:fly={{ delay: 0, duration: 800, y: 500, opacity: 0, easing: quintOut }}>

    <div class="absolute top-0 right-0 p-4">
      <button
        on:click
        type="button"
        class="text-gray-600 focus:outline-none focus:text-gray-900"
        aria-label="Close">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071
            19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142
            12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071
            4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12
            10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289
            4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858
            12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289
            19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12
            13.4142L18.2929 19.7071Z" />
        </svg>
      </button>
    </div>
    <div class="px-4 pt-4 pb-6">
      <img class="h-16 w-16" src="/img/sosf_logo_2.svg" alt="" />
      <!--This is the Content for the Modal-->
      <slot />
    </div>

  </div>

</div>
