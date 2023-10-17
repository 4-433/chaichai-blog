<template>
  <div class="main-box root">
    <!-- 主题色 -->
    <chai-them></chai-them>
    <!-- 主体 -->
    <div class="border-box" :class="color" :style="{ 'border-color': color }">
      <router-view v-slot="{ Component }">
        <transition name="bounce" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- canvas绘制鼠标 -->
    <bg-canvas></bg-canvas>
    <!-- 背景音 -->
    <bg-audio></bg-audio>
  </div>
</template>
 
<script setup lang="ts">
import chaiThem from "@/components/them/them.vue"
import { fitRem } from "@/hook"
import { BgAudio } from "@/components/BgAudio"
import { BgCanvas } from "@/components/BgCanvas"

// 适配rem字体
fitRem(document, window)

</script>


<style scoped lang="scss">
.main-box {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background: url("@/assets/bgTexture.webp");
  overflow: hidden;
}

.root::before {
  content: "";
  position: fixed;
  z-index: 80;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/noise.png");
  background-position: 0 0, 0 0;
  background-size: 250px 250px, 500px 500px;
  will-change: background-position;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  animation: noiseTextureAnim2 0.35s steps(1) infinite;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  pointer-events: none !important;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes noiseTextureAnim2 {
  0% {
    background-position: 0 0, 0 0;
  }

  10% {
    background-position: 10px 10px, 0 0;
  }

  20% {
    background-position: 150px 20px, 0 0;
  }

  30% {
    background-position: 125px 125px, 0 0;
  }

  40% {
    background-position: 40px 170px, 0 0;
  }

  50% {
    background-position: 125px 125px, 0 0;
  }

  60% {
    background-position: 90px 10px, 0 0;
  }

  70% {
    background-position: 60px 100px, 0 0;
  }

  80% {
    background-position: 20px 70px, 0 0;
  }

  90% {
    background-position: 120px 80px, 0 0;
  }

  to {
    background-position: 0 250px, 0 0;
  }
}

.border-box {
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  bottom: 20px;
  border: 2px solid var(--base-color);
  overflow-y: auto;
  overflow-x: hidden;

}

.border-box::-webkit-scrollbar {
  display: none !important;
}

</style>
