<script>

  import WORK_MAIL, { GITHUB_URL, LINKEDIN_URL } from "../../lib/constants";

</script>

<style>
</style>

<section id="contact" class="flex flex-col items-center">
  <p class="col-span-2 pb-5 lg:pb-10 section-title text-center">04. Contact</p>

  <div class="grid grid-cols-2 max-w-3xl justify-center py-10">
    <div class="space-y-2 px-4 border-r-2 border-slate-700">
      <h4 class="text-3xl text-amber-500 font-semibold">Want to chat?</h4>
      <p class="text-lg poppins">
        My inbox is open for all.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
    </div>
    <div class="flex text-xl px-14 pt-2">
      <ul class="space-y-2">
        <li>
          <a href={GITHUB_URL} target="_blank">
            <i class="fa-brands fa-github" />
            GitHub
          </a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank">
            <i class="fa-brands fa-linkedin" />
            Linkedin
          </a>
        </li>
        <li>
          <a href={`mailto:${WORK_MAIL}`} target="_blank">
            <i class="fa-regular fa-envelope" />
            E-mail
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
