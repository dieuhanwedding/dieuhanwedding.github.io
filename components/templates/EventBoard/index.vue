<script setup lang="ts">


</script>

<template>
  <section class="events-board relative md:p-6">
    <!-- <img src="/images/backgrounds/wall-1.jpg" alt="Wedding Event" class="absolute top-0 left-0 z-[-1] h-full w-full object-cover"/> -->
    <div class="md:w-2/3 lg:w-2/3 bg-[rgba(238,133,132,0.8)] text-white p-8 rounded">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl md-text-6xl">Sự kiện cưới</h1>
        <p class="text-lg text-center mt-6">Gặp nhau giống như việc tìm thấy mảnh ghép cuối cùng của trái tim, hạnh phúc hôn nhân là bức tranh hoàn chỉnh.</p>
      </div>
      <div class="flex flex-col items-center justify-center mt-6 space-y-4">
        <WeddingEvent />
        <WeddingEvent />
        <WeddingEvent />
        <WeddingEvent />
      </div>
    </div>
  </section>
</template>
