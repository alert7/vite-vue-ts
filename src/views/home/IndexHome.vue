<!--
 * @Author: Zhang Chunming
 * @Date: 2022-06-20 13:57:59
 * @Description:
 * @FilePath: \vite-ts\src\views\home\IndexHome.vue
-->

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as request from './api'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// 声明 数据
const topics = ref([]);
// 请求数据
onMounted(async () => {
  const res = await request.queryDetailByActivityId({
    activityId: '319770310217731'
  });
  console.log('res', res);
});
</script>

<template>
  <div class="home">111111111111</div>
</template>

<style scoped lang="scss">
// @import '@/styles/index.scss';
.home {
  color: $color;
}
</style>

function mounted() {
  throw new Error("Function not implemented.")
}
