<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-05-23 21:52:33
 * @FilePath: \chaichaiblog\chaichaiBlog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="main-box">
    <div>
      <div class="title-text" :style="{ color: color }">
        wellcome to chaichai.top
      </div>
      <div class="change-them" :style="{ color: color }">
        color palette:
        <div class="them-box" style="cursor: point">
          <span
            class="them-item"
            v-for="(item, index) in themList"
            :key="index"
            :style="{ background: item }"
            :class="{ isActive: item === activeColor }"
            @click="changeThem(item)"
          ></span>
        </div>
      </div>
    </div>
    <div class="border-box" :class="color" :style="{ 'border-color': color }">
      <RouterView />
    </div>
    <div class="mouse-box" :style="{ 'background-color': color }"></div>
    <div class="mouse-border" :style="{ 'border-color': color }"></div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/index";
import { storeToRefs } from "pinia";

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
}
.main-box {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background: url("@/assets/bgTexture.webp");
  overflow: hidden;
}
body::before {
  position: fixed;
  left: 0;
  top: 0;
  background: url("@/assets/noise.png") 0 0;
  background-size: 500px 500px;
  content: "";
  width: 100%;
  height: calc(100% + 100px);
  z-index: 0;
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
}
</style>
