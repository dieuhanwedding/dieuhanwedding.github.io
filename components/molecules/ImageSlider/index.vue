<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Danh sách ảnh
const images = ref([
  '/images/slide/1.jpg',
  '/images/slide/2.jpg',
  '/images/slide/3.jpg',
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

let interval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  interval = setInterval(nextSlide, 5000);
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
  <div class="relative w-full h-[500px] overflow-hidden aspect-[3/4] md:w-screen md:h-auto md:aspect-video">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="absolute top-0 left-0 w-full h-full transition-opacity duration-700"
      :class="{ 'active-slide': currentIndex === index }"
      :style="{
        opacity: currentIndex === index ? 1 : 0, /* Chỉ ảnh hiện tại hiển thị */
        zIndex: currentIndex === index ? 1 : 0, /* Đảm bảo ảnh hiện tại nằm trên cùng */
      }"
    >
      <img
        :src="image"
        alt="Slide image"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<style scoped>
.active-slide img {
  animation: scale-up 5s ease-in-out forwards;
}

/* Keyframes cho hiệu ứng scale */
@keyframes scale-up {
  from {
    transform: scale(1); /* Bắt đầu với kích thước bình thường */
  }
  to {
    transform: scale(1.1); /* Scale lên 1.2 */
  }
}

.transition-opacity {
  transition: opacity 0.7s ease-in-out;
}
</style>
