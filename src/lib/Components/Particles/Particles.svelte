<script>
  import { onMount } from 'svelte';
  import { loadSlim } from '@tsparticles/slim';
  import Particles, { particlesInit } from '@tsparticles/svelte';

  import particleConfig from './firefly.json';

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  onMount(() => {
    particlesInit(async (engine) => {
      // call this once per app
      // you can use main to customize the tsParticles instance adding presets or custom shapes
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    });
  });
</script>

<Particles
  id="svelte-particles"
  style=""
  class="opacity-50 -z-10 absolute"
  options={particleConfig}
  on:particlesLoaded={onParticlesLoaded}
/>
