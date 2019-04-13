<template>
  <div>
    <div ref="tableBox" class="table-container">
      <el-table ref="tableList" :data="tableData" :height="height" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="180"></el-table-column>
        <el-table-column prop="address" label="籍贯"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      :page-sizes="[20, 50, 100]"
      :current-page="pageDesc.page"
      :page-size="pageDesc.size"
      @current-change="getTableData"
      @size-change="handleSizeChange"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total" background>
    </el-pagination>
  </div>
</template>

<script>
// import API from '@/api'

export default {
  data () {
    return {
      height: null,
      tableData: [],
      pageDesc: {
        page: 1,
        size: 20
      },
      total: 0
    }
  },
  methods: {
    async getTableData (page = 1) {
      // if (this.$refs.tableList) {
      //   this.$refs.tableList.$el.querySelector('.el-table__body-wrapper').scrollTop = 0
      // }
      this.pageDesc.page = page
      let res = await this.$_API.getListData(this.pageDesc)
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
    },
    handleSizeChange (size) {
      this.pageDesc.size = size
      this.getTableData()
    }
  },
  mounted () {
    this.height = this.$refs.tableBox.clientHeight
  },
  async created () {
    let res = await this.$_API.login({ username: 'cllyer', password: '123456' })
    console.log(res)
    this.getTableData()
  }
}
</script>

<style lang="less">
.table-container {
  width: 100%;
  height: calc(100% - 50px);
}
.el-pagination {
  padding: 11px 16px;
  text-align: right;
}
</style>
