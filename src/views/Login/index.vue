<template>
  <div class="login-page">
    <h3>FJ DYNAMICS</h3>
    <el-form ref="loginForm" :model="params" :rules="rules" :show-message="false" class="login-form">
      <el-form-item prop="loginName">
        <el-input v-model="params.loginName" placeholder="请输入用户账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="params.password" @keypress.enter.native="login" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" style="width: 100%;">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        loginName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      params: {
        loginName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(async (valid, rules) => {
        if (valid) {
          this.$store.dispatch('user/login')
        } else {
          for (const key in rules) {
            this.$message.warning(rules[key][0].message)
            return false
          }
        }
      })
    }
  },
  mounted () {},
  created () {}
}
</script>

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('~@/assets/imgs/background.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  h3 {
    color: #CCCCCC;
    font-size: 28px;
    letter-spacing: 2px;
    margin: 0;
  }
  .login-form {
    margin-top: 22px;
    width: 380px;
  }
}
</style>
