<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
  const props = withDefaults(defineProps<{
    eventImage?: string;
    eventTitle?: string;
    eventDesc?: string;
    eventTime?: string;
    eventLocation?: string;
    eventAddress?: string;
    calendarEventSrc?: string;
    googleMapLink?: string;
    isExpanded?: boolean;
  }>(), {
    eventImage: '/images/thumbs/TiecCuoiNhaNu.jpg',
    eventTitle: 'Tiệc cưới nhà Nữ',
    eventDesc: '',
    eventTime: '11:00 06/02/2025',
    eventLocation: 'Tư gia nhà nữ',
    eventAddress: 'Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình',
    calendarEventSrc: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Tiệc cưới nhà Nữ&dates=20250206T110000/20250206T130000&details=Tiệc cưới nhà Nữ&location=Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình&sf=true&output=xml',
    googleMapLink: 'https://maps.app.goo.gl/vdDQXFRJfd7jUVCY9',
    isExpanded: true,
  });

  const emit = defineEmits(['update:isExpanded']);
  const isExpanded = ref(props.isExpanded);

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
    emit('update:isExpanded', isExpanded.value);
  };

  const handleAddToCalendar = () => {
    window.open(props.calendarEventSrc, '_blank');
  };

  const handleOpenGoogleMap = () => {
    window.open(props.googleMapLink, '_blank');
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
  <section id="events" class="section bg-white pt-6 pl-6 pr-8 pb-8">
    <div class="container flex flex-col items-center md:items-start md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-8 relative">
      <img :src="props.eventImage" size="(max-width: 100px)" alt="Wedding Event" class="event-thumb h-24 max-w-24 w-full object-cover rounded-full"/>
      <ul class="content flex flex-col flex-1 space-y-2 text-center md:text-start">
        <li class="event-title text-xl md:text-3xl font-bold uppercase">{{ eventTitle }}</li>
        <li class="text-start">{{eventDesc}}</li>
        <li class=" text-center md:text-start text-base font-semibold">
          <!-- <Icon name="clock" size="4" class="w-5 h-5 inline-block"/> -->
          {{eventTime}}
        </li>
        <li class="flex space-x-1 align-center text-start">
          <!-- <Icon name="location" class="w-5 h-5 inline-block"/> -->
          {{eventLocation}} - {{eventAddress}}
        </li>
        <!-- <li class="capitalize text-start">{{eventAddress}}</li> -->
        <li class="text-start flex flex-col w-full space-y-2 pt-2 lg:flex-row lg:space-x-2 lg:space-y-0" v-if="isExpanded">
          <Button @click="handleAddToCalendar">Thêm vào lịch</Button>
          <Button @click="handleOpenGoogleMap">Xem bản đồ</Button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>
