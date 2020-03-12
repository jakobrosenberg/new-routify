<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  export let highlight;
  export let segment;
  export let text = "text here";
  export let link;
  export let target;
  console.log(segment);
</script>

<style>
  ul {
    position: absolute;

    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  ul {
    position: relative;
    top: 0;
  }
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }
  li {
    display: block;
    float: left;
  }
  .selected {
    position: relative;
    display: inline-block;
  }
  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }
  a {
    padding-left: 10px;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
    </li>
    <li>
      <a class={segment === 'Crossfit' ? 'selected' : ''} href="crossfit">
        Crossfit
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

  </ul>
</nav>
