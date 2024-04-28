<script>
    import "../app.css"
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  let y
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<title>Ardelean Daniel | Software Engineer</title>

<div class="relative flex flex-col max-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" + (
        y > 0 ? ' opacity-0 pointer-events-auto' : ' pointer-events-none opacity-0'
    )}>
        <button on:click={goTop} class="px-3 ml-auto rounded-full cursor-pointer bg-slate-900 text-violet-400 sm:px-4 hover:bg-slate-800 ">
            <i class="grid fa-solid fa-arrow-up place-items-center aspect-square"/>
        </button>
    </div>
    <Header y={y} />
    <slot />
    <Footer/>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />