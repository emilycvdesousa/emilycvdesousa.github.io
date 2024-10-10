<script lang="ts">
  export let alt: string;
  export let src: string;
</script>

<img class="image" {alt} {src} />

<style>
  /* :global(.screen-vh .image) {
  } */

  .image {
    @apply min-h-0;
    @apply min-w-0;
    @apply h-auto;
    @apply max-h-full;
    @apply drop-shadow-lg;
  }

  :global(:not(.screen-vh) > * > .image) {
    @apply bind-last-vw;
    @apply lg:max-w-full;
  }

</style>
