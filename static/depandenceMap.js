const map = {
  mounted: [
    'group',
    'lights',
  ],
  initScene: [
    'scene'
  ],
  initCamera: [
    'camera'
  ],
  initRender: [
    'camera',
    'group',
    'container',
    'stats',
    'controls',
    'renderer'
  ],
  initLight: [
    'scene',
  ],
  initModel: [
    'scene',
  ],
  animate: [
    'stats',
    'renderer',
  ],
  onChangeFur: [
    'scene',
  ],
  onChangeModel: [
    'scene',
    'model',
  ],
  loadCTM: [
    'group'
  ]
}

var readline = require('readline')
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
r1.on('line', function(line) {
  let titles = Object.keys(map)
  let includeList = []
  titles.forEach(each => {
    if(map[each].includes(line)) {
      includeList.push(each)
    }
  })
  console.log(includeList)
})