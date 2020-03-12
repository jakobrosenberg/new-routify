<script>
  let draw;
  let open = false;
  let width;
  let height;
  let drawer;
  let outerWidth;

  function clickButton() {
    drawer.open = !drawer.open;
  }
</script>

<style>

</style>

<slot />

<svelte:window bind:outerWidth />
