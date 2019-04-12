<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div style="font-size: 24px;">
      <icon-svg icon-class="file" custom-class="icon-file"></icon-svg>
      <icon-svg icon-class="file_word"></icon-svg>
      <icon-svg icon-class="file_excel"></icon-svg>
      <icon-svg icon-class="file_ppt"></icon-svg>
      <icon-svg icon-class="file_text"></icon-svg>
      <icon-svg icon-class="file_zip"></icon-svg>
      <icon-svg icon-class="file_image"></icon-svg>
      <icon-svg icon-class="file_zip"></icon-svg>
      <icon-svg icon-class="file_markdown"></icon-svg>
    </div>
  </div>
</template>
<script>
import API from '@/api'
export default {
  created () {
    this.openLoading()
    API.getData({ page: 1, size: 10 }).then(resp => {
      console.log(resp)
    })
    API.submitForm({ name: 'tom' }).then(resp => {
      console.log(resp)
    })
  }
}
</script>

<style lang="less" scoped>
.icon-file {
  color: red;
}
</style>
