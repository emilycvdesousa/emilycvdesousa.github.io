<script lang="ts">
  import BrandLogo from '../../../assets/images/Brand-Logo.webp';
</script>

<div id="info">
  <div class="header">
    <img
      class="logo"
      src={BrandLogo}
      alt="Emily C. Desousa - Collaborative Pianist & Vocalist"
    />
    <div class="header-text">
      <h2>Supporting <br />& Growing</h2>
      <p class="subtext">
        A supporting, healing, and health-focused approach to accompanying and
        coaching. Supporting you so you can reach your fullest potential!
      </p>
    </div>
  </div>

  <div class="details">
    <!-- Vocal Coaching -->
    <div class="vocal">
      <h3>Coaching & Collaboration</h3>
      <p>
        Want to learn more about the basics of singing, need help prepping for
        an audition, or simply want to get some practice in with a live pianist?
        Contact me about setting up a coaching session!
      </p>
      <br />
      <p class="prices">Sessions start at $30+</p>
    </div>

    <!-- Separator -->
    <hr />

    <!-- Live info -->
    <div class="live">
      <h3>Recital / Audition Accompaniment</h3>
      <p>
        Need a live accompanist for a concert or audition? Click the inquiry
        button below to contact me about my availability!*
      </p>
      <br />
      <p class="prices">Prices range from $60 / HOUR</p>
      <p class="note">*Available within 45 min drive of Rochester NY, 14609</p>
    </div>

    <!-- Separator -->
    <hr />

    <!-- Accompaniment info -->
    <div class="accompanist">
      <h3>Accompaniment Tracks</h3>
      <p>
        I am happy to provide personalized accompaniment tracks for your vocal
        or instrumental accompaniment-needs! Click the inquiry button below to
        contact me today.
      </p>
      <br />
      <p class="prices">Prices range from $20-$45</p>
    </div>
  </div>
</div>

<style>
  #info {
    @apply lg:grid-cols-[auto_auto];
    @apply xl:gap-16;

    & > * {
      @apply text-center;
      @apply md:text-start;

      @apply items-center;
      @apply md:items-start;
    }

    & > div {
      @apply flex;
      @apply gap-8;
      @apply flex-col;
    }

    & > .header {
      @apply items-center;
      @apply w-full;
      @apply max-w-fit;

      @apply md:h-full;
      @apply md:justify-around;

      @apply md:flex-row;
      @apply lg:flex-col;

      & > .header-text {
        @apply flex;
        @apply flex-col;
        @apply gap-4;
        @apply md:max-w-min;
      }
    }

    & > .details h3 {
      @apply mb-2;
    }
  }
</style>
