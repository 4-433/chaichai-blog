<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-10-15 16:20:22
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-12-16 23:43:19
 * @FilePath: \chaichaiBlog\src\components\them\them.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="title-text">wellcome to chaichai.top</div>
  <div class="change-them">
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
      <chai-color
        @changeThem="changeThem"
        style="margin-bottom: 10px"
      ></chai-color>
    </div>
  </div>
</template>

<script setup lang="ts">
import chaiColor from "@/components/colorPick/colorPick.vue";
import { ref } from "vue";

const body = document.body;

const themList = [
  "#cea54f",
  "#697f9a",
  "#4b9674",
  "#90a085",
  "#99a6a1",
  "#272624",
];
let activeColor = ref("");

if (localStorage.getItem("activeColor") === null) {
  localStorage.setItem("activeColor", themList[0]);
  body.style.setProperty("--base-color", themList[0], "");
}

activeColor.value = localStorage.getItem("activeColor") as string;
body.style.setProperty("--base-color", activeColor.value, "");

/**
 * @description: 切换主题色
 * @param {*} item
 * @return {*}
 */
const changeThem = (item: string): any => {
  localStorage.setItem("activeColor", item);
  activeColor.value = localStorage.getItem("activeColor") as string;
  body.style.setProperty("--base-color", item, "");
};
</script> 

<style lang="scss">
.change-them {
  position: fixed;
  color: var(--base-color);
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

.base-color {
  color: var(--borderColor);
  --border-color: var("borderColor");
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
  color: var(--base-color);
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
</style>