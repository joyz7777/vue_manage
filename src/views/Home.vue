<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
    </el-container>
    <el-container>
      <el-header>
        <common-header/>
      </el-header>
      <common-tag/>
      <el-main>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import CommonAside from "@/components/CommonAside.vue";

export default {
  components: [CommonAside],
  data() {
    return {}
  },
}
</script>

<style>

</style>