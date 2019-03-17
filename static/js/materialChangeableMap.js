var materialsChange = [
  //包边 内里 鞋带 鞋垫
 { modelID: 1, componentName: "binding", change: "78,71,70"},
 { modelID: 1, componentName: "inner", change: "78,71,208"},
 { modelID: 1, componentName: "lace", change: "80,72,202,204,205"},
 { modelID: 1, componentName: "insole", change: "71,90,79" },
 //鞋面 鞋面分片 内里 鞋带 鞋垫
 //{ modelID: 2, componentName: "upper", change: "77,106"},
 //{ modelID: 2, componentName: "body", change: "78"},
 //{ modelID: 2, componentName: "inner", change: "81,71,78"},
 //{ modelID: 2, componentName: "lace", change: "80"},
 //{ modelID: 2, componentName: "insole", change: "79,71,90" },
 //内里 后提带 鞋带 鞋垫 鞋舌标签
 { modelID: 3, componentName: "inner", change: "71,78,106"},
 { modelID: 3, componentName: "counterWoven", change: "91,204"},
 { modelID: 3, componentName: "lace", change: "80,72,202,204,205"},
 { modelID: 3, componentName: "insole", change: "90,71,79"},
 { modelID: 3, componentName: "tongue", change: "76,103,77,212,213" },
 //鞋面 内里 鞋带 标签 印花 鞋垫
 { modelID: 4, componentName: "inner", change: "71,78,208"},
 { modelID: 4, componentName: "upper", change: "97,77,71,208,211"},
 { modelID: 4, componentName: "lace", change: "80,72,202,204,205"},
 { modelID: 4, componentName: "tongue", change: "103,76,77,212,213"},
 { modelID: 4, componentName: "insole", change: "71,90,79" },
 //鞋面1 鞋面2 鞋面饰片1 鞋面饰片2 鞋面饰片3 鞋面饰片4 鞋带 鞋眼 内里 鞋垫
 { modelID: 5, componentName: "decorativePiece1", change: "104,82,207,211,212"},
 { modelID: 5, componentName: "decorativePiece2", change: "104,82,207,211,212"},
 { modelID: 5, componentName: "decorativePiece3", change: "104,82,207,211,212"},
 { modelID: 5, componentName: "decorativePiece4", change: "82,104,207,211,212"},
 { modelID: 5, componentName: "lace", change: "80,72,202,204,205"},
 { modelID: 5, componentName: "inner", change: "78,71"},
 { modelID: 5, componentName: "insole", change: "79,71,90"},
 { modelID: 5, componentName: "toe", change: "106,77,208,211,212"},
 { modelID: 5, componentName: "upper", change: "106,77,208,211,212" },
 //鞋面,鞋垫
 {modelID: 6, componentName: "upper",change:"88,92,95,98,101,105"},
 {modelID: 6, componentName: "inner",change:"89,94,96,99,102,107"},
 { modelID: 6, componentName: "insole", change: "90,71" },
 { modelID: 7, componentName: "upper", change: "110,115,117,119,121" },
 { modelID: 7, componentName: "inner", change: "111,116,118,120,122" },
 { modelID: 7, componentName: "insole", change: "90,71" },
 { modelID: 8, componentName: "upper", change: "141,143,145,147,149,151" },
 { modelID: 8, componentName: "inner", change: "142,144,146,148,150,152" },
 { modelID: 8, componentName: "insole", change: "90,71" },
 { modelID: 9, componentName: "upper", change: "112,123,126,129,132,135,138" },
 { modelID: 9, componentName: "inner", change: "113,124,127,130,133,136,139" },
 { modelID: 9, componentName: "pullTape", change: "114,125,128,131,134,137,140" },
 { modelID: 9, componentName: "insole", change: "90,71" },
 { modelID: 10, componentName: "upper", change: "190,192,194,196,198,200" },
 { modelID: 10, componentName: "inner", change: "191,193,195,197,199,201" },
 { modelID: 10, componentName: "insole", change: "90,71" },
 { modelID: 11, componentName: "upper", change: "153,155,157,159,161" },
 { modelID: 11, componentName: "inner", change: "154,156,158,160,162" },
 { modelID: 11, componentName: "insole", change: "90,71" },
 { modelID: 12, componentName: "upper", change: "163,165,167" },
 { modelID: 12, componentName: "inner", change: "164,166,168" },
 { modelID: 12, componentName: "insole", change: "90,71" },
 { modelID: 13, componentName: "upper", change: "169,172,175,178,181,184,187" },
 { modelID: 13, componentName: "inner", change: "170,173,176,179,182,185,188" },
 { modelID: 13, componentName: "pullTape", change: "171,174,177,180,183,186,189" },
 { modelID: 13, componentName: "insole", change: "90,71" },
 //鞋面，鞋面饰片，内里，鞋垫，鞋带
 { modelID: 14, componentName: "decorativePiece1", change: "82,207,203,82" },
 { modelID: 14, componentName: "decorativePiece2", change: "78,106,205" },
 { modelID: 14, componentName: "decorativePiece3", change: "40,207,203,82" },
 { modelID: 14, componentName: "inner", change: "40,78,71,106" },
 { modelID: 14, componentName: "insole", change: "40,79,90" },
 { modelID: 14, componentName: "lace", change: "80,72,202,204,205" },
 //鞋面/鞋跟，内里，鞋垫，装饰，鞋帮内里
 { modelID: 15, componentName: "counterInner", change: "211,212,213,214" },
 { modelID: 15, componentName: "heel1", change: "207,210,211,212,213,206,48,49" },
 { modelID: 15, componentName: "inner", change: "211,212,213,214" },
 { modelID: 15, componentName: "insole", change: "211,212,213,214" },
 { modelID: 15, componentName: "midsole", change: "207,210,211,212,213,206,48,49" },
 { modelID: 15, componentName: "upper", change: "207,210,211,212,213,206,48,49" },
 { modelID: 15, componentName: "decoration", change: "202,203,204,205,206,209" },
 { modelID: 16, componentName: "counterInner", change: "211,212,213,214" },
 { modelID: 16, componentName: "heel2", change: "207,210,211,212,213,206,48,49" },
 { modelID: 16, componentName: "inner", change: "211,212,213,214" },
 { modelID: 16, componentName: "insole", change: "211,212,213,214" },
 { modelID: 16, componentName: "midsole", change: "207,210,211,212,213,206,48,49" },
 { modelID: 16, componentName: "upper", change: "207,210,211,212,213,206,48,49" },
 { modelID: 16, componentName: "decoration", change: "202,203,204,205,206,209" },
 //shoe2
 { modelID: 17, componentName: "upper", change: "207,210,211,212,213,206,48,49" },
 { modelID: 17, componentName: "inner", change: "211,212,213,214" },
 { modelID: 17, componentName: "insole", change: "211,212,213,214" },
 { modelID: 17, componentName: "midsole", change: "207,210,211,212,213,206,48,49" },
 { modelID: 17, componentName: "embed", change: "207,210,211,212,213,206,48,49" },
 { modelID: 17, componentName: "heel", change: "207,210,211,212,213,206,48,49" },
 { modelID: 18, componentName: "upper", change: "207,210,211,212,213,206,48,49" },
 { modelID: 18, componentName: "inner", change: "211,212,213,214" },
 { modelID: 18, componentName: "insole", change: "211,212,213,214" },
 { modelID: 18, componentName: "midsole", change: "207,210,211,212,213,206,48,49" },
 { modelID: 18, componentName: "embed", change: "207,210,211,212,213,206,48,49" },
 { modelID: 18, componentName: "heel", change: "207,210,211,212,213,206,48,49" },
 //shoe4
 { modelID: 19, componentName: "upper", change: "207,210,211,212,213,206,48,49" },
 { modelID: 19, componentName: "inner", change: "211,212,213,214" },
 { modelID: 19, componentName: "insole", change: "211,212,213,214" },
 { modelID: 19, componentName: "counterInner", change: "211,212,213,214" },

 { modelID: 20, componentName: "body", change: "274,276,277,278,286,287,288,289,298,303"},
  { modelID: 20, componentName: "eyestay", change: "269,279,290,294,299,304"},
  { modelID: 20, componentName: "backstay", change: "280,281,282,291,297,302,305"},
  { modelID: 20, componentName: "lace", change: "270,283,292,295,300,306"},
  { modelID: 20, componentName: "binding", change: "284,285,293,296,301,307"},
]
function getChangeableList(pointer) {
  let list = []
  materialsChange.forEach(each => {
    if(each.modelID === pointer) {
      let temp = {}
      temp.componentName = each.componentName
      temp.list = []
      let temp2 = each.change.split(',')
      Object.keys(temp2).forEach(each => {
        temp.list.push(parseInt(temp2[each]))
      })
      list.push(temp)
    }
  })
  // console.log(list)
  return list
}

module.exports = { getChangeableList }