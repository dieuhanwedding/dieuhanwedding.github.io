<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-md font-semibold uppercase text-primary"
  >
    <nav
      class="container mx-auto flex justify-between items-center p-4 relative"
    >
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 justify-between w-full">
        <a href="#couple" class="flex items-center text-3xl font-semibold">
          D<span class="text-xl">♡</span>H
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
        <a href="#couple" class="flex items-center text-3xl font-semibold">
          D<span class="text-xl">♡</span>H
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
