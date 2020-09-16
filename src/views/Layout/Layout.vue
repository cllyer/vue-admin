<template>
  <el-container id="app-container">
    <el-aside id="app-menu" :width="isCollapse ? '64px' : '220px'">
      <app-menu :is-collapse="isCollapse" />
    </el-aside>
    <el-container id="app-wrap">
      <el-header height="56px" id="app-head">
        <i style="cursor: pointer;font-size: 24px;" :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="isCollapse = !isCollapse"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ $store.state.user.username }}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changePwd">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main id="app-main">
        <router-view class="app-container" />
      </el-main>
    </el-container>
    <change-pwd :visible.sync="visible" @success="logout"></change-pwd>
  </el-container>
</template>

<script>
import AppMenu from './components/AppMenu'
import ChangePwd from './components/ChangePwd'

export default {
  components: { AppMenu, ChangePwd },
  data () {
    return {
      isCollapse: false, // 目录展开
      visible: false // 修改密码弹窗
    }
  },
  methods: {
    changePwd () {
      this.visible = true
    },
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  mounted () {},
  created () {}
}
</script>

<style lang="scss">
@import '../../style/variable.scss';

#app-container {
  width: 100%;
  height: 100%;
  #app-menu {
    height: 100%;
    overflow: auto;
    background-color: $menuBgColor;
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    transition: 0.2s;
  }
  #app-wrap {
    height: 100%;
    #app-head {
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 9;
      span {
        cursor: pointer;
      }
    }
    #app-main {
      padding: 16px;
      background-color: #f0f2f5;
      height: calc(100% - 64px);
      .app-container {
        width: 100%;
        min-height: 100%;
      }
    }
  }
}
</style>
