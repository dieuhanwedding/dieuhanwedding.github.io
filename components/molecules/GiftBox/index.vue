<script setup lang="ts">
export type GiftBoxProps = {
  title: string;
  qrCode: string;
  bank: string;
  account: string;
  name: string;
};

withDefaults(
  defineProps<{
    data: GiftBoxProps;
  }>(),
  {
    data: (): GiftBoxProps => ({
      title: "Mừng cưới đến Chú rể",
      qrCode: "/images/bank/groom.png",
      bank: "TPBank (TienPhongBank)",
      account: "668 1711 1994",
      name: "Đỗ Trung Quang Diệu",
    }),
  }
);
</script>
<template>
  <div class="w-full md:w-1/2 max-w-96 bg-primary-background pt-6 pl-6 pr-8 pb-8 rounded-sm text-white">
    <div class="gift-box flex flex-col items-center justify-center space-y-1 border border-white pt-8 pl-8 pr-6 pb-6 relative">
      <p class="text-2xl uppercase pb-3">{{ data.title }}</p>
      <img
        :src="data.qrCode"
        :alt="data.account"
        class="h-full w-full object-cover rounded-lg"
        loading="lazy"
      />
      <p class="text-base font-semibold uppercase pt-3">{{ data.bank }}</p>
      <p class="text-lg font-semibold uppercase">{{ data.account }}</p>
      <p class="text-lg uppercase">{{ data.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gift-box {
  &::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    border: 1px solid white;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }
}
</style>
