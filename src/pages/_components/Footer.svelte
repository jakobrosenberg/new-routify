<script>
  import "lazysizes";
  let innerWidth;
</script>

<style>
  .footer {
    background-color: #212121;

    color: white;
    padding: 10px;
  }
  .icon {
    height: 50px;
  }
</style>

<div class="footer h-full">
  <div
    class="flex flex-col-reverse md:flex-row justify-center px-8 text-center
    h-full relative pb-8">

    <div class="md:w-1/2 text-center flex-col justify-center pt-8 md:pt-0">
      <h4 class="pb-2 uppercase">Contact Us</h4>
      <p>SOSF CROSSFIT & CHIROPRACTIC</p>
      <p>27 Halley Ct</p>
      <p>Fairfield Ct, 06825</p>

      <p>
        Phone:
        <a href="tel:203-522-4121">(203) 522-4121</a>
      </p>

    </div>

    <div class="md:w-1/2 flex-col">
      <h4 class="pb-4 uppercase">Follow us On Social Media</h4>
      <div class="flex flex-row justify-center">

        <a
          href="https://www.facebook.com/CrossFitSOSF/"
          target="_blank"
          alt="Sosfairfield Facebook Link">
          <svg
            class="icon mr-4"
            version="1.1"
            id="Facebook"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            xml:space="preserve">
            <path
              fill="#FFFFFF"
              d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2v-2.05c0-2.164,1.212-3.684,3.766-3.684
              l1.803,0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/sosfairfield/"
          target="_blank"
          alt="Sosfairfield Instagram Link">
          <svg
            id="Instagram"
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18">
            <defs>
              <style>
                .cls-1 {
                  fill: #fff;
                }
              </style>
            </defs>
            <title>instagram</title>
            <path
              class="cls-1"
              d="M18.94586,6.28931a6.60561,6.60561,0,0,0-.41833-2.18463,4.41189,4.41189,0,0,0-1.03809-1.59412,4.41189,4.41189,0,0,0-1.59412-1.03809,6.60561,6.60561,0,0,0-2.18463-.41833C12.75073,1.01038,12.44427,1,10,1s-2.75073.01038-3.71069,0.05414a6.60561,6.60561,0,0,0-2.18463.41833A4.41189,4.41189,0,0,0,2.51056,2.51056,4.41189,4.41189,0,0,0,1.47247,4.10468a6.60561,6.60561,0,0,0-.41833,2.18463C1.01038,7.24927,1,7.55573,1,10s0.01038,2.75073.05414,3.71069a6.60561,6.60561,0,0,0,.41833,2.18463,4.41189,4.41189,0,0,0,1.03809,1.59412,4.41109,4.41109,0,0,0,1.59412,1.03809,6.60561,6.60561,0,0,0,2.18463.41833C7.24927,18.98969,7.55573,19,10,19s2.75073-.01031,3.71069-0.05414a6.60561,6.60561,0,0,0,2.18463-.41833,4.60208,4.60208,0,0,0,2.6322-2.6322,6.60561,6.60561,0,0,0,.41833-2.18463C18.98962,12.75073,19,12.44427,19,10S18.98962,7.24927,18.94586,6.28931Zm-1.61993,7.34747a4.97824,4.97824,0,0,1-.30994,1.67114A2.98017,2.98017,0,0,1,15.30792,17.016a4.9786,4.9786,0,0,1-1.67114.30994C12.68787,17.3692,12.40326,17.37836,10,17.37836s-2.68787-.00916-3.63678-0.05243A4.9786,4.9786,0,0,1,4.69208,17.016a2.78769,2.78769,0,0,1-1.03485-.67322A2.78769,2.78769,0,0,1,2.984,15.30792a4.97824,4.97824,0,0,1-.30994-1.67114C2.6308,12.68774,2.62164,12.40314,2.62164,10s0.00916-2.68774.05243-3.63678A4.9786,4.9786,0,0,1,2.984,4.69208a2.78769,2.78769,0,0,1,.67322-1.03485A2.78769,2.78769,0,0,1,4.69208,2.984a4.9786,4.9786,0,0,1,1.67114-.30994C7.31226,2.6308,7.59686,2.62164,10,2.62164s2.68774,0.00916,3.63678.05243a4.9786,4.9786,0,0,1,1.67114.30994,2.78769,2.78769,0,0,1,1.03485.67322A2.78769,2.78769,0,0,1,17.016,4.69208a4.9786,4.9786,0,0,1,.30994,1.67114c0.04327,0.949.05243,1.2337,0.05243,3.63678S17.3692,12.68774,17.32593,13.63678ZM10,5.37836A4.62164,4.62164,0,1,0,14.62164,10,4.62169,4.62169,0,0,0,10,5.37836ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Zm5.88422-7.8042a1.08,1.08,0,1,1-1.08-1.08A1.08,1.08,0,0,1,15.88422,5.1958Z"
              transform="translate(-1 -1)" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div
    class="w-full md:inline-block flex items-center pb-8 justify-center px-8" />

  <div class="w-full flex justify-center">

    <iframe
      class="map lazyload"
      data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.5318316588714!2d-73.23161988465917!3d41.16656601761816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80fd2ac5793e9%3A0xa89ae17f9bda9b50!2sSOSF%20CrossFit%20%26%20Chiropractic!5e0!3m2!1sen!2sus!4v1570995359048!5m2!1sen!2sus"
      width="80%"
      height="450px"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      title="Google Map" />
  </div>

</div>

<svelte:window bind:innerWidth />
