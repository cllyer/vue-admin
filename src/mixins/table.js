export default {
  data () {
    return {
      autoInit: true,
      pageDesc: {
        pageNo: 1,
        pageSize: 20
      },
      total: 0,
      tableData: [],
      dialogVisible: false,
      activeRow: null
    }
  },
  created () {
    if (this.autoInit) this.getTableData()
  },
  methods: {
    getTableData (pageNo = 1) {
      if (!this.request) throw new Error('Request Null')
      this.pageDesc.pageNo = pageNo
      const params = Object.assign({}, this.pageDesc, this.filters || {})
      for (const key in params) {
        if (params[key] === '') delete params[key]
      }
      this.request(params).then(resp => {
        console.log(resp)
        // 删除当前页面最后一条数据，跳转前一页
        if (resp.data && resp.data.length === 0 && pageNo > 1) {
          this.getTableData(--pageNo)
          return
        }
        this.tableData = resp.data || []
        this.total = resp.total
      })
    },
    refreshCurPage () {
      this.getTableData(this.pageDesc.pageNo)
    },
    handleSizeChange (pageSize) {
      this.pageDesc.pageSize = pageSize
      this.getTableData()
    },
    addNew () {
      this.activeRow = null
      this.dialogVisible = true
    },
    showEdit (row = null) {
      this.activeRow = row
      this.dialogVisible = true
    },
    resetFilters () {
      if (this.filters) {
        this.filters = this.$options.data().filters
      }
      this.getTableData()
    }
  }
}
