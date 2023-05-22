<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2023-05-22 15:10:09
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-05-22 17:44:52
 * @FilePath: \chaiv3\chaichaiBlog\src\views\HomeView.vue
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
<div>
  <div class="img">
        <span>
            <img class="b2" src="@/assets/yezi.gif" alt="">
        </span>
    </div>
</div>
</template>

<script setup lang="ts">
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
</style>