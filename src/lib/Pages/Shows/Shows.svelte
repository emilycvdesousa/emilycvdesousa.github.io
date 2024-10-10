<script lang="ts">
  interface Show {
    title: string;
    type: string;
    company: string;
    location: string;
    year: number;
  }

  const shows: Show[] = [
    {
      title: 'School of Rock',
      type: 'Keys 1, Rehearsal Pianist',
      company: 'JCC CenterStage',
      location: 'Rochester, NY',
      year: 2024,
    },
    {
      title: 'Mamma Mia!',
      type: 'Keys 2',
      company: 'Mercy HS',
      location: 'Rochester, NY',
      year: 2024,
    },
    {
      title: 'Legally Blonde',
      type: 'Keys 1, Rehearsal Pianist',
      company: 'Pittsford Musicals',
      location: 'Rochester, NY',
      year: 2024,
    },
    {
      title: 'Pippin',
      type: 'Rehearsal Pianist',
      company: 'Greece Arcadia HS',
      location: 'Rochester, NY',
      year: 2024,
    },
    {
      title: 'Catch Me If You Can',
      type: 'Keys 1',
      company: 'Webster Shroeder HS',
      location: 'Rochester, NY',
      year: 2024,
    },
    {
      title: 'Big Fish',
      type: 'Keys 1',
      company: 'Allendale Columbia',
      location: 'Rochester, NY',
      year: 2024,
    },
    {
      title: 'Spongebob the Musical',
      type: 'Keys 3',
      company: 'Bloomfield HS',
      location: 'Bloomfield, NY',
      year: 2024,
    },
    {
      title: 'Seussical the Musical',
      type: 'Rehearsal Pianist',
      company: 'Greece Arcadia HS',
      location: 'Rochester, NY',
      year: 2023,
    },
    {
      title: 'Nuncrackers',
      type: 'Pit Conductor, Keyboard, Rehearsal Pianist',
      company: 'Cobblestone Players',
      location: 'Farmington, NY',
      year: 2021,
    },
    {
      title: 'Mamma Mia!',
      type: 'Keys 3',
      company: 'East Rochester HS',
      location: 'Rochester, NY',
      year: 2019,
    },
  ];
</script>

<div id="shows">
  <h2>Pit Orchestras/Musical Theater</h2>
  <p class="subtext">Recent & upcoming shows</p>

  <ul>
    {#each shows as show}
      <div class="show">
        <h3>{show.title}</h3>
        <ul>
          <li>{show.type}</li>
          <div class="vr" />
          <li>{show.company}</li>
          <div class="vr" />
          <li>{show.location}</li>
          <div class="vr" />
          <li class="year">{show.year}</li>
        </ul>
      </div>
    {/each}
  </ul>
</div>

<style>
  #shows {
    @apply flex;
    @apply gap-0;
    @apply flex-col;
    @apply items-start;
    @apply justify-items-stretch;

    & > p,
    & > h2 {
      @apply col-span-1;
      @apply md:col-span-2;
    }

    & > ul {
      @apply w-full;
      @apply columns-1;
      @apply md:columns-2;

      @apply mt-4;

      & > .show {
        @apply py-3;

        & > ul {
          @apply inline-flex;
          @apply gap-2;
          @apply flex-wrap;

          & > li {
            @apply text-nowrap;

            &.year {
              @apply text-goldish-500;
            }
          }
        }
      }
    }
  }
</style>
