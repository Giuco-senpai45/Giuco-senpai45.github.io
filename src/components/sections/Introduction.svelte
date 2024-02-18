<script>
  import WORK_MAIL from "../../lib/constants.js"
  
    const hoveringPic = (e) => {
      e.target.src = "images/me-pic.png";
    };
  
    const leavingPic = (e) => {
      e.target.src = "images/me-slate.png";
    };
  </script>

<section id="introduction" class="grid items-center grid-cols-2">
    <div
      class="flex flex-col gap-6 text-center lg:justify-center lg:text-left md:gap-8"
    >
      <div class="px-5 backdrop-blur-sm">
        <p class="text-sm text-center md:text-left sm:text-lg md:text-2xl text-cyan-300 tech-mono">Hi, my name is</p>
        <break />
        <p
          class="text-xl font-bold sm:text-4xl md:text-6xl poppins text-violet-400"
        >
          Ardelean Daniel
        </p>
        <p
          class="pt-3 text-lg font-semibold lg:pt-6 sm:text-3xl md:text-5xl poppins text-cyan-300"
        >
          I build modern software solutions.
        </p>
        <p class="text-sm sm:text-md md:text-xl lg:pt-3">
          I'm a software engineer based in Cluj-Napoca <span class="italic"
            >(Romania)</span
          >. I'm truly passionate about creating modern, qualitative software
          solutions that help people and businesses.
        </p>
      </div>
  
      <a
        href={`mailto:${WORK_MAIL}`}
        target="_blank"
        class="relative inline-flex items-center justify-start px-6 py-3 mx-auto overflow-hidden transition-all rounded-full bg-slate-200 btn group sm:text-lg md:text-xl poppins"
      >
        <span
          class="absolute top-0 left-0 w-0 h-0 transition-all duration-500 ease-out rounded-full bg-cyan-500 opacity-30 group-hover:w-full group-hover:h-full"
        />
        <span
          class="z-10 w-full text-black transition-colors duration-300 ease-in-out"
        >
          Get in touch &rarr;
        </span>
      </a>
    </div>
    <div class="grid shadow-2xl place-items-center">
      <img
        src={"images/me-slate.png"}
        on:mouseleave={leavingPic}
        on:focus={hoveringPic}
        on:mouseover={hoveringPic}
        alt="Me pic"
        class="object-cover z-[2] max-h-[40vh] md:max-h-[50vh] lg:max-h-[70vh]"
      />
    </div>
  </section>