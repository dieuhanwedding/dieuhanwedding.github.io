<script setup lang="ts">
const data = [
  {
    eventImage: "/images/thumbs/TiecCuoiNhaNu.webp",
    eventTitle: "Tiệc cưới nhà Nữ",
    eventDesc: "",
    eventTime: "11:00 06/02/2025",
    eventLocation: "Nhà văn hoá thôn Xuân Bồ",
    eventAddress: "Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình",
    calendarEventSrc:
      "https://calendar.google.com/calendar/u/0/r/eventedit?text=Tiệc cưới bạn Hân&dates=20250206T110000/20250206T130000&details=Tiệc cưới bạn Hân&location=Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình&sf=true&output=xml",
    googleMapLink: "https://maps.app.goo.gl/vdDQXFRJfd7jUVCY9",
    isExpanded: true,
  },
  {
    eventImage: "/images/thumbs/TiecCuoiNhaNam.webp",
    eventTitle: "Tiệc cưới nhà Nam",
    eventDesc: "",
    eventTime: "11:00 07/02/2025",
    eventLocation: "Nhà văn hoá thôn Xuân Bồ",
    eventAddress: "Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình",
    calendarEventSrc:
      "https://calendar.google.com/calendar/u/0/r/eventedit?text=Tiệc cưới bạn Diệu &dates=20250207T110000/20250207T130000&details=Tiệc cưới bạn Diệu&location=Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình&sf=true&output=xml",
    googleMapLink: "https://maps.app.goo.gl/vdDQXFRJfd7jUVCY9",
    isExpanded: true,
  },
];
</script>

<template>
  <section id="events" class="events-board">
    <div class="relative md:p-6">
      <img
        src="/images/backgrounds/wall-1.jpg"
        alt="Wedding Event"
        class="events-board-bg absolute top-0 left-0 z-[-1] h-full w-full object-cover"
        loading="lazy"
      />
      <div class="container mx-auto">
        <div
          class="md:w-2/3 lg:w-1/2 bg-[rgba(238,133,132,0.8)] text-white p-8 rounded-none md:rounded"
        >
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-3xl md-text-6xl uppercase text-white">Sự kiện cưới</h1>
            <p class="text-lg text-center mt-6">
              Gặp nhau giống như việc tìm thấy mảnh ghép cuối cùng của trái tim,
              hạnh phúc hôn nhân là bức tranh hoàn chỉnh.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center mt-6 space-y-4">
            <WeddingEvent
              v-for="(event, index) in data"
              :key="index"
              :data="event"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.events-board-bg {
  filter: blur(2px);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
</style>
