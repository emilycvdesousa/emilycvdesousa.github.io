<script lang="ts">
  import Icon from '../Icon/Icon.svelte';
  import { defaultArg, linkArgs, type LinkTypes } from './types';

  // Base component props
  let classname: string = '';
  export { classname as class };
  export let variant: LinkTypes | undefined;
  export let style: 'outline' | 'filled' = 'filled';

  // Get link args
  const args = variant ? linkArgs[variant] : defaultArg;
  const component = args.component;
  export let href = args.href;

  // Prep props
  let className = `link link-${style}`;
  if (variant) className += ' icon';
  if (classname) className += ` ${classname}`;
</script>

{#if !component}
  <a class={className} {...args} {href} {...$$restProps}>
    {#if variant}
      <Icon {variant} />
    {/if}
    <slot />
  </a>
{:else}
  <svelte:component
    this={component}
    class={className}
    {...args}
    {...$$restProps}
  >
    {#if variant}
      <Icon {variant} />
    {/if}
    <slot />
  </svelte:component>
{/if}

<style>
  :global(.link) {
    @apply px-6;
    @apply py-3;
    @apply flex;
    @apply gap-4;
    @apply uppercase;
    @apply rounded-xl;
    @apply text-goldish-500;
    @apply items-center;
    @apply font-semibold;
    @apply tracking-widest;

    @apply justify-center;
  }

  :global(.link-outline) {
    @apply border-2;
    @apply border-goldish-500;

    &:hover {
      @apply border-goldish-400;
    }
    &:active {
      @apply border-goldish-300;
    }
  }

  :global(.link-filled) {
    @apply text-offblack-50;
    @apply bg-goldish-500;

    &:hover {
      @apply bg-goldish-400;
    }
    &:active {
      @apply bg-goldish-300;
    }
  }

  :global(.icon svg) {
    @apply h-6;
  }
</style>
