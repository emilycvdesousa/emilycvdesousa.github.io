<script lang="ts">
  import Carousel from './lib/Components/Carousel/Carousel.svelte';
  import Particles from './lib/Components/Particles/Particles.svelte';

  import Intro from './lib/Pages/Intro/Intro.svelte';
  import AboutMe from './lib/Pages/AboutMe/AboutMe.svelte';
  import Info from './lib/Pages/Info/Info.svelte';
  import Events from './lib/Pages/Events/Events.svelte';
  import Shows from './lib/Pages/Shows/Shows.svelte';
  import Links from './lib/Pages/Links/Links.svelte';

  const pages = [
    {
      element: Intro,
      props: {},
      pageProps: {
        enforceScreenVh: true,
      },
    },
    {
      element: AboutMe,
    },
    {
      element: Info,
    },
    {
      element: Events,
    },
    {
      element: Shows,
    },
    { element: Links },
  ];
</script>

<main>
  <Carousel {pages}>
    <!-- Main intro page -->
    <!-- <Page enforceScreenVh={true}>
      <Intro />
    </Page> -->
    <!-- "I'm Emily" Page -->
    <!-- <Page>
      <AboutMe />
    </Page>
    <Page>
      <Info />
    </Page>
    <Page>
      <Events />
    </Page>
    <Page>
      <Shows />
    </Page> -->
  </Carousel>
  <Particles />
</main>

<style>
  :global(body) {
    @apply bg-offblack-50;
    @apply text-offblack-500;
    @apply h-full;
    @apply w-full;
  }

  main {
    /* Center main and set max-width */
    @apply container;
    @apply m-auto;
  }
</style>
