<script>
  import MainBlock from "./_components/MainBlock.svelte";
  import Nav from "./_components/Nav.svelte";
  import Trans from "./_components/Trans.svelte";
  import { scrollYPosition, innerHeight } from "../stores/stores.js";

  let y;
  let innerH;

  $: scrollYPosition.update(n => {
    return (n = y);
  });

  $: innerHeight.update(n => {
    return (n = innerH);
  });
</script>

<MainBlock />
<div class="h-full">

  <div class="h-screen bg-red-900">
    <Trans speed={0.5} from={1000}>Hello World</Trans>
    <Trans speed={0.5} from={1000}>Hello World</Trans>

    <Trans speed={0.5} from={1000}>Hello World</Trans>

    <Trans speed={0.5} from={1000}>Hello World</Trans>
  </div>
  <div class="h-screen bg-green-900" />
  <div class="h-screen bg-yellow-900" />
</div>

<svelte:head />
<svelte:window bind:scrollY={y} bind:innerHeight={innerH} />
