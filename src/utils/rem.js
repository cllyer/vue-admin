(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let timer = null

  let recalc = function () {
    let clientWidth = docEl.clientWidth
    // let clientHeight = docEl.clientHeight
    if (!clientWidth) return
    if (clientWidth <= 1200) {
      docEl.style.fontSize = 100 * 1200 / 1920 + 'px'
    } else {
      docEl.style.fontSize = 100 * clientWidth / 1920 + 'px'
    }
  }
  recalc()

  if (!doc.addEventListener) return
  // 防抖
  win.addEventListener(resizeEvt, () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(recalc, 300)
  }, false)
})(document, window)
