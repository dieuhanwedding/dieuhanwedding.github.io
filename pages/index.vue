<script setup lang="ts">
definePageMeta({
  layout: 'cms-layout',
});
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Marmelad&family=Oooh+Baby&display=swap'
    }
  ]
});
</script>
<template>
  <Hero />
  <CoupleBoard />
  <EventBoard />
  <Gallery />
  <GiftBoard />
</template>
<style>
  body {
    font-family: 'Open Sans', sans-serif;
  }
</style>
