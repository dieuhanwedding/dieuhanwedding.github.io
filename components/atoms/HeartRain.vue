<template>
  <div class="heart-rain">
    <div v-for="i in 7" :key="i" class="heart" :style="getHeartStyle(i)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="heart-icon">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
const getHeartStyle = (i: number) => {
  // Vị trí trái tim rơi ngẫu nhiên
  const left = Math.random() * 100; // Vị trí trái tim ngang ngẫu nhiên
  const delay = Math.random() * 3; // Độ trễ để trái tim rơi không đồng thời
  const duration = Math.random() * 6 + 6; // Thời gian rơi chậm hơn (tăng từ 6s đến 12s)
  const opacity = Math.random() * 0.4 + 0.2; // Độ mờ ngẫu nhiên cho trái tim (từ 0.5 đến 1)

  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity.toString(), // Đặt opacity cho trái tim
  };
};
</script>

<style scoped>
.heart-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Tránh ảnh hưởng đến tương tác của người dùng */
  z-index: 1000;
}

.heart {
  position: absolute;
  top: -50px;
  font-size: 1rem; /* Giảm kích thước trái tim */
  animation: fall linear infinite, bounce 0.5s ease-in-out infinite;
}

.heart-icon {
  width: 1rem; /* Giảm kích thước icon */
  height: 1rem; /* Giảm kích thước icon */
  fill: red;
}

/* Hiệu ứng rơi xuống */
@keyframes fall {
  0% {
    top: -50px;
  }
  100% {
    top: 100%;
  }
}

/* Hiệu ứng nảy khi rơi */
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
