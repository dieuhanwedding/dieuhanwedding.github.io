<script lang="ts" setup>

export type CoupleInfoCardProps = {
  name: string;
  avatar: string[];
  title: string;
  description: string;
};

withDefaults(
  defineProps<{
    data: CoupleInfoCardProps;
    index: number;
  }>(),
  {
    data: (): CoupleInfoCardProps => ({
      name: 'Dương Hân',
      avatar: ['/images/couple/bride.webp'],
      title: 'Cô dâu',
      description: 'Cô dâu Hân Hân là top 3 hoa khôi gia đình (top 1 và 2 lần lượt là mẹ và chị gái). Từ lúc 3 tuổi đã thành thạo hai ngôn ngữ là Tiếng Việt và Tiếng Kinh. Đạt thành tích Top 1 Phiếu bé ngoan ở trường mẫu giáo. Nhược điểm duy nhất là hay dỗi.',
    }),
    index: 1,
  },
);

</script>
<template>
  <div class="group flex-1 max-w-96 items-center justify-center md:space-y-0 md:w-1/3 relative rounded">
    <div class="overflow-hidden w-full h-full rounded">
      <img :src="data.avatar[index]" :alt="data.title" class="couple-thumb w-full object-cover" loading="eager"/>
    </div>
    <div class="content hidden group-hover:flex space-y-2 text-center bg-[rgba(255,255,255,0.8)] absolute top-0 left-0 w-full h-full pt-8 pl-8 pr-10 pb-10">
      <div class="wrapper p-4 w-full h-full relative flex flex-col items-center justify-center space-y-4">
        <span class="text-lg uppercase">{{data.title}}</span>
        <h2 class="text-3xl md-text-6xl uppercase">{{data.name}}</h2>
        <p class="text-base text-center mt-6 font-thin">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .couple-thumb {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.group:hover .couple-thumb {
  transform: scale(1.1); /* Giảm một chút tỉ lệ để không bị phóng đại quá */
  opacity: 0.8; /* Thêm hiệu ứng mờ khi hover */
}

.content {
  transition: opacity 0.3s ease-in-out;

  .wrapper {
    border: 1px solid red;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid red;
      top: 0.5rem;
      left: 0.5rem;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
  }
}

</style>
