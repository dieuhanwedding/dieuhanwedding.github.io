<script setup lang="ts">
definePageMeta({
  layout: "cms-layout",
});
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Marmelad&family=Oooh+Baby&family=OpenSans&display=swap",
    },
  ],
  title: "DIỆU♡HÂN - 23/03/2025",
  meta: [
    { property: "og:title", content: "DIỆU♡HÂN - 23/03/2025" },
    { property: "og:description", content: "Diệu Hân Wedding - 23/03/2025!" },
    { property: "og:image", content: "https://dieuhanwedding.github.io/images/slide/001.webp" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:url", content: "https://dieuhanwedding.github.io/" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "DIỆU♡HÂN - 23/03/2025" },
    { name: "twitter:image", content: "https://dieuhanwedding.github.io/images/slide/001.webp" },
  ],
});
</script>
<template>
  <h1 class="h1-tag">DIỆU ♡ HÂN-23/03/2025</h1>
  <Hero />
  <CoupleBoard />
  <EventBoard />
  <Gallery />
  <!-- <Video /> -->
  <GiftBoard />
  <FloatingMusicButton />
  <HeartRain />
</template>
<style>
body {
  font-family: "Open Sans", sans-serif;
}
#events,
#gallery,
#couples,
#hero,
#giftbox {
  scroll-margin-top: 78px;
}

.h1-tag {
  display: none;
}
</style>
