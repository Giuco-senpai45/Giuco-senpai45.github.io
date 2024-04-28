<script>
  export let project;

  let showPic = false;
  const togglePicture = () => {
    showPic = !showPic;
  }
</script>

<div
  class="flex flex-col gap-4 p-4 text-justify duration-200 border border-solid rounded-lg shadow-md hover:shadow-lg hover:-translate-y-[2px] hover:-skew-y-1 sm:p-6 md:p-8 border-violet-700 group hover:border-violet-400 hover:shadow-violet-500 shadow-violet-700 backdrop-blur-sm"
>
  <div class="flex justify-center">
    <button
      class="p-2 mb-6 text-2xl duration-200 bg-transparent rounded-full hover:bg-violet-700 hover:bg-opacity-40 hover:shadow-md hover:shadow-violet-300"
      on:click={togglePicture}
    >
      {#if showPic}
        <i class="fas fa-eye-slash"></i>
        {:else}
          <i class="fas fa-eye"></i>
      {/if}
    </button>
  </div>
  <a
    href={project.link}
    target="_blank"
    class="self-end w-4 mx-2 -mt-24 text-2xl rounded-full cursor-pointer md:text-4xl hover:text-cyan-400 fa-brands fa-github"
  >
  </a>
  <div
    class="grid mx-auto text-5xl duration-200 gap-y-4 place-items-center md:text-5xl"
  >
    <h3 class="pb-2 text-xl font-medium sm:text-3xl md:text-4xl">{project.name}</h3>
    {#if showPic}
      <img
        src={project.image}
        alt={project.name}
        class="bg-slate-800 md:w-full md:h-full"
      />
      {:else}
        <p class="text-sm md:text-lg poppins">{project.description}</p>
    {/if}
  </div>
  <div class="grid items-center grid-cols-2 gap-2 mt-5 align-bottom 2xl:grid-cols-3">
    {#each project.langs as lang}
      <p class="text-sm md:text-lg tech-mono">{lang}</p>
    {/each}
  </div>
</div>
