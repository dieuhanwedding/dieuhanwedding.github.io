<script setup lang="ts">
  export type WeddingEventProps = {
    eventImage?: string;
    eventTitle?: string;
    eventDesc?: string;
    eventTime?: string;
    eventLocation?: string;
    eventAddress?: string;
    calendarEventSrc?: string;
    googleMapLink?: string;
    isExpanded?: boolean;
  };

  const props = withDefaults(defineProps<{
    data: WeddingEventProps;
  }>(), {
    data: (): WeddingEventProps=> ({
      eventImage: '/images/thumbs/TiecCuoiNhaNu.jpg',
      eventTitle: 'Tiệc cưới nhà Nữ',
      eventDesc: '',
      eventTime: '11:00 06/02/2025',
      eventLocation: 'Tư gia nhà nữ',
      eventAddress: 'Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình',
      calendarEventSrc: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Tiệc cưới nhà Nữ&dates=20250206T110000/20250206T130000&details=Tiệc cưới nhà Nữ&location=Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình&sf=true&output=xml',
      googleMapLink: 'https://maps.app.goo.gl/vdDQXFRJfd7jUVCY9',
      isExpanded: true,
    }),
  });

  const emit = defineEmits(['update:isExpanded']);
  const isExpanded = ref(props.data.isExpanded);

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
    emit('update:isExpanded', isExpanded.value);
  };

  const handleAddToCalendar = () => {
    window.open(props.data.calendarEventSrc, '_blank');
  };

  const handleOpenGoogleMap = () => {
    window.open(props.data.googleMapLink, '_blank');
  };

  // const checkIfInViewport = () => {
  //   const element = document.getElementById('events');
  //   if (element) {
  //     const rect = element.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   }
  //   return false;
  // };

  // const handleScroll = () => {
  //   if (checkIfInViewport()) {
  //     if (!isExpanded.value) {
  //       toggleExpand();
  //     }
  //   } else {
  //     if (isExpanded.value) {
  //       toggleExpand();
  //     }
  //   }
  // };

  // onMounted(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial check
  // });

  // onUnmounted(() => {
  //   window.removeEventListener('scroll', handleScroll);
  // });
</script>

<template>
  <section class="section bg-white pt-6 pl-6 pr-8 pb-8">
    <div class="container flex flex-col items-center md:items-start md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-8 relative text-primary">
      <img :src="data.eventImage" size="(max-width: 100px)" alt="Wedding Event" class="event-thumb h-24 max-w-24 w-full object-cover rounded-full" loading="lazy"/>
      <ul class="content flex flex-col flex-1 space-y-2 text-center md:text-start">
        <li class="event-title text-xl md:text-3xl font-bold uppercase">{{ data.eventTitle }}</li>
        <li class="text-start">{{data.eventDesc}}</li>
        <li class=" text-center md:text-start text-base font-semibold">
          {{data.eventTime}}
        </li>
        <li class="flex space-x-1 align-center text-start">
          {{data.eventLocation}} - {{data.eventAddress}}
        </li>
        <li class="text-start flex flex-col w-full space-y-2 pt-2 md:flex-row md:space-x-2 md:space-y-0" v-if="isExpanded">
          <Button @click="handleAddToCalendar">Thêm vào lịch</Button>
          <Button @click="handleOpenGoogleMap">Xem bản đồ</Button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>
