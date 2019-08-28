export function getNowFormatDate() {
  let date = new Date()
  let seperator1 = '-'
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && strDate <= 9) {
    strDate = '0' + strDate
  }

  return year + seperator1 + month + seperator1 + strDate
}

export default {
  getNowFormatDate
}
