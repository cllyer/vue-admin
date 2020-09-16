<template>
  <el-dialog title="修改密码" :visible="visible" width="30%" :before-close="handleClose" :close-on-click-modal="false">
    <el-form :model="form" :rules="rules" ref="pwdForm" size="small" label-width="88px" label-position="left">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input type="password" v-model="form.oldPassword" placeholder="请输入旧密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="form.newPassword" maxlength="20" placeholder="请设置6~20位的新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword" maxlength="20" placeholder="请确认新密码"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose" size="medium">取 消</el-button>
      <el-button type="primary" @click="handleConfirm" size="medium">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import API from '@/api'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        userId: localStorage.getItem('userId'),
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        oldPassword: [{ required: true, message: '请输入旧密码', trigger: 'submit' }],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'submit' },
          { pattern: /^\w{6,20}$/, message: '密码长度6~20位，支持数字、字母和下划线', trigger: 'submit' }
        ],
        confirmPassword: [{ required: true, message: '请确认新密码', trigger: 'submit' }]
      }
    }
  },
  methods: {
    handleConfirm () {
      this.$refs.pwdForm.validate((valid) => {
        if (valid) {
          API.user.updatePwd(this.form).then(resp => {
            console.log(resp)
            this.handleClose()
            this.$alert('密码修改成功，请重新登录！', '提示', {
              confirmButtonText: '确定',
              callback: () => {
                this.$emit('success')
              }
            })
          })
        } else {
          return false
        }
      })
    },
    handleClose () {
      this.$refs.pwdForm.resetFields()
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="sass" scoped></style>
