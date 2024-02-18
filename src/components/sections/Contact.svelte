<script>

  import WORK_MAIL, { GITHUB_URL, LINKEDIN_URL } from "../../lib/constants";

</script>

<style>
  .contact-icon-container {
    @apply px-5 sm:px-10 md:px-20 lg:px-36
  }
  .contact-icon {
    @apply w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-cyan-400
  }
</style>

<section id="contact">
  <p class="col-span-2 pb-5 text-center lg:pb-10 section-title">04. Contact</p>

  <div class="p-5 lg:p-10 backdrop-blur-sm">
    <p class="text-center text-md sm:text-lg md:text-xl lg:text-2xl poppins">
      Have a product idea or just want to chat? My inbox is open for all.
      Whether you have a question or just want to say hi, I'll try my best to
      get back to you!
    </p>
    <div class="grid items-center grid-cols-3 pt-5 text-center md:pt-10">
      <div class="contact-icon-container">
        <a href={GITHUB_URL} target="_blank" class="contact-icon fa-brands fa-github"></a>
      </div>
      <div class="contact-icon-container">
        <a href={`mailto:${WORK_MAIL}`} target="_blank" class="contact-icon fa-brands fa-linkedin"></a>
      </div>
      <div class="contact-icon-container">
        <a href={LINKEDIN_URL} target="_blank" class="contact-icon fa-regular fa-envelope"></a>
      </div>
    </div>
  </div>
</section>
