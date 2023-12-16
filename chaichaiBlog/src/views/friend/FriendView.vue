<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-12-16 18:35:23
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-12-17 01:15:44
 * @FilePath: \chaichaiBlog\src\views\friend\FriendView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="friend-box">
    <div class="friend-left">
      <chai-card :friendList="friendList" @checkUrl="checkUrl"></chai-card>
    </div>
    <div class="friend-right">
      <div class="img-box">
        <img :src="showUrl" alt="" style="width: 100%" />
      </div>
      <div class="visit-button">
        <chai-button @click="visiteFriend">拜访他们！</chai-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import chaiCard from "@/components/card/card.vue";
import chaiButton from "@/components/button/button.vue";

import { ref } from "vue";

const friendList = [
  {
    name: "猫猫",
    url: "https://file.fishpi.cn/2022/07/MOSHED2022621164630-1b1ec532.gif?imageView2/1/w/210/h/210/interlace/0/q/100",
    text: "可爱又迷人的反派角色",
    blogUrl: "https://stillwarter.github.io/",
    blogHomeUrl:
      "https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/maomaoblog.png",
  },
  {
    name: "三月柳絮四月雨",
    url: "https://lemon-cxh.github.io/images/avatar.jpg",
    text: "我年华虚度，空有一身疲惫",
    blogUrl: "https://Lemon-cxh.github.io",
    blogHomeUrl:
      "https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/sanyue.png",
  },
];
const showUrl = ref("");
const showBlog = ref("");

const checkUrl = (url, blogValue) => {
  showUrl.value = url;
  showBlog.value = blogValue;
};

const visiteFriend = () => {
  window.location.href = showBlog.value;
};
</script>

<style lang="scss">
.friend-box {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: nowrap;
}
.friend-left {
  height: 100%;
}
.friend-right {
  width: 100%;
  height: 100%;
  border-left: 2px solid var(--base-color);
  margin-left: 20px;
  padding-left: 20px;
  .img-box {
    width: 100%;
    border: 2px solid var(--base-color);
  }
  .visit-button {
    margin-top: 40px;
  }
}
</style>