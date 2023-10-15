<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-10-15 14:49:20
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-10-15 17:55:05
 * @FilePath: \chaichaiBlog\src\views\test.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="test-box">
    <chai-button plain>确定</chai-button>
    <chai-button>取消</chai-button>
  </div>
</template>

<script lang="ts" setup>
import chaiButton from "../components/button/button.vue";
</script>


<style scoped>
.test-box {
  text-align: center;
}
</style>