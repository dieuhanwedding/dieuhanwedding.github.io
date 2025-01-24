<template>
  <footer class="footer bg-primary-background text-white text-center text-2xl font-semibold py-6">
    <div class="footer-logo flex justify-center items-center">
      <img src="/images/backgrounds/footer-bg.svg" alt="Logo" class="footer-left-img h-20 w-20 opacity-70" loading="lazy"/>
      <div>
        <p>Quang Diệu</p>
        <p class="text-sm">&amp;</p>
        <p>Dương Hân</p>
      </div>
      <img src="/images/backgrounds/footer-bg.svg" alt="Logo" class="footer-right-img h-20 w-20 opacity-70" loading="lazy"/>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  font-family: "Oooh Baby", sans-serif;
  .footer-logo {
    .footer-left-img {
      transform: rotate(-130deg);
    }
    .footer-right-img {
      transform: rotate(50deg);
    }
  }
}
</style>
