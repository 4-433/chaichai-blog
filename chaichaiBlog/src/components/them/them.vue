
<template>
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
</template>

<script setup lang="ts">
import { useCounterStore } from "../../stores";
import { storeToRefs } from "pinia";

const counter = useCounterStore();
let { themList, color, activeColor } = storeToRefs(counter);
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
</style>