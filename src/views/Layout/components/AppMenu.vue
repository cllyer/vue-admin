<template>
  <div style="height: 100%;">
    <div class="menu-logo" :style="`padding-left: ${isCollapse ? 18 : 20}px;`">
      <img src="../../../assets/imgs/logo.png">
      <span v-show="!isCollapse">VUE ADMIN</span>
    </div>
    <el-scrollbar class="menu-scroll" wrap-class="scroll-wrap" view-class="scroll-view">
      <el-menu :default-active="$route.path" :collapse="isCollapse" router unique-opened>
        <!-- <icon-svg icon-class="table" custom-class="menu-icon"></icon-svg> -->
        <template v-for="route in userMenus">
          <!-- 无展开 -->
          <el-menu-item v-if="route.meta.isSingle" :key="route.path" :index="route.redirect || route.path">
            <i :class="route.meta.icon"></i>
            <span slot="title">{{route.meta.title}}</span>
          </el-menu-item>
          <!-- 有展开 -->
          <el-submenu v-else :key="route.path" :index="route.path">
            <template slot="title">
              <i :class="route.meta.icon"></i>
              <span slot="title">{{route.meta.title}}</span>
            </template>
            <el-menu-item v-for="sub in route.children" :key="route.path + '/' + sub.path" :index="route.path + '/' + sub.path">{{ sub.meta.title }}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    userMenus () {
      return this.$store.state.user.userMenus
    }
  },
  mounted () {},
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.menu-logo {
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  img {
    width: 28px;
    height: 28px;
    vertical-align: middle;
    margin-right: 12px;
  }
}
.menu-icon {
  font-size: 16px;
  vertical-align: -4px;
  margin-right: 4px;
}
</style>
<style>
.menu-scroll {
  height: calc(100% - 56px);
}
.scroll-wrap {
  overflow-x: hidden;
}
</style>
