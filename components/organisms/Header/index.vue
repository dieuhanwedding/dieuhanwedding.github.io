<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-md font-semibold uppercase text-primary"
  >
    <nav
      class="container mx-auto flex justify-between items-center p-4 relative"
    >
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 justify-between w-full">
        <a href="#hero" class="flex items-center text-3xl font-semibold">
          D<svg
            width="23px"
            height="23px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="heart-icon"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            /></svg
          >H
        </a>
        <ul class="flex space-x-6 items-center">
          <li>
            <a href="#events" class="hover:text-blue-500"> Sự kiện cưới </a>
          </li>
          <li>
            <a href="#gallery" class="hover:text-blue-500"> Album Hình Cưới </a>
          </li>
          <li>
            <a href="#giftbox" class="hover:text-blue-500"> Mừng cưới </a>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu -->
      <div class="flex items-center md:hidden w-full justify-between">
        <a href="#hero" class="flex items-center text-3xl font-semibold">
          D<svg
            width="23px"
            height="23px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="heart-icon"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            /></svg
          >H
        </a>
        <button @click="toggleMenu" class="text-2xl">☰</button>
      </div>
    </nav>

    <!-- Sidebar -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed top-0 right-0 h-full w-screen bg-white shadow-lg p-6 z-50 md:hidden flex flex-col space-y-4"
      >
        <button @click="toggleMenu" class="self-end text-2xl">✖</button>
        <ul class="space-y-4">
          <li>
            <a href="#events" class="hover:text-blue-500" @click="toggleMenu">
              Sự kiện cưới
            </a>
          </li>
          <li>
            <a href="#gallery" class="hover:text-blue-500" @click="toggleMenu">
              Album Hình Cưới
            </a>
          </li>
          <li>
            <a href="#giftbox" class="hover:text-blue-500" @click="toggleMenu">
              Mừng cưới
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

// Toggle sidebar visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Watch for when menu opens and prevent scrolling
watch(isMenuOpen, (newVal) => {
  if (newVal) {
    // Prevent scroll when sidebar is open
    document.body.style.overflow = "hidden";
  } else {
    // Allow scroll when sidebar is closed
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
/* Transition for Sidebar */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

/* Prevent scrolling when sidebar is open */
body {
  transition: overflow 0.3s ease;
}
</style>
