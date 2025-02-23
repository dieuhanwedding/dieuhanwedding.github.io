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
});
</script>
<template>
  <Hero />
  <CoupleBoard />
  <EventBoard />
  <Gallery />
  <Video />
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
</style>
