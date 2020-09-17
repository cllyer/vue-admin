<template>
  <div class="page-content">
    <el-form ref="searchForm" class="page-filter" :model="filters" size="medium" label-width="70px">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-form-item label="角色名">
            <el-input v-model="filters.roleName" placeholder="角色名" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="0">
            <el-button type="primary" @click="getTableData()">搜索</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item align="right" label-width="0">
            <el-button type="primary" @click="getTableData()">新增角色</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="roleName" label="角色" align="center"></el-table-column>
        <el-table-column prop="creator" label="创建者" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template>
            <span class="row-operate">编辑</span>
            <span class="row-operate">删除</span>
          </template>
        </el-table-column>
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
      request: API.user.getRoleList,
      filters: {
        roleName: ''
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
