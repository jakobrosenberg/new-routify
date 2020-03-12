<script>
  import { MDCDrawer } from "@material/drawer";
  import { onMount } from "svelte";
  import { MDCTopAppBar } from "@material/top-app-bar";
  import { MDCDismissibleDrawerFoundation } from "@material/drawer";
  import { MDCList } from "@material/list";
  import SideDrawer from "../components/SideDrawer.svelte";

  let draw;
  let open = false;
  let width;
  let height;
  let drawer;
  let outerWidth;
  export let type;
  if (type === "fixed") {
    type = "mdc-top-app-bar--fixed";
  }
  function clickButton() {
    drawer.open = !drawer.open;
  }

  onMount(() => {
    //const drawer = MDCDrawer.attachTo(draw);
    drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
    const listEl = document.querySelector(".mdc-drawer .mdc-list");
    const mainContentEl = document.querySelector("body");

    const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
    //topAppBar.setScrollTarget(document.getElementById("body"));
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });

    mainContentEl.addEventListener("click", event => {
      drawer.open = false;
    });
  });
</script>

<style>
  .mdc-top-app-bar {
    background-color: white;
    max-width: 100%;
  }
  .mdc-top-app-bar__navigation-icon {
    cursor: pointer;
  }
</style>

<header class="mdc-top-app-bar {type}" id="app-bar">

  {#if outerWidth <= 768}
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <i
          on:click={clickButton}
          class="demo-menu material-icons mdc-top-app-bar__navigation-icon">
          menu
        </i>

      </section>
    </div>
  {:else}
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">

        <slot />
      </section>
    </div>
  {/if}
</header>
<SideDrawer />
<svelte:window bind:outerWidth />
