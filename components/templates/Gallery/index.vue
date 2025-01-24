<script setup>
const images = [
  // Danh sách 20 ảnh
  "/images/slide/1.jpg",
  "/images/slide/2.jpg",
  "/images/slide/3.jpg",
  "/images/slide/4.jpeg",
  "/images/slide/5.jpeg",
  "/images/slide/6.jpeg",
  "/images/slide/7.jpg",
  "/images/slide/8.jpg",
  "/images/slide/9.jpg",
  "/images/slide/10.jpg",
  "/images/slide/11.jpg",
  "/images/slide/12.jpg",
  "/images/slide/13.jpg",
  "/images/slide/14.jpg",
  "/images/slide/15.jpg",
  "/images/slide/16.jpg",
  "/images/slide/17.jpg",
  "/images/slide/18.jpg",
  "/images/slide/19.jpg",
  "/images/slide/20.jpg",
];

// Ref to store visible images
const visibleImages = ref(images);

// Function to shuffle the images and pick the first 5
const getRandomImages = () => {
  // Create a random shuffled array of image indexes
  const shuffledIndexes = [...Array(images.length).keys()].sort(() => Math.random() - 0.5);
  const randomImages = shuffledIndexes.slice(0, 5).map(index => images[index]);
  return randomImages;
};

// Update visibleImages when the component is mounted or when screen size changes
onMounted(() => {
  if (window.innerWidth <= 640) {
    visibleImages.value = getRandomImages();  // Get 5 random images for mobile
  } else {
    visibleImages.value = images;  // Show all images for larger screens
  }
});

// Optionally, watch for window resize events to update visible images dynamically
window.addEventListener('resize', () => {
  if (window.innerWidth <= 640) {
    visibleImages.value = getRandomImages();
  } else {
    visibleImages.value = images;
  }
});
</script>
<template>
  <section id="gallery" class="relative">
    <h2 class="mt-4 text-center text-4xl font-bold text-primary">Album Hình Cưới</h2>
    <Divider />

    <p class="text-center my-6 px-6 italic">
      Chúng mình xin phép để ở đây một vài tấm hình demo, còn rất nhiều hình nữa chúng mình sẽ trình chiếu trong đám cưới. Rất mong bạn có thể đến chung vui và cùng ghi lại những khoảnh khắc đẹp nhất với chúng mình.
    </p>

    <div class="container mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
      <div v-for="(image, index) in visibleImages" :key="index" class="relative mb-4">
        <img :src="image" alt="gallery image" class="w-full h-auto object-cover" loading="lazy"/>
      </div>
      <div class="absolute bottom-[10px] left-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent"></div>
    </div>
  </section>
</template>
