<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2023-05-22 15:10:09
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-05-22 23:34:31
 * @FilePath: \chaichaiblog\chaichaiBlog\src\views\HomeView.vue
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="img">
    <div>
      <span>
        <img class="b2" src="@/assets/yezi.gif" alt="" />
      </span>
    </div>
    <!-- <div @click="clickItem">11111</div> -->
    <div class="title-box">
      <div
        class="title-fbox"
        :style="{
          'border-color': color,
          backgroundImage: `linear-gradient(45deg, ${color} 25%, transparent 0, transparent 50%, ${color} 0, ${color} 75%, transparent 0)`,
          backgroundSize: '40px 40px',
        }"
      ></div>
      <div class="title-mbox" :style="{ 'border-color': color, color: color }">
        Sound
      </div>
      <div class="title-lbox" :style="{ 'border-color': color, color: color }">
        Profile
      </div>
      <div class="title-ebox" :style="{ 'border-color': color, color: color }">
        Works
      </div>
    </div>
    <div class="content-box">
      <div
        class="content-tbox"
        :style="{ 'border-color': color, color: color }"
      >
        <div class="tbox-text">
          <p>Chai chai</p>
          <p>优秀的博客模板作者</p>
          <br />
          <p>嗨！你好！</p>
          <p>我是柴柴</p>
          <p></p>
          <p>励志成为优秀</p>
          <p>且花里胡哨的前端程序员</p>
          <p>并在努力奋斗着</p>
          <br />
          <p>这是一个突发奇想的</p>
          <p>全新的</p>
          <p>博客模板</p>
          <p>希望你喜欢</p>
          <br />
        </div>
      </div>
      <div
        class="content-cbox"
        :style="{ 'border-color': color, color: color }"
      >
        <div class="cbox-content">This is the new one</div>
        <div class="cbox-content1">
          <span style="font-size: 80px">power by</span> Chai chai
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/index.ts";
import { storeToRefs } from "pinia";
const counter = useCounterStore();
let { themList, color, activeColor } = storeToRefs(counter);

const clickItem = () => {
  //   console.log(color);
};
</script>

<style scoped>
.img {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.img img {
  position: absolute;
}

.img .b2 {
  left: 1050px;
  transform-origin: left;
  transform: skew(30deg);
  filter: grayscale(400%) blur(10px) opacity(15%);
}
.title-box {
  width: 100%;
  height: 150px;
  display: flex;
  flex-wrap: nowrap;
}
.title-fbox {
  width: 16%;
  border-right: 2px solid;
  border-bottom: 2px solid;
}
.title-mbox {
  text-align: center;
  font-weight: 700;
  padding-top: 20px;
  width: 8%;
  border-bottom: 2px solid;
  border-right: 2px solid;
}
.title-lbox {
  width: 67%;
  border-bottom: 2px solid;
  border-right: 2px solid;
  font-weight: 700;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
}
.title-ebox {
  width: calc(7% - 6px);
  border-bottom: 2px solid;
  font-weight: 700;
  padding-top: 20px;
  text-align: center;
}
.content-box {
  width: 100%;
  height: calc(100% - 190px);
  display: flex;
  flex-wrap: nowrap;
}
.content-tbox {
  display: flex;
  flex-direction: column-reverse;
  width: 16%;
  font-weight: 700;
  border-right: 2px solid;
  border-bottom: 2px solid;
}
.tbox-text {
  /* text-align: center; */
  margin: 0 auto;
  text-align: left;
}
.content-cbox {
  width: 84%;
  border-bottom: 2px solid;
}
.cbox-content {
  font-size: 100px;
  font-weight: 700;
  margin-left: 150px;
  margin-top: 100px;
}
.cbox-content1 {
  font-size: 200px;
  font-weight: 700;
  margin-left: 250px;
}
</style>