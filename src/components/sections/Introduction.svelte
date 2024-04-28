<script>
  import WORK_MAIL from "../../lib/constants.js"

  let imgElem = null;

  const hoveringPic = () => {
    imgElem.src = "images/me-pic.png";
  };

  const leavingPic = (e) => {
    imgElem.src = "images/me-slate.png";
  };
</script>

<section id="introduction" class="grid items-center grid-cols-2">
    <div
      class="flex flex-col gap-6 text-center lg:justify-center lg:text-left md:gap-8"
    >
      <div class="px-5 space-y-2 backdrop-blur-sm">
        <p class="text-lg font-bold text-center sm:text-3xl md:text-5xl md:text-left text-cyan-300 poppins">Hello,</p>
        <p class="text-lg font-bold text-center sm:text-3xl md:text-5xl md:text-left poppins">
          <span class="text-cyan-300">I'm</span>
          <span
            tabindex="0"
            role="button"
            on:mouseleave={leavingPic}
            on:focus={hoveringPic}
            on:mouseover={hoveringPic}
            class="text-violet-400 hover:text-amber-600"
          >
            Ardelean Daniel,
          </span>
        </p>
        <p
          class="text-lg font-bold sm:text-3xl md:text-5xl poppins text-cyan-300"
        >
          I build modern software solutions.
        </p>
        <p class="text-sm sm:text-md md:text-xl lg:pt-3 tech-mono text-slate-300">
          Adaptable / Passionate / Ambitious
        </p>
      </div>

      <a
        href={`mailto:${WORK_MAIL}`}
        target="_blank"
        class="relative items-center self-start block px-6 py-3 mx-5 overflow-hidden transition-all ring-cyan-600 ring-2 btn group sm:text-lg md:text-xl poppins"
      >
        <span
          class="z-10 w-full transition-colors duration-300 ease-in-out"
        >
          Get in touch &rarr;
        </span>
      </a>
    </div>
    <div class="grid shadow-2xl place-items-center">
      <img
        bind:this={imgElem}
        src={"images/me-slate.png"}
        on:mouseleave={leavingPic}
        on:focus={hoveringPic}
        on:mouseover={hoveringPic}
        alt="Me pic"
        class="object-cover z-[2] max-h-[40vh] md:max-h-[50vh] lg:max-h-[70vh]"
      />
    </div>
  </section>