<template>
  <div>
    <!-- Import và sử dụng Header -->
    <Header />

    <!-- Main Content -->
    <main class="main relative">
      <slot />
    </main>

    <!-- Import và sử dụng Footer -->
    <Footer />
  </div>
</template>
