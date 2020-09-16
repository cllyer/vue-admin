// 表单自定义校验规则
function isEmptyValue (val) {
  if (val === null || val === undefined || val.replace(/\s/g, '') === '') {
    return true
  }
  return false
}
function isNotNum (val) {
  return isNaN(parseFloat(val))
}
export default [
  isEmptyValue,
  isNotNum
]
