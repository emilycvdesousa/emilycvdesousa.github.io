<script lang="ts">
  import Link from '../Link/Link.svelte';
  import { type LinkTypes } from '../Link/types';

  export let variant: LinkTypes;
</script>

<Link {variant} class="social-badge">
  <slot />
  <div class="hover-wrapper" />
</Link>

<style>
  :global(a.social-badge) {
    @apply p-0;
    @apply w-12;
    @apply flex;
    @apply relative;
    @apply items-center;
    @apply justify-center;
    @apply text-offblack-500;
    background: none !important;

    @apply ease-in-out;
    @apply duration-[0.25s];
    @apply transition-colors;

    & > :global(svg) {
      @apply min-w-12;
      @apply h-auto;
    }

    & > .hover-wrapper {
      @apply z-0;
      @apply w-full;
      @apply h-full;
      @apply absolute;
      @apply rounded-full;

      @apply opacity-0;
      @apply bg-offblack-500;
      transform: scale(0%);

      @apply transition-all;
      @apply duration-[0.4s];
      @apply ease-social-badge;
    }

    &:hover,
    &:focus {
      @apply text-offblack-50;
      @apply outline-none;

      & > :global(svg) {
        @apply z-10;
      }
      & > .hover-wrapper {
        @apply opacity-100;
        transform: scale(140%);
      }
    }
  }
</style>
