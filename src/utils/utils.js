import { Loading } from 'element-ui'

const required = () => { throw new Error('Missing parameter') }

// 全屏loading弹层
let loadingInstance = null
let loadCount = 0
function openLoading () {
  if (loadCount === 0) {
    loadingInstance = Loading.service({
      lock: true,
      background: 'rgba(255, 255, 255, 0.37)'
    })
  }
  loadCount++
}
function closeLoading () {
  loadCount--
  if (loadCount === 0) {
    loadCount = 0
    loadingInstance && loadingInstance.close()
  }
}

function getToken () {
  return localStorage.getItem('TOKEN')
}
function setToken (token = required()) {
  return localStorage.setItem('TOKEN', token)
}
function removeToken () {
  localStorage.removeItem('TOKEN')
}

function downloadFile (file, fileName = new Date().getTime()) {
  // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
  const url = window.URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.style.display = 'none'
  link.setAttribute('download', fileName) // 自定义文件名，Firefox/Chrome支持
  link.click()
}

function loadJsAsync (url, callback) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  if (typeof (callback) !== 'undefined') {
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null
          callback()
        }
      }
    } else {
      script.onload = function () {
        callback()
      }
    }
  }
  script.src = url
  document.body.appendChild(script)
}

export {
  openLoading,
  closeLoading,
  getToken,
  setToken,
  removeToken,
  downloadFile,
  loadJsAsync
}

const base = {
  install (Vue, options) {}
}

export default base
