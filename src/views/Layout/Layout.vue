<template>
  <el-container id="app-container">
    <el-header id="app-head">Header</el-header>
    <el-container>
      <el-aside width="200px" id="app-nav">
        <router-link to="/">Home</router-link>
        <br>
        <router-link to="/about">About</router-link>
      </el-aside>
      <el-main id="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  components: {},
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
  #app-nav {
    padding: 10px 20px;
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
  }
}
</style>
