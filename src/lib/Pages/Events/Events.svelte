<script lang="ts">
  import Image from '../../Components/Image/Image.svelte';
</script>

<div id="events">
  <div class="header">
    <h1 class="">Special Occasions & Events</h1>
    <p class="subtext italic">
      Looking to add a more elegant ambiance to your special event?
      <br />
      Hire me as your live accompanist to create the perfect space and mood for your
      event!
    </p>
  </div>

  <div class="details">
    <p class="medium">
      <span>
        I specialize in light jazz piano & jazz vocals (if requested), and/or
        classical music and acoustic pop tunes* as the perfect background sound
        to your special event!
      </span>

      <span>
        I also have access to a wonderful community of great vocalists and
        string players(violinists, violists cellists, etc.) if you are
        interested in a fuller musical experience! Please inquire for more
        information.
      </span>

      <span>
        <span class="prices">Rate starts at $75 / HOUR</span>
        <p class="note">
          *Music choices/genres can be flexible!
          <br />
          Please reach out with any special requests and I will do my best to accommodate.
        </p>
      </span>
    </p>

    <Image src="Images/Wedding-Show.webp" alt="Emily performing" />
  </div>
</div>

<style>
  #events {
    @apply xl:gap-10;
    @apply md:grid-rows-[min-content_auto];

    & > .header {
      @apply text-center;
    }

    & > .details {
      @apply grid;
      @apply justify-evenly;
      @apply items-center;
      @apply justify-items-center;

      @apply grid-cols-1;
      @apply lg:grid-cols-[auto_45%];
      
      @apply grid-rows-[auto_min-content];
      @apply lg:grid-rows-1;

      @apply gap-[inherit];

      & > p {
        @apply flex;
        @apply flex-col;
        @apply justify-center;
        @apply gap-10;

        @apply max-w-[500px];

        & > span {
          @apply text-center;
          @apply block;
        }
      }
    }
  }
</style>
