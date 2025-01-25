<script setup>
// Number of images
const totalImages = 71;

// Generate image list dynamically
const images = Array.from({ length: totalImages }, (_, i) => {
  const formattedNumber = String(i + 1).padStart(3, '0'); // Pad number to 3 digits
  return `/images/gallery/${formattedNumber}.webp`;
});

// Ref to store visible images
const visibleImages = ref(images);

// Function to shuffle the images and pick a specific number
const getRandomImages = (count) => {
  const shuffledIndexes = [...Array(images.length).keys()].sort(() => Math.random() - 0.5);
  return shuffledIndexes.slice(0, count).map(index => images[index]);
};

// Function to update visible images based on screen size
const updateVisibleImages = () => {
  const width = window.innerWidth;
  if (width <= 640) {
    visibleImages.value = getRandomImages(5); // Mobile: 5 images
  } else if (width <= 1024) {
    visibleImages.value = getRandomImages(10); // Tablet: 10 images
  } else {
    visibleImages.value = getRandomImages(20); // Desktop: 20 images
  }
};

// Initialize visible images when component is mounted
onMounted(() => {
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

    <div class="container mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 relative">
      <div v-for="(image, index) in visibleImages" :key="index" class="mb-4">
        <img :src="image" alt="gallery image" class="w-full h-auto object-cover" loading="lazy"/>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent"></div>
    </div>
    <!-- <NuxtLink to="/gallery" class=" border border-primary rounded-full inline-block w-auto mx-auto text-center text-xl text-primary font-semibold my-3 px-5 py-2">
      Xem thêm...
    </NuxtLink> -->
  </section>
</template>
