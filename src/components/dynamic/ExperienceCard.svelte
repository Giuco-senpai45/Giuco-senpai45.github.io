<script>
    import {work_experiences} from "$lib"
    export let experienceIndex;
</script>

<div class="p-10 min-h-[600px]">
    <div class="grid grid-cols-1 gap-5">
        <h3 class="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-violet-400 poppins">{work_experiences[experienceIndex].title}
            <span class="text-cyan-400 hover:text-cyan-300">@
                <a href={work_experiences[experienceIndex].link} target="_blank">
                    {work_experiences[experienceIndex].company}
                </a>
            </span>
        </h3>
        <p class="pb-2 text-lg font-semibold sm:text-xl md:text-2xl tech-mono">{work_experiences[experienceIndex].start} - {work_experiences[experienceIndex].end}</p>
        <ul class="space-y-2 list-disc px-6">
            {#each work_experiences[experienceIndex].description as detail}
                <li class="md:text-lg lg:text-xl poppins">{detail}</li>
            {/each}
        </ul>
        <div class="flex flex-row space-x-6 flex-wrap">
            {#each work_experiences[experienceIndex].technologies as tech}
                 <p class="font-thin text-cyan-300 text-md tech-mono sm:text-lg md:text-xl lg:text-2xl">{tech}</p>
            {/each}
        </div>
    </div>
</div>