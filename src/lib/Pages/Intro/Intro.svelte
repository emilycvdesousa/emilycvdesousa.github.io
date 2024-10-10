<script lang="ts">
  import Link from '../../Components/Link/Link.svelte';
  import Image from '../../Components/Image/Image.svelte';
  import Headshot from '../../../assets/images/Headshot.webp';
  import BrandLogo from '../../../assets/images/Brand-Logo.webp';
</script>

<div id="intro">
  <Image src={Headshot} alt="A head-shot of Emily" />
  <div id="name-card">
    <div>
      <h1 id="name" class="primary">Emily C. Desousa</h1>
      <h3 id="title" class="all-uppercase">Collaborative Pianist & Vocalist</h3>
    </div>
    <img
      class="logo"
      src={BrandLogo}
      alt="Emily C. Desousa - Collaborative Pianist & Vocalist"
    />
    <div id="main-links">
      <Link style="outline" variant="document">Resume</Link>
      <Link variant="email">Email me</Link>
    </div>
  </div>
</div>

<style>
  #intro {
    @apply lg:grid-cols-[33%_auto];

    & > #name-card {
      /* Card with title, logo, and link buttons */
      @apply flex;
      @apply flex-col;
      @apply text-center;
      @apply items-center;

      @apply gap-4;
      @apply lg:gap-8;

      /* Make title uppercase and set sizes */
      & #title {
        @apply lg:mt-4;
      }

      /* Styles for the main link buttons */
      & > #main-links {
        @apply h-16;
        @apply flex;
        @apply w-full;

        /* @apply justify-center; */
        @apply justify-evenly;

        @apply gap-5;
        @apply xl:gap-16;

        & > :global(a) {
          /* Make links roughly same size - even if there isn't much content */
          @apply sm:max-w-[250px];
          @apply lg:max-w-full;
          @apply text-nowrap;
        }
      }
    }
  }
</style>
