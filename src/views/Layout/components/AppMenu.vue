<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
    <el-menu-item index="/home">
      <icon-svg icon-class="menu" custom-class="menu-icon"></icon-svg>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="/base">
      <template slot="title">
        <icon-svg icon-class="table" custom-class="menu-icon"></icon-svg>
        <span>基础页面</span>
      </template>
      <el-menu-item index="/base/about">About</el-menu-item>
      <el-menu-item index="/base/list">表格展示</el-menu-item>
    </el-submenu>
    <el-submenu index="/error">
      <template slot="title">
        <icon-svg icon-class="error" custom-class="menu-icon"></icon-svg>
        <span>异常页面</span>
      </template>
      <el-menu-item index="/error/403">403</el-menu-item>
      <el-menu-item index="/error/404">404</el-menu-item>
      <el-menu-item index="/error/500">500</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {},
  mounted () {},
  created () {}
}
</script>

<style scoped lang="less">
.menu-icon {
  font-size: 16px;
  vertical-align: -4px;
  margin-right: 4px;
}
</style>
