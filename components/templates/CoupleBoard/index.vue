<script setup lang="ts">
const data = ref([
    {
        name: 'Nguyễn Thị Nữ',
        avatar: '/images/couple/bride.jpeg',
        description: 'Cô gái xinh đẹp',
    },
    {
        name: 'Trần Văn Nam',
        avatar: '/images/couple/groom.jpeg',
        description: 'Chàng trai điển trai',
    },
]);
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-8 relative">
    <CoupleInfoCard />
    <CoupleInfoCard />
  </div>
</template>
