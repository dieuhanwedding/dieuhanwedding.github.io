<script setup lang="ts">
const data = [
  {
    title: "Mừng cưới Chú rể",
    qrCode: "/images/bank/groom.png",
    bank: "TPBank (TienPhongBank)",
    account: "668 1711 1994",
    name: "Đỗ Trung Quang Diệu",
  },
  {
    title: "Mừng cưới Cô dâu",
    qrCode: "/images/bank/bride.png",
    bank: "TPBank (TienPhongBank)",
    account: "668 2808 1999",
    name: "Dương Thị Hân",
  },
];
</script>

<template>
  <section id="giftbox" class="gift-board text-center p-6 mt-6">
    <h2 class="text-3xl md-text-6xl uppercase text-primary">Hộp mừng cưới</h2>
    <Divider />
    <p class="text-lg italic text-center mt-6">
      Chúng mình rất vui khi được chia sẻ niềm vui cùng với bạn. Nếu có thể, bạn
      hãy tới tham dự đám cưới, chung vui và mừng cưới trực tiếp cho chúng mình
      nha. Cảm ơn bạn rất nhiều!.
    </p>
    <div
      class="flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-12 mt-6"
    >
      <GiftBox v-for="item in data" :data="item" :key="item.title" />
    </div>
    <p class="thankyou text-3xl italic text-center mt-6 text-primary">
      Thanks for your love and support!
    </p>
  </section>
</template>
<style lang="scss" scoped>
.thankyou {
  font-family: "Oooh Baby", sans-serif;
}
</style>
