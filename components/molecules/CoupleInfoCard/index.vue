<script lang="ts" setup>

export type CoupleInfoCardProps = {
  name: string;
  avatar: string;
  title: string;
  description: string;
};

const props = withDefaults(
  defineProps<{
    data: CoupleInfoCardProps;
  }>(),
  {
    data: (): CoupleInfoCardProps => ({
      name: 'Dương Hân',
      avatar: '/images/couple/bride.jpeg',
      title: 'Cô dâu',
      description: 'Dương Hân là top 3 hoa khôi gia đình (top 1 lần lượt là mẹ và chị). Từ lúc 3 tuổi đã thành thạo hai ngôn ngữ là Tiếng Việt và tiếng Kinh. Trong suốt khoảng thời gian ở Trường Mẫu giáo đã liên tục đứng top 1 thành tích Phiếu bé ngoan do Nhà trường tổ chức. Nhược điểm duy nhất là hay dỗi.',
    }),
  },
);

</script>
<template>
  <div class="group flex flex-col items-center justify-center space-y-4 md:w-1/3 p-6 relative overflow-hidden">
    <div class="overflow-hidden w-full h-full">
      <img src="/images/couple/groom.jpeg" alt="Couple" class="couple-thumb w-full object-cover"/>
    </div>
    <div class="content hidden group-hover:flex flex-col flex-1 space-y-2 text-center bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 w-full h-full p-8 rounded">
      <div class="content">
        <span class="text-lg">{{data.title}}</span>
        <h2 class="text-3xl md-text-6xl">{{data.name}}</h2>
        <p class="text-lg text-center mt-6">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .couple-thumb {
    transition: transform 0.3s;
  }

  .group:hover .couple-thumb {
    transform: scale(1.2);
  }

  .content {
    transition: opacity 0.3s;
  }
</style>
