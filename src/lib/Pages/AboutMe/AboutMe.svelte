<script lang="ts">
  import Image from '../../Components/Image/Image.svelte';
  import IntroPic from '../../../assets/images/Intro.webp';
</script>

<div id="about-me">
  <div>
    <h1 class="primary">Hi! I'm <span>Emily</span></h1>
    <p class="medium">
      <span>
        I am a Rochester-based collaborative pianist and vocalist hailing
        originally from Syracuse, NY!
      </span>
      <span>
        As a proud Upstate NY-native, I grew up immersed in a rich music
        community and am excited that I can give back my communities now! My
        day-to-day life includes accompanying K-12 choirs, music directing for
        local shows, and playing in pit orchestras around the area.
      </span>
      <span>
        With over 20 years of piano study, I have specialized in collaboration
        with instrumentalists and vocalists for the past 8 years. Having also
        studied voice for 10 years, I am equipped to coach vocalists with
        various styles of music ranging from choral and classical to musical
        theatre, jazz, and pop.
      </span>
    </p>
  </div>
  <Image src={IntroPic} alt="An another head-shot of Emily" />
</div>

<style>
  #about-me {
    @apply lg:grid-cols-[auto_33%];
    @apply xl:gap-24;

    & > div {
      @apply flex;
      @apply flex-col;
      @apply items-center;

      @apply lg:max-w-full;
      @apply xl:max-w-min;

      @apply gap-4;
      @apply lg:gap-8;

      & > .primary {
        @apply text-nowrap;

        & > span {
          @apply text-goldish-500;
        }
      }

      & > p {
        @apply h-full;
        @apply text-center;
        @apply gap-8;

        @apply flex;
        @apply flex-col;
        @apply justify-evenly;

        & > span {
          @apply block;
        }
      }
    }
  }
</style>
