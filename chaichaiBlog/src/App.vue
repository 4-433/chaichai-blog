<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-05-26 16:42:13
 * @FilePath: \chaichaiBlog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="main-box root">
    <div>
      <div class="title-text" :style="{ color: color }">
        wellcome to chaichai.top
      </div>
      <div class="change-them" :style="{ color: color }">
        color palette:
        <div class="them-box" style="cursor: point">
          <span class="them-item" v-for="(item, index) in themList" :key="index" :style="{ background: item }"
            :class="{ isActive: item === activeColor }" @click="changeThem(item)"></span>
        </div>
      </div>
    </div>
    <div class="border-box" :class="color" :style="{ 'border-color': color }">
      <div :style="{ color: color }" class="alert-box" v-if="!isCheck">
        <div class="alert-text">为了您的浏览体验，是否需要为您开启背景音乐</div>
        <div class="btn-box">
          <span class="alert-btn1" :style="{ 'border-color': color }" @click="playRedio">yes</span>
          <span class="alert-btn2" :style="{ 'border-color': color }" @click="isCheck = true">no</span>
        </div>
      </div>
      <RouterView v-else />
    </div>
    <div class="mouse-box" :style="{ 'background-color': color }"></div>
    <div class="mouse-border" :style="{ 'border-color': color }"></div>
    <audio src="http://music.163.com/song/media/outer/url?id=1327341487.mp3" loop autoplay ref="au"></audio>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/index";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const isCheck = ref(false)

const au = ref<InstanceType<typeof HTMLAudioElement> | null>(null);

/**
 * @description: 开始摇头
 * @return {*}
 */
const playRedio = () => {
  au.value.play()
  isCheck.value = true
}

/**
 * @description: 适配rem字体
 * @param {*} doc
 * @param {*} win
 * @param {*} resizeEvt
 * @param {*} recalc
 * @return {*}
 */
var fun = function (doc: Document, win: Window & typeof globalThis) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 10 * (clientWidth / 1920) + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
};
fun(document, window);

const counter = useCounterStore();
let { themList, color, activeColor } = storeToRefs(counter);

/**
 * @description: 预定效果跟随鼠标移动
 * @param {*} e
 * @return {*}
 */
document.onmousemove = function (e) {
  var div = document.querySelector(".mouse-box") as HTMLElement;
  var div2 = document.querySelector(".mouse-border") as HTMLElement;
  var x = e.clientX;
  var y = e.clientY;
  div.style.display = "block";
  div2.style.display = "block";
  div.style.left = x - 4 + "px";
  div.style.top = y - 4 + "px";
  div2.style.left = x - 24 + "px";
  div2.style.top = y - 24 + "px";
};

/**
 * @description: 切换主题色
 * @param {*} item
 * @return {*}
 */
const changeThem = (item) => {
  activeColor.value = item;
  color.value = item;
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
  box-sizing: border-box;
  cursor: none;
}

.alert-box {
  width: 100%;
  text-align: center;
}

.alert-text {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 200px;
}

.btn-box {
  margin: 0 auto;
  width: 250px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 100px;
}

.alert-btn1 {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  transition: .5s all;
}

.alert-btn2 {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  transition: .5s all;
}

.alert-btn1:hover {
  width: 120px;
  height: 120px;
  line-height: 120px;
}

.alert-btn2:hover {
  width: 120px;
  height: 120px;
  line-height: 120px;
}

.main-box {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background: url("@/assets/bgTexture.webp");
  overflow: hidden;
}

.root::before {
  background-image: url("@/assets/noise.png");
  pointer-events: none !important;
  background-position: 0 0, 0 0;
  background-size: 250px 250px, 500px 500px;
  animation: noiseTextureAnim2 .35s steps(1) infinite;
  will-change: background-position;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: fixed;
  content: "";
  width: 100%;
  z-index: 80;
  pointer-events: none;
  height: 100vh;
  ;
}

@keyframes noiseTextureAnim2 {
  0% {
    background-position: 0 0, 0 0
  }

  10% {
    background-position: 10px 10px, 0 0
  }

  20% {
    background-position: 150px 20px, 0 0
  }

  30% {
    background-position: 125px 125px, 0 0
  }

  40% {
    background-position: 40px 170px, 0 0
  }

  50% {
    background-position: 125px 125px, 0 0
  }

  60% {
    background-position: 90px 10px, 0 0
  }

  70% {
    background-position: 60px 100px, 0 0
  }

  80% {
    background-position: 20px 70px, 0 0
  }

  90% {
    background-position: 120px 80px, 0 0
  }

  to {
    background-position: 0 250px, 0 0
  }
}

.change-them {
  position: fixed;
  /* top: 10px; */
  right: 20px;
  display: flex;
  flex-wrap: nowrap;
  font-size: 10px;
  border: none !important;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  letter-spacing: 0.015em;
}

.title-text {
  position: fixed;
  left: 230px;
  font-size: 10px;
  /* font-family: serif; */
  font-weight: 700;
  font-style: italic;
  text-align: center;
  letter-spacing: 0.015em;
}

.them-box {
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 6px;
}

.them-box span {
  width: 8px;
  height: 8px;
  cursor: pointer;
}

.isActive {
  height: 16px !important;
}

.border-box {
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  bottom: 20px;
  border: 2px solid;
}

.border-box::-webkit-scrollbar {
  display: none !important;
}

.blue {
  border: 2px solid #697f9a;
}

.yellow {
  border: 2px solid #cea54f;
}

.isYellow {
  color: #cea54f;
}

.isBlue {
  color: #697f9a;
}

.mouse-box {
  pointer-events: none;
  display: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
}

.mouse-border {
  pointer-events: none;
  display: none;
  width: 50px;
  height: 50px;
  border: 3px solid;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.4s;
  transition-timing-function: ease-out;
}</style>
