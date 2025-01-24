<template>
    <div class="divider w-full h-0.5 my-5" />
</template>
<style lang="css" scoped>
.divider {
  position: relative;
  @apply pb-10;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 190px;
    height: 26px;
    background-repeat: no-repeat;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='189' height='26' viewBox='0 0 189 26'%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23ee8584' stroke-width='1.5px' d='M86.19%2C2.362L96.98%2C13%2C86.19%2C23.634%2C75.4%2C13Z'/%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23ee8584' stroke-width='1.5px' d='M94.985%2C2.362L105.775%2C13%2C94.985%2C23.634%2C84.2%2C13Z'/%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23ee8584' stroke-width='1.5px' d='M103.78%2C2.362L114.57%2C13%2C103.78%2C23.634%2C92.991%2C13Z'/%3E%3Cpath fill-rule='evenodd' fill='%23ee8584' d='M120%2C14V13H523v1H120Z'/%3E%3Cpath fill-rule='evenodd' fill='%23ee8584' d='M-331%2C14V13H69v1H-331Z'/%3E%3C/svg%3E");
  }
}
</style>
