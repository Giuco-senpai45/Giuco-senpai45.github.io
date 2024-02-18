<script>
    import ExperienceCard from "../dynamic/ExperienceCard.svelte";
    
    let currentExperience = "exp1";
    let experienceIndex = 0;
    var expCard;
    const changeExperienceCard = (e) => {
        currentExperience = e.target.id;
        if (currentExperience == "exp1") {
            experienceIndex = 0;
        } else if (currentExperience == "exp2") {
            experienceIndex = 1;
        } else {
            experienceIndex = 2;
        }
    }
</script>

<style>
    .experience-list-item {
        @apply p-5 text-lg sm:text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-cyan-400
    }

    .activexp {
        @apply border-l-4 border-cyan-400 duration-200 text-cyan-400 font-semibold;
    }
</style>

<section id="experience" class="grid items-center grid-cols-1">
    <p class="pb-5 text-center md:pb-10 section-title">02. Experience</p>
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 place-items-center backdrop-blur-sm">
        <ul class="space-y-5 border-l-2">
            <li>
                <button id="exp1" on:click={changeExperienceCard} class="experience-list-item poppins" class:activexp={currentExperience === "exp1"}>Backend Academy Golang</button>

            </li>
            <li>
                <button id="exp2" on:click={changeExperienceCard} class="experience-list-item poppins" class:activexp={currentExperience === "exp2"}>Junior Full-Stack Developer</button>
            </li>
            <li>
                <button id="exp3" on:click={changeExperienceCard} class="experience-list-item poppins" class:activexp={currentExperience === "exp3"}>Internship Backend Ruby on Rails</button>
            </li>
        </ul>

        {#key experienceIndex}
            <div class="animate-fade-right">
                <ExperienceCard experienceIndex={experienceIndex} />
            </div>
        {/key}
    </div>
</section>