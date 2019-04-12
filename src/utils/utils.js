import { Loading, MessageBox, Message, Notification } from 'element-ui'

const required = () => { throw new Error('Missing parameter') }

// loading层
let loadingInstance = null
export function openLoading () {
  loadingInstance = Loading.service({
    lock: true,
    background: 'rgba(255, 255, 255, 0.37)'
  })
}
export function closeLoading () {
  loadingInstance.close()
}

// alert
export function showAlert (msg = required()) {
  MessageBox.alert(msg, '警告', {
    confirmButtonText: '确定',
    callback: action => {
      console.log(action)
    }
  })
}

// confirm
export function showConfirm (msg = required()) {
  return MessageBox.confirm(msg, '确认', {
    confirmButtonText: '确定',
    type: 'warning'
  }).then((action) => {
    console.log(action)
    return true
  }).catch((action) => {
    console.log(action)
    return false
  })
}

// message
export function showMsg (msg = required()) {
  Message({
    message: msg,
    duration: 2000,
    showClose: true,
    type: 'success'
  })
}

// notification
export function showNotification (msg = required()) {
  Notification({
    title: '提示',
    message: msg,
    type: 'success',
    position: 'bottom-right'
  })
}
