<script lang="ts">
  import Image from '../../Components/Image/Image.svelte';
  import IntroPic from '../../../assets/images/Intro.webp';
</script>

<div id="about-me">
  <div>
    <h1 class="primary">about me</h1>
    <p class="medium">
      <span>
        Hi, I'm Emily and I am a Rochester-based musician hailing originally
        from Syracuse, NY! I am extremely grateful for the opportunities I had
        growing up immersed in such a vibrant community of musicians and I am
        thrilled that I can give back and help educate the next generation of
        caring, thoughtful musicians!
      </span>
      <span>
        With over 21 years of piano study, I have specialized in collaboration
        with vocalists and instrumentalists for the past 8 years. What makes my
        approach to piano collaboration unique is that I am also a trained
        vocalist and violist of over 10 years. Having experienced both "sides"
        of the process, I am able to use my vocal and instrumental knowledge to
        inform my piano playing and provide more effective coaching to those I
        collaborate with.
      </span>
      <span>
        My day-to-day life includes being a staff accompanist for Pittsford
        Schools choral programs, adjunct faculty member at Nazareth University,
        and a pit musician/music director for local theater companies. I
        currently reside in Bushnell's Basin with my husband, Kevin, and our 2
        dogs and 3 cats!
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
      @apply lg:max-w-[600px];
      /* @apply xl:max-w-min; */

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
