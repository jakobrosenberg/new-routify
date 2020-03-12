<script>
  import "lazysizes";
</script>

<div class="flex flex-col items-center justify-center px-8 text-center w-full">

  <h2 class="flipIn">Class Schedule</h2>

  <iframe
    class="min-w-full"
    loading="lazy"
    title="Calendar"
    srcset="https://SOSFCrossFit.zenplanner.com/zenplanner/portal/calendar.cfm?type=Calendar&FRAME=true"
    src="https://SOSFCrossFit.zenplanner.com/zenplanner/portal/calendar.cfm?type=Calendar&FRAME=true"
    frameborder="0"
    id="idZenPlannerFrame">
    <noframes>
      <a
        href="https://SOSFCrossFit.zenplanner.com/zenplanner/portal/calendar.cfm">
        Online Calendar
      </a>
    </noframes>
  </iframe>

</div>
<svelte:head>
  <script
    src="https://SOSFCrossFit.zenplanner.com/zenplanner/skin/js/resize.js"
    async>

  </script>
</svelte:head>
