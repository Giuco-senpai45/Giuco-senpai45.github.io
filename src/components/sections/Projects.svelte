<script>
  import Project from "../dynamic/Project.svelte";
  import projects from "$lib";

  let totalDisplayedProjects = 6;
</script>

<section
  id="projects"
  class="flex flex-col gap-12 px-5 py-20 lg:gap-24 md:px-7 lg:px-10 lg:py-32"
>
  <div class="flex flex-col gap-2 text-center">
    <p class="pb-10 text-center section-title">03. Projects</p>
    <div class="backdrop-blur-sm">
      <p class="mb-10 text-lg sm:text-xl md:text-2xl poppins">
        Below I've selected some of my more "consistent" personal projects. Most
        of them either peak from a consistency (lots of coding) or from a
        technical (a challenging implementation) point of view.
      </p>
      <p class="text-lg sm:text-xl md:text-2xl poppins">
        For a more detalied view of the projects I highly suggest checking out
        their github repository.
      </p>
    </div>
  </div>
  <div
    class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 gap lg:gap-10"
  >
    {#each projects as project, i}
      {#if i < totalDisplayedProjects}
        <Project {project} />
      {/if}
    {/each}
  </div>
  <div class="flex justify-center space-x-36">
    {#if totalDisplayedProjects <= projects.length}
      <button
        class="loadprojects-btn"
        on:click={() => {
          totalDisplayedProjects += 3;
        }}
      >
        Load more
      </button>
    {/if}

    {#if totalDisplayedProjects > 6}
      <button
        class="loadprojects-btn"
        on:click={() => {
          totalDisplayedProjects -= 3;
        }}
      >
        See less
      </button>
    {/if}
  </div>
</section>

<style>
  .loadprojects-btn {
    @apply p-5 text-lg backdrop-blur-sm sm:text-xl md:text-2xl font-semibold text-white bg-transparent rounded-xl shadow-md hover:shadow-md hover:shadow-violet-300 hover:translate-y-[2px] border-2 border-violet-700 hover:bg-violet-700 hover:bg-opacity-40;
  }
</style>
