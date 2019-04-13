<template>
  <el-container id="app-container">
    <el-header id="app-head">Header</el-header>
    <el-container>
      <el-aside width="200px" id="app-menu">
        <app-menu />
        <!-- <router-link to="/">Home</router-link>
        <br>
        <router-link to="/about">About</router-link> -->
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

<style scoped lang="less">
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
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #app-main {
    padding: 0;
    background-color: #f0f3f4;
    padding: 16px;
    .app-container {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
}
</style>
