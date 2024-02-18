<script>
    import {work_experiences} from "$lib"
    export let experienceIndex;
</script>

<div class="p-10">
    <div class="grid grid-cols-1 gap-5">
        <h3 class="text-xl font-bold text-center sm:text-2xl md:text-3xl lg:text-4xl text-violet-400 poppins">{work_experiences[experienceIndex].title}
            <span class="text-cyan-400 hover:text-cyan-300">@
                <a href={work_experiences[experienceIndex].link} target="_blank">
                    {work_experiences[experienceIndex].company}
                </a>
            </span>
        </h3>
        <p class="pb-2 text-xl font-semibold text-center sm:text-2xl md:text-3xl tech-mono">{work_experiences[experienceIndex].start} - {work_experiences[experienceIndex].end}</p>
        <ul class="space-y-3 list-disc md:space-y-5 ">
            {#each work_experiences[experienceIndex].description as detail}
                <li class="text-md sm:text-lg md:text-xl lg:text-2xl poppins">{detail}</li>
            {/each}
        </ul>
        <div class="grid grid-cols-3 gap-5 text-center md:grid-cols-6 sm:space-x-8 md:space-x-10">
            {#each work_experiences[experienceIndex].technologies as tech}
                 <p class="font-thin text-violet-400 text-md tech-mono sm:text-lg md:text-xl lg:text-2xl">{tech}</p> 
            {/each}
        </div>
    </div>
</div>