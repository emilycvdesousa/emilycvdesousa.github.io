<script lang="ts">
  import Icon from '../../Components/Icon/Icon.svelte';
  import SocialBadge from '../../Components/SocialBadge/SocialBadge.svelte';
</script>

<div id="links">
  <div class="header">
    <h2>
      <Icon variant="phone-ringing" />
      Call Me, Beep Me and...
    </h2>
    <h1>
      Follow Me!
      <Icon variant="user-follow" />
    </h1>
  </div>
  <div id="socials">
    <SocialBadge variant="document" />
    <SocialBadge variant="facebook" />
    <SocialBadge variant="instagram" />
    <SocialBadge variant="linkedin" />
    <SocialBadge variant="youtube" />
    <SocialBadge variant="email" />
  </div>
</div>

<style>
  #links {
    @apply flex;
    @apply flex-col;

    @apply gap-8;

    & > .header {
      & > * {
        @apply text-nowrap;
        @apply flex;
        @apply flex-row;

        @apply gap-4;
        @apply items-center;
      }

      & :global(svg) {
        @apply w-[30px];
        @apply sm:w-[36px];
        @apply lg:w-[48px];
        @apply xl:w-[60px];

        @apply text-goldish-500;
      }

      & > h1 {
        @apply justify-center;
      }
    }

    & > #socials {
      @apply flex;
      @apply gap-[inherit];
      @apply flex-row;
      @apply flex-wrap;
      @apply justify-center;
    }

  }
</style>
