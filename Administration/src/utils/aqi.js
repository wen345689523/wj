/**
 * @param {*} name //cookie的名称
 * @param {*} value //cookie的值
 * @param {*} day //cookie的过期时间
 */
const setCookie = (name, value, day) => {
  if (day !== 0) {
    var expires = day * 24 * 60 * 60 * 1000  //转化为秒
    var date = new Date(+new Date() + expires)
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString()
  } else {
    document.cookie = name + '=' + escape(value)
  }
}

/**
 * @param {*} name //cookie的名称
 */
const getCookie = (name) => {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}

/**
 * @param {*} name //删除cookie的值
 */
const delCookie = (name) => {
  setCookie(name, '', -1)
}

export {
  getCookie,
  setCookie,
  delCookie
}
