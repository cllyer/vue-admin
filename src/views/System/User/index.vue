<template>
  <div class="page-content">
    <el-form ref="searchForm" class="page-filter" :model="filters" size="medium" label-width="70px">
      <el-row :gutter="16">
        <el-col :span="5">
          <el-form-item label="用户名">
            <el-input v-model="filters.username" placeholder="用户名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="手机号">
            <el-input v-model="filters.phone" placeholder="手机号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="开始时间">
            <el-date-picker v-model="filters.searchBeginTime" type="datetime" :picker-options="pickerOptionsForStart" value-format="yyyy-MM-dd HH:mm:ss" placeholder="注册开始时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="结束时间">
            <el-date-picker v-model="filters.searchEndTime" type="datetime" :picker-options="pickerOptionsForEnd" value-format="yyyy-MM-dd HH:mm:ss" placeholder="注册结束时间"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item align="right" label-width="0">
            <el-button type="primary" @click="getTableData()">搜索</el-button>
            <el-button type="info" @click="resetFilters">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="address" label="所属地区"></el-table-column>
        <el-table-column prop="createTime" label="注册时间"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      class="page-pagination"
      @current-change="getTableData"
      @size-change="handleSizeChange"
      :current-page="pageDesc.pageNo"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageDesc.pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
import API from '@/api'
import table from '@/mixins/table'

export default {
  components: {},
  mixins: [table],
  data () {
    return {
      request: API.user.getUserList,
      filters: {
        username: '',
        phone: '',
        searchBeginTime: '',
        searchEndTime: ''
      }
    }
  },
  computed: {
    pickerOptionsForStart () {
      const _this = this
      return {
        disabledDate (time) {
          return time.getTime() > new Date(_this.filters.searchEndTime || Date.now()).getTime()
        }
      }
    },
    pickerOptionsForEnd () {
      const _this = this
      return {
        disabledDate (time) {
          return time.getTime() > Date.now() || time.getTime() < new Date(_this.filters.searchBeginTime).getTime()
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
