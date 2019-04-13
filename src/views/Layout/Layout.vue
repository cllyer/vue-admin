<template>
  <el-container id="app-container">
    <el-header id="app-head">Header</el-header>
    <el-container>
      <el-aside width="200px" id="app-menu">
        <app-menu />
      </el-aside>
      <el-main id="app-main">
        <router-view class="app-container" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppMenu from './components/AppMenu'
export default {
  data () {
    return {}
  },
  components: { AppMenu },
  methods: {},
  mounted () {},
  created () {}
}
</script>

<style lang="less">
#app-container {
  width: 100%;
  height: 100%;
  #app-head {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    line-height: 60px;
    background-color: #409EFF;
    background-size: 100% 100%;
  }
  #app-menu {
    box-shadow: 0px 0 10px 0 rgba(0, 0, 0, .2);
    .el-menu {
      height: 100%;
      border-right: none;
    }
  }
  #app-main {
    padding: 0;
    background-color: #f0f3f4;
    .app-container {
      width: 100%;
      height: 100%;
      padding: 16px;
      background-color: #fff;
      background-clip: content-box;
      &.app-container_full {
        padding: 0;
        background-color: #f0f3f4;
      }
    }
  }
}
</style>
