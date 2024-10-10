<script lang="ts">
  const email = 'ZW1pbHljdmRlc291c2FAZ21haWwuY29t';
  
  let className: string;
  export { className as class };

  /**
   * Callback to translate encoded email into something the user can be directed to
   * @param e MouseEvent
   */
  function clickCallback(e: MouseEvent) {
    e.preventDefault();
    const decodedEmail = atob(email);
    const url = `mailto:${decodedEmail}`;
    location.href = url;
  }
</script>

<a
  class={`email-me ${className}`}
  href={null}
  {...$$restProps}
  on:click={clickCallback}
>
  <slot />
</a>

<style>
  .email-me {
    @apply cursor-pointer;
  }
</style>
