<script>
  import { HERMES, UBB_BACHELORS, UBB_MASTERS } from "../../lib/constants";

</script>

<style>
  .about-pics-container {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-5 lg:px-5 lg:grid-cols-3 justify-center
  }

  .card-zoom {
    @apply relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-32 w-auto rounded-md;
  }

  .card-zoom-image {
    @apply absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
  }

  .card-zoom-text {
    @apply absolute text-base xl:text-lg font-extrabold transition-all duration-500 ease-in-out transform scale-105 md:scale-110 lg:scale-150 text-white opacity-80;
  }

  .card-zoom:hover .card-zoom-image {
    @apply scale-150;
  }
  .card-zoom:hover .card-zoom-text {
    @apply scale-100;
  }

  .description-text {
    @apply text-sm md:text-lg lg:text-xl;
  }

  .description-container {
    @apply px-5 pt-10 lg:px-10 backdrop-blur-sm
  }
</style>

<section id="about" class="grid grid-cols-2 py-20">
  <p class="col-span-2 pb-10 text-center section-title">01. About Me</p>
  <div class="description-container">
    <p class="description-text">
      Hello!
    </p>
    <break/>
    <p class="description-text">
      I'm Daniel, and one of my favorite perks about myself is my endless curiosity.
    </p>
    <p class="description-text">I graduated from <a href={`${UBB_BACHELORS}`} target="_blank" class="text-violet-400 hover:text-cyan-400 ">Babeș-Bolyai's Computer Science Bachelors programme</a>
      and I'm currently studying <a href={`${UBB_MASTERS}`} target="_blank" class="text-violet-400 hover:text-cyan-400 ">Distributed Systems</a> at the same university.
    </p>
  </div>
  <div class="about-pics-container">
    <div class="card-zoom">
      <div class="card-zoom-image bg-[url('/images/volunteering/h1.jpg')]"></div>
      <h1 class="card-zoom-text tech-mono">Coordination</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-[url('/images/volunteering/h2.jpg')]"></div>
      <h1 class="card-zoom-text tech-mono">Teamwork</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-[url('/images/volunteering/h3.jpg')]"></div>
      <h1 class="card-zoom-text tech-mono">Team &MediumSpace; &ThinSpace; player</h1>
    </div>
  </div>
  <div class="about-pics-container">
    <div class="card-zoom">
      <div class="card-zoom-image bg-[url('/images/volunteering/h4.jpg')]"></div>
      <h1 class="card-zoom-text tech-mono">Charismatic</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-[url('/images/volunteering/h6.jpg')]"></div>
      <h1 class="card-zoom-text tech-mono">Flexibility</h1>
    </div>
    <div class="card-zoom">
      <div class="card-zoom-image bg-[url('/images/volunteering/h7.jpg')]"></div>
      <h1 class="card-zoom-text tech-mono">Cool &MediumSpace; &ThinSpace; headed</h1>
    </div>
  </div>
  
  <div class="description-container">
    <p class="description-text poppins">In a journey to discover myself I started volunteering and I was part of the HR department for 2 years and currently the Events Manager for <a href={`${HERMES}`} target="_blank" class="text-violet-400 hover:text-cyan-400">Societatea Hermes</a>.</p>
  </div>
</section>
