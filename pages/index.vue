<script setup lang="ts">
definePageMeta({
  layout: 'cms-layout',
});
</script>
<template>
  <head> <link href="https://fonts.googleapis.com/css2?family=Marmelad&display=swap" rel="stylesheet"> </head>
    <div>
      <CoupleBoard />
      <EventBoard />
    </div>
</template>
<style>
  body {
    padding-top: 100px;
    font-family: 'Open Sans', sans-serif;
  }
</style>
