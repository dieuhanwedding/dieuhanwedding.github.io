<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const data = [
  {
    title: 'Chú rể',
    name: 'Quang Diệu',
    avatar: ['/images/couple/groom-ava1.webp', '/images/couple/groom-ava2.webp'],
    description: 'Chú rể Quang Diệu là công dân nước Việt Nam, nói thành thạo hai thứ tiếng, cụ thể là Tiếng Việt và Tiếng Mẹ đẻ. Đặc biệt năm 18 tuổi được Nhà nước trao tặng Căn cước công dân. Hiện Chú rể đang nằm trong top 8 tỷ người thông minh nhất Thế giới. Điểm yếu duy nhất là ngủ vẫn phải nhắm mắt.',
  },
  {
    name: 'Dương Hân',
    avatar: ['/images/couple/bride-ava1.webp', '/images/couple/bride-ava2.webp'],
    title: 'Cô dâu',
    description: 'Cô dâu Hân Hân là top 3 hoa khôi gia đình (top 1 và 2 lần lượt là mẹ và chị gái). Từ lúc 3 tuổi đã thành thạo hai ngôn ngữ là Tiếng Việt và Tiếng Kinh. Đạt thành tích Top 1 Phiếu bé ngoan ở trường mẫu giáo, 12 năm liền được tuyển thẳng lên lớp. Nhược điểm duy nhất là hay dỗi.',
  },
];

const currentAvatarIndex = ref(0);
let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  // Thay đổi ảnh sau mỗi 3 giây
  intervalId = setInterval(() => {
    currentAvatarIndex.value = (currentAvatarIndex.value + 1) % 2; // 2 là số ảnh (avatar1 và avatar2)
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section id="couple" class="container mx-auto relative lg:-mt-36 z-40">
    <div class="flex flex-col md:flex-row items-center justify-center space-y-4 pb-12 md:space-y-0 md:space-x-4 p-8">
      <CoupleInfoCard v-for="(person, index) in data" :key="index" :data="person" :index="currentAvatarIndex"/>
    </div>
    <div class="couple-heart absolute left-1/2 bottom-0 rounded-full overflow-hidden p-2 bg-white">
      <img src="/images/couple/heart.jpg" alt="Couple Heart" class="w-20 h-20 rounded-full opacity-50" loading="lazy" />
    </div>
  </section>
  <div class="container mx-auto about-us-desc text-center p-8">
    <h3 class="text-4xl text-primary font-bold">Và... Ngày ấy đã tới</h3>
    <p class="my-4 px-6">
      Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt - Ngày cưới của chúng mình .
      Chúng mình muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết rằng chúng mình rất
      hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc
      tốt đẹp mà bạn đã dành cho chúng mình nha!</p>
    <p class="groom-bride-signature mt-4 text-3xl ">
      <span>Quang Diệu</span> &amp;
      <span>Dương Hân</span>
    </p>
  </div>
</template>
<style lang="css" scoped>
  .couple-heart {
    transform: translateX(-50%);
  }

  .groom-bride-signature {
    font-family: 'Oooh Baby', cursive;
  }
</style>
