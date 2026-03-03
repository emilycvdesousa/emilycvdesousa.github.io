<script lang="ts">
  import Image from '../../Components/Image/Image.svelte';
  import WeddingShow from '../../../assets/images/Wedding-Show.webp';
</script>

<div id="resume" class="!grid-rows-[min-content_auto] !gap-2">
  <h1 class="w-full">resume</h1>

  <div class="flex flex-col h-[600px] gap-y-8 w-full flex-wrap overflow-hidden">
    <div class="event">
      <p>MUSIC DIRECTING/CONDUCTING CREDITS</p>
      <ul>
        <li>Seussical the Musical (Pittsford Musicals, 2025)</li>
        <li>Nuncrackers the Musical (Cobblestone Arts Center, 2021)</li>
      </ul>
    </div>

    <div class="event">
      <p>PIT ORCHESTRA CREDITS</p>
      <ul>
        <li>An American in Paris (CenterStage Theatre, 2025)</li>
        <li>Joseph and the Amazing... (Roberts Community Theatre, 2025)</li>
        <li>School of Rock (CenterStage Theatre, 2024)</li>
        <li>Catch Me If You Can (Manlius Musicals, 2024)</li>
        <li>Legally Blonde (Pittsford Musicals, 2024)</li>
        <li>Guys &amp; Dolls (Manlius Musicals, 2019)</li>
        <li>Legally Blonde (Manlius Musicals, 2018)</li>
        <li>The Little Mermaid (Manlius Musicals, 2017)</li>
      </ul>
    </div>

    <div class="event">
      <p>EDUCATIONAL CREDITS</p>
      <ul>
        <li>On the Town (Webster Schroeder HS, 2026)</li>
        <li>Mean Girls the Musical (Mercy HS, 2025; Penfield HS, 2025)</li>
        <li>Mamma Mia! (Mercy HS, 2024)</li>
        <li>SpongeBob the Musical (Bloomfield HS, 2024)</li>
        <li>Catch Me If You Can (Webster Schroeder HS, 2024)</li>
        <li>Big Fish (Allendale Columbia, 2024)</li>
        <li>Mamma Mia! (East Rochester HS, 2018)</li>
      </ul>
    </div>

    <div class="event">
      <p>ADDITIONAL EXPERIENCE</p>
      <ul>
        <li>Adjunct Faculty Member (Nazareth Musical Theatre)</li>
        <li>Accompanist (Pittsford Schools)</li>
        <li>Music Director (Geva Summer Academy, Geva Theatre)</li>
        <li>Accompanist &amp; Vocal Coach (Greece Arcadia HS)</li>
        <li>Accompanist (Rochester Musical Theater Academy)</li>
        <li>Assistant Vocal Director (Lyric Voices, Lyric Theatre)</li>
        <li>Ringer, Soprano (Genessee Valley Orchestra and Choir)</li>
      </ul>
    </div>

    <div class="event">
      <p>TRAINING</p>
      <ol class="list-disc ml-3">
        <li>
          10+ years of vocal training (classical, musical theater, jazz) under
          Sabine Krantz, MM; Lani Hoskins, BM; and Dr. Nicholas Kilkenny, DMA
        </li>
        <li>
          20+ years of piano training (classical, musical theater, collaborative
          piano) under Susan Larson, MM; Dr. Kevin Nitsch, DMA; Dr. Sarah Rhee,
          DMA; and Dr. Jacob Ertl, DMA
        </li>
        <li>Nazareth University – Music Performance minor</li>
      </ol>
    </div>

    <div class="event">
      <p>INSTRUMENTS / SKILLS</p>
      <ul>
        <li>
          Advanced Piano, Synth/Keyboards, High-Intermediate Viola, Intermediate
          Violin, Beginner Cello, Low-Intermediate Guitar, Beginner Ukulele
        </li>
        <li>
          Vocal Arranging, String Instrument Arranging, Vocal Performance,
          Conducting Vocal Ensembles, Conducting from Piano, Audition
          Accompanying, Advanced Sight Reading
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .event {
    @apply w-1/2; 
    & > p {
      @apply underline;
    }
  }
</style>
