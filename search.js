window.$ = function(){
  array=[]
  return array
}

$.bom = {
  search: function(key, value){
    let searchAll = function(){
      let result = {}
      let search = window.location.search
      // 去掉?
      if(search[0] === '?'){
        search = search.slice(1)
      }
      // 用 & 分隔成数组
      let searchArray = search.split('&')
      // 遍历数组
      for(var i =0;i<searchArray.length; i++){
        let parts = searchArray[i].split('=')
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '')
      }
      return result
    }
    let result = searchAll()
    if(value === undefined){
      return result[key]

    }else{
        result={}
        result[key] = encodeURIComponent(value)
        let newSearch = '?'
        console.log(result)
        for(let key in result){
          newSearch += `${encodeURIComponent(key)}=${encodeURIComponent(result[key])}&`
        }
        newSearch=newSearch.substring(0,newSearch.length-1)
        location.search = newSearch
    }
  }
}