<script lang="ts">
  import { onMount } from 'svelte';
  import debounce from 'lodash.debounce';

  import Page from '../Page/Page.svelte';
  import type { ElementProps } from './types';

  export let pages: ElementProps[] = [];
  let currPage = 0;
  let carouselElement: HTMLDivElement | undefined;
  let pageEles: HTMLDivElement[] = [];
  let isScrolling: boolean = false;

  /**
   * Scrolls the carousel to a desired Y value
   * @param y Final Y position to scroll to
   * @param duration Scroll animation duration
   * @param timing Timing function to use for the animation (defaults to a bezier curve)
   */
  function scrollCarousel(
    y: number,
    duration: number,
    timing: (x: number) => number = (x) => x ** 2 / (2 * (x ** 2 - x) + 1)
  ) {
    return new Promise<void>((res, rej) => {
      if (!carouselElement) return rej();

      // Figure out how much to offset the final scroll position by
      // (due to existing scroll position)
      const startingY = carouselElement.scrollTop;
      const scrollDiff = y - startingY;
      let start: number | undefined;

      // Function that runs on each frame
      const step = (timestamp: number) => {
        if (!carouselElement) return;
        if (!start) start = timestamp;
        // Elapsed time since start of scrolling
        const time = timestamp - start;
        // Get percent completion
        const percentComplete = Math.min(time / duration, 1);
        // Scroll the viewport by the calculated percent
        carouselElement.scrollTop =
          startingY + scrollDiff * timing(percentComplete);

        // Continue with animation for as long as needed
        if (time < duration) return window.requestAnimationFrame(step);
        res();
      };

      // Start scroll animation
      window.requestAnimationFrame(step);
    });
  }

  /**
   * Scrolls the carousel to a specific page
   * @param index Page to be scrolled to
   */
  function scrollToPage(index: number): void {
    if (isScrolling || index < 0 || index + 1 > pageEles.length) return;
    // Flag that we're scrolling
    isScrolling = true;
    // Set the new page
    currPage = index;
    // Start scrolling
    scrollCarousel(pageEles[index].offsetTop, 1000).then(() => {
      // When done - remove the mutex
      isScrolling = false;
    });
  }

  /**
   * Handles the 'wheel' event to change pageEles when a user scrolls
   * @param event Standard WheelEvent
   */
  function handleScroll(event: WheelEvent) {
    // If we're scrolling or on a mobile device don't manually scroll
    if (isScrolling || window.innerWidth < 1024) return false;
    scrollToPage(currPage + (event.deltaY > 0 ? 1 : -1));
  }

  const throttleScroll = debounce(handleScroll, 75, {
    leading: true,
    trailing: false,
  });

  onMount(() => {
    // Obtain all pageEles - aka div elements
    // Skip last since it's always the controls
    pageEles = [...document.querySelectorAll('.carousel > div')].slice(
      0,
      -1
    ) as HTMLDivElement[];
    // Disable manual scroll position
    // TODO: Remove this and restore position immediately
    history.scrollRestoration = 'manual';
  });
</script>

<div class="carousel" on:wheel={throttleScroll} bind:this={carouselElement}>
  {#each pages as p}
    <Page {...p.pageProps}>
      <svelte:component this={p.element} {...p.props} />
    </Page>
  {/each}

  <div class="carousel-controls">
    {#each pageEles as _, index}
      <button
        disabled={isScrolling}
        class={index === currPage ? 'active' : ''}
        aria-label={`Go to page ${index + 1}`}
        on:click={() => scrollToPage(index)}
      />
    {/each}
  </div>
</div>

<style>
  .carousel {
    @apply max-h-dvh;
    /* If mobile allow user to scroll typically  */
    @apply lg:overflow-y-hidden;

    /* Page button styles */
    & > .carousel-controls {
      @apply hidden;
      @apply lg:flex;

      @apply fixed;
      @apply h-fit;
      @apply right-2;
      @apply top-1/2;
      @apply flex-col;
      @apply gap-2;
      @apply -translate-y-1/2;

      & > button {
        @apply rounded-[50%];
        @apply border;
        @apply border-solid;
        @apply border-offblack-500;
        @apply w-[10px];
        @apply h-[10px];

        /* Make button solid when active */
        &.active {
          @apply bg-offblack-500;
        }

        /* Darken page buttons when disabled */
        &:disabled {
          @apply border-offblack-300;
          &.active {
            @apply bg-offblack-300;
          }
        }
      }
    }

    /* Content styles  */
    /* & > :global(div:not(.carousel-controls)) { */
    /* @apply h-screen; */
    /* @apply p-4; */
    /* } */
  }
</style>
