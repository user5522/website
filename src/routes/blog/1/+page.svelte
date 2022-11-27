<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
  import Heart from "$lib/emojis/heart.svelte";
</script>

<svelte:head>
  <title>/blog/ - Initial Release!</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5">
  <div class="mx-auto flex max-w-4xl flex-col gap-16">
    <div id="blog-header">
      <div
        id="blog-title"
        class="flex flex-row  items-baseline gap-1 text-3xl font-semibold"
      >
        <div class="text-2xl text-light_true_gray">#1</div>
        <div>Initial Release!</div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <div
          id="blog-author"
          class="flex flex-row items-center justify-start gap-1 text-xl font-semibold text-lighter_true_gray sm:w-1/2"
        >
          <img
            src="/logos/logo.png"
            alt="user5522 icon"
            class="h-10 rounded-full"
          />
          <div>Author: User5522</div>
        </div>
        <div
          id="blog-date"
          class="flex items-center justify-start pl-10 text-xl font-semibold text-lighter_true_gray sm:w-1/2 sm:justify-end"
        >
          <div>On: 26/11/2022</div>
        </div>
      </div>
    </div>
    <div class="text-xl">
      Finally! After what felt like, forever, I'm proud to announce user5522.tk
      reached it's initial release, <strong>v1.0.0</strong>! <br />
      Website updates will now be weekly instead of daily (unless it's a critical
      bug) because, as much as I like web development, it is very tiring.<br />
      New blogs will be available whenever I have something to talk about (Blog can
      be about anything, even outside of my projects' updates) & hopefully you enjoy
      your stay here.<br />
      <strong>Open-Source website??</strong><br />
      Yes, you heard it right, the source code for this website is just like all
      of my other projects', available
      <a href="/rl/github" target="_blank">on my github profile.</a><br />
      It is mainly because I <Heart /> Open-Source & to allow anyone who wants to
      improve my projects do so.<br />
      It's also to track bugs & issues easily. Reminder for anyone who encounters
      any problem to
      <a
        href="https://github.com/user5522/user5522.github.io/issues"
        id="issue-link"
        target="_blank"
        rel="noreferrer">make an issue on github</a
      >
      and report what's wrong. (a picture/video of the problem would be appreciated.)<br
      />
      <strong>What's the point of this place?</strong><br />
      This website is basically (& for now) a place for me to showcase my projects
      & blog about my thoughts. Think about it as a portfolio X blog website collab.<br
      />
      I'm plannig on adding more content, like simple html5 mini-games and some fun
      stuff like random cat images<br />
      <br />
      I would LOVE to know if you want me to add anything in this website, hit me
      by creating a
      <a
        href="https://github.com/user5522/user5522.github.io/issues"
        id="issue-link"
        target="_blank"
        rel="noreferrer">github issue</a
      >
    </div>
  </div>
</div>
<Footer />
