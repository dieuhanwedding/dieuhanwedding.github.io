<script setup>
// Number of images
const totalImages = 71;

// Generate image list dynamically
const images = Array.from({ length: totalImages }, (_, i) => {
  const formattedNumber = String(i + 1).padStart(3, '0'); // Pad number to 3 digits
  return `/images/gallery/${formattedNumber}.webp`;
});

// Ref to store shuffled images (shuffle once on mount)
const shuffledImages = ref([]);
// Ref to store visible images
const visibleImages = ref([]);

// Function to shuffle the images (only called once)
const shuffleImages = () => {
  shuffledImages.value = [...images].sort(() => Math.random() - 0.5);
};

// Function to update visible images based on screen size
const updateVisibleImages = () => {
  const width = window.innerWidth;
  if (width <= 640) {
    visibleImages.value = shuffledImages.value.slice(0, 12); // Mobile: 5 images
  } else if (width <= 1024) {
    visibleImages.value = shuffledImages.value.slice(0, 25); // Tablet: 10 images
  } else {
    visibleImages.value = shuffledImages.value.slice(0, 42); // Desktop: 20 images
  }
};

// Initialize shuffled images and visible images when component is mounted
onMounted(() => {
  shuffleImages(); // Shuffle images once
  updateVisibleImages();
  // Watch for window resize events
  window.addEventListener('resize', updateVisibleImages);
});

// Cleanup event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleImages);
});
</script>

<template>
  <section id="gallery" class="relative text-center">
    <h2 class="mt-4 text-center text-4xl font-bold text-primary">Album Hình Cưới</h2>
    <Divider />

    <p class="text-center my-6 px-6 italic">
      Vợ chồng mình xin phép để ở đây một vài tấm hình ngẫu nhiên, còn rất nhiều hình nữa sẽ trình chiếu trong đám cưới. Rất mong bạn có thể đến chung vui và cùng ghi lại những khoảnh khắc đẹp nhất với vợ chồng mình.
    </p>

    <div class="container mx-auto columns-3 md:columns-5 lg:columns-6 gap-2 md:gap-4 relative">
      <div v-for="(image, index) in visibleImages" :key="index" class="mb-2 md:mb-4">
        <img :src="image" alt="gallery image" class="w-full h-auto object-cover" loading="lazy"/>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent"></div>
    </div>
    <!-- <NuxtLink to="/gallery" class=" border border-primary rounded-full inline-block w-auto mx-auto text-center text-xl text-primary font-semibold my-3 px-5 py-2">
      Xem thêm...
    </NuxtLink> -->
  </section>
</template>
