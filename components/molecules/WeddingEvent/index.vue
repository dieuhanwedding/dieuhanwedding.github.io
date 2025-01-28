<script setup lang="ts">
  export type WeddingEventProps = {
    eventImage?: string;
    eventTitle?: string;
    eventDesc?: string;
    eventTime?: string;
    eventLocation?: string;
    eventAddress?: string;
    calendarEventSrc?: string;
    googleMapLink?: {
        icon: string;
        title: string;
        url: string;
    }[];
    isExpanded?: boolean;
  };

  const props = withDefaults(defineProps<{
    data: WeddingEventProps;
  }>(), {
    data: (): WeddingEventProps=> ({
      eventImage: '/images/thumbs/TiecCuoiNhaNu.webp',
      eventTitle: 'Tiệc cưới nhà Nữ',
      eventDesc: '',
      eventTime: '11:00 06/02/2025',
      eventLocation: 'Tư gia nhà nữ',
      eventAddress: 'Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình',
      calendarEventSrc: 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Tiệc cưới nhà Nữ&dates=20250206T110000/20250206T130000&details=Tiệc cưới nhà Nữ&location=Thôn Xuân Bồ, Xã Xuân Thuỷ, Huyện Lệ Thuỷ, Tỉnh Quảng Bình&sf=true&output=xml',
      googleMapLink: [
        {
          icon: 'home',
          title: 'Nhà cô dâu',
          url: 'https://maps.app.goo.gl/vdDQXFRJfd7jUVCY9',
        },
        {
          icon: 'restaurant',
          title: 'Hôn trường',
          url: 'https://maps.app.goo.gl/vdDQXFRJfd7jUVCY9',
        },
      ],
      isExpanded: true,
    }),
  });

  const emit = defineEmits(['update:isExpanded']);
  const isExpanded = ref(props.data.isExpanded);

  const handleAddToCalendar = () => {
    window.open(props.data.calendarEventSrc, '_blank');
  };

  const handleOpenMap = (data: any) => {
    window.open(data.url, '_blank');
  };
</script>

<template>
  <section class="section bg-white pt-6 pl-6 pr-8 pb-8">
    <div class="container flex flex-col items-center md:items-start md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-6 relative text-primary">
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
        <li class="text-start flex flex-col w-full space-y-2 pt-2 xl:flex-row xl:space-x-2 xl:space-y-0" v-if="isExpanded">
          <!-- <Button @click="handleAddToCalendar">Thêm vào lịch</Button>
          <Button @click="handleOpenGoogleMap">Đường đến nhà</Button>
          <Button @click="handleOpenGoogleMap">Đường đến hôn trường</Button> -->
          <button class="flex border w-full border-primary rounded p-2 px-3 items-center cursor-pointer" @click="handleAddToCalendar">
            <Icon name="calendar" class="mr-1" />
            Thêm vào lịch
          </button>
          <CollapseTag>
            <template #title>
              <span class="flex items-center justify-center cursor-pointer">
                <Icon name="location" class="mr-1" />
                Xem Bản đồ
              </span>
            </template>
            <template #icon>
              <p/>
            </template>
            <div class="flex flex-col space-y-3">
              <p v-for="(link, index) in data.googleMapLink" :key="index" class="flex items-center cursor-pointer underline" @click="handleOpenMap(link)">
                <Icon :name="link.icon" class="mr-1" />
                {{ link.title }}
              </p>
            </div>
          </CollapseTag>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" src="./style.scss" scoped/>
