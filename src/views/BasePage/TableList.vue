<template>
  <div style="height: 100%;">
    <div ref="tableBox" class="table-container">
      <el-table ref="tableList" :data="tableData" :height="height" style="width: 100%">
        <el-table-column type="index" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="age" label="年龄" width="50"></el-table-column>
        <el-table-column prop="address" label="籍贯"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      :page-sizes="[10, 20, 50, 100]"
      :current-page="pageDesc.pageNo"
      :page-size="pageDesc.pageSize"
      @current-change="getTableData"
      @size-change="handleSizeChange"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total" background>
    </el-pagination>
  </div>
</template>

<script>
import API from '@/api'
import table from '@/mixins/table'

export default {
  mixins: [table],
  data () {
    return {
      request: API.home.getListData,
      height: null
    }
  },
  methods: {},
  mounted () {
    this.height = this.$refs.tableBox.clientHeight
  }
}
</script>

<style lang="scss">
.table-container {
  width: 100%;
  height: calc(100% - 50px);
}
.el-pagination {
  padding: 11px 16px;
  text-align: right;
}
</style>
