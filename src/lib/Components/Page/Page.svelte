<script lang="ts">
  import type { PageProps } from './types';

  // Whether force the container size to the viewport
  // Only relevant on mobile views
  export let enforceScreenVh: PageProps['enforceScreenVh'] = false;
  export let id: PageProps['id'] = '';
</script>

<div {id} class={`page${enforceScreenVh ? ' screen-vh' : ''}`}>
  <slot />
</div>

<style>
  .page {
    @apply flex;
    @apply items-center;
    @apply justify-center;

    @apply px-2;
    @apply lg:px-8;
    @apply py-10;

    @apply lg:h-svh;
    --container-height: max(100svh, 600px);

    &.screen-vh {
      /* If forcing mobile view height - set container height to viewport */
      @apply h-[var(--container-height)];
    }
    &:not(.screen-vh) {
      /* Otherwise, set min height to viewport - but allow to grow larger if needed */
      @apply min-h-fit;
      @apply lg:min-h-[var(--container-height)];
    }

    /* Styles for each of the page containers to center content */
    & > :global(div) {
      @apply grid;
      @apply grid-cols-1;

      /* @apply grid-rows-[auto_min-content]; */
      @apply auto-rows-auto;
      @apply lg:grid-rows-1;

      @apply gap-8;
      @apply lg:gap-16;
      @apply xl:gap-0;

      @apply items-center;
      @apply justify-items-center;

      /* @apply justify-around; */
      @apply justify-evenly;

      @apply w-full;
      @apply h-full;
      @apply lg:h-min;
    }
  }
</style>
