<script>
  import { elasticOut } from "svelte/easing";

  import { scrollYPosition, innerHeight } from "../../stores/stores.js";

  let opacity;
  let side;
  export let speed = 1;

  export let from;

  function getTop(node, y) {
    return {
      update(y) {
        let toppy = node.getBoundingClientRect().top;
        let view = 1 - toppy / $innerHeight;
        if (view >= 0 && view <= speed) {
          opacity = view / speed;
        }
      },
      destroy() {}
    };
  }

  function getSide(node, y) {
    return {
      update(y) {
        let topOfElement = node.getBoundingClientRect().top;
        let scopeOfEntry = 1 - topOfElement / $innerHeight;

        if (scopeOfEntry >= 0 && scopeOfEntry <= speed) {
          side = from - (scopeOfEntry * 1000) / speed;
        } else if (scopeOfEntry > speed) {
          side = 0;
        } else {
          side = from;
        }
      },

      destroy() {}
    };
  }
</script>

<style>
  .test {
    opacity: var(--opacity, 1);
    transform: translate3d(
        var(--translateX, 0),
        var(--translateY, 0),
        var(--translateZ, 0)
      )
      scale(var(--scale));

    will-change: transform;
  }
</style>

<div
  class="contain"
  use:getTop={$scrollYPosition}
  use:getSide={$scrollYPosition}>
  <h1
    class="text-white text-center test z-20"
    style="--opacity:{opacity}; --translateY:{side}px; --translateX:{side}px;
    --scale:{1 - side / 1000}">
    <slot />

  </h1>
</div>
<!--
{#if visible}
  <div class="contain">
    <h1 class="text-white text-center" in:whoosh>
      <slot />

    </h1>
  </div>
{/if}
-->
