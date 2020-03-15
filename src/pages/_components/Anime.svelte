<script>
  import { onMount } from "svelte";
  import anime from "animejs/lib/anime.es.js";
  import { scrollYPosition, innerHeight } from "../../stores/stores.js";

  onMount(() => {
    var animation = anime({
      targets: ".seek-anim-demo",
      translateX: 1270,
      delay: function(el, i) {
        return i * 100;
      },
      elasticity: 200,
      easing: "easeInOutSine",
      autoplay: false
    });
    animation.seek($scrollYPosition * animation.duration);
  });

  console.log($scrollYPosition);
</script>

<style>

</style>

<div class="seek-anim-demo">Hello</div>
{$scrollYPosition}
