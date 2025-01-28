<script setup lang="ts">
import { ref } from "vue";

// Danh sách các file MP3 với URL đầy đủ
const tracks = [
  new URL("@/assets/audio/track1.mp3", import.meta.url).href,
  new URL("@/assets/audio/track2.mp3", import.meta.url).href,
  new URL("@/assets/audio/track3.mp3", import.meta.url).href,
  new URL("@/assets/audio/track4.mp3", import.meta.url).href,
  new URL("@/assets/audio/track5.mp3", import.meta.url).href,
];

const audio = ref<HTMLAudioElement | null>(null);
const currentTrack = ref<string | null>(null); // Lưu trữ bài hát hiện tại
const previousTrack = ref<string | null>(null); // Lưu trữ bài hát trước đó
const isPlaying = ref(false);
const isPaused = ref(false);

// Hàm phát nhạc
const playTrack = (trackUrl: string) => {
  if (!audio.value) {
    audio.value = new Audio();
  }

  audio.value.pause(); // Dừng nhạc hiện tại
  audio.value.src = trackUrl; // Gán URL của bài nhạc mới

  audio.value
    .play()
    .then(() => {
      console.log(`Playing track: ${trackUrl}`);
      previousTrack.value = currentTrack.value; // Lưu lại bài trước đó
      currentTrack.value = trackUrl; // Cập nhật bài hiện tại
      isPlaying.value = true;
      isPaused.value = false;

      // Gán sự kiện "ended" để chuyển bài
      audio.value!.onended = nextTrack;
    })
    .catch((error) => {
      console.error(`Failed to play track ${trackUrl}:`, error);
    });
};

// Hàm tạm dừng nhạc
const pauseTrack = () => {
  if (audio.value) {
    audio.value.pause();
    isPlaying.value = false;
    isPaused.value = true;
  }
};

// Hàm chuyển bài nhạc
const nextTrack = () => {
  if (!currentTrack.value) return;

  let randomIndex;
  let nextTrackUrl: string | null = null;

  // Lọc các bài nhạc không phải bài hiện tại và bài trước đó
  const availableTracks = tracks.filter(
    (track) =>
      track !== currentTrack.value && track !== previousTrack.value
  );

  if (availableTracks.length > 0) {
    randomIndex = Math.floor(Math.random() * availableTracks.length);
    nextTrackUrl = availableTracks[randomIndex];
  }

  if (nextTrackUrl) {
    playTrack(nextTrackUrl); // Phát bài nhạc tiếp theo
  }
};
</script>

<template>
  <div class="floating-music-button fixed bottom-4 left-4 z-50 flex items-center justify-center">
    <div class="wrapper">
      <button
        @click="
          isPlaying
            ? pauseTrack()
            : (isPaused
                ? nextTrack()
                : playTrack(currentTrack || tracks[0]))
        "
        class="bg-[#df4758] hover:bg-primary-dark text-white p-4 rounded-full shadow focus:outline-none relative"
      >
        <!-- Icon nốt nhạc khi chưa phát -->
        <Icon name="music" class="h-4 w-4" v-if="!isPlaying && !isPaused" />
        <!-- Icon Pause khi nhạc đang phát -->
        <Icon name="pause" class="h-4 w-4" v-if="isPlaying" />
        <!-- Icon Next khi nhạc đang tạm dừng -->
        <Icon name="next" class="h-4 w-4" v-if="isPaused" />
      </button>
    </div>
    <!-- <p class="text-gray bg-white h-full text-xs text-center mt-1">Nhấn để nghe nhạc</p> -->
  </div>
</template>

<style lang="scss" scoped>
.floating-music-button {
  .wrapper {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(255, 155, 155, 0.549);
      z-index: -1;
      animation: rippleEffect 2s infinite;
    }
  }
}

@keyframes rippleEffect {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
