export default {
  methods: {
    judgeDirection(trueness) {
      let root = '@/../static/imgs/renderPage/'
      return trueness?`${root}icon_20.png`:`${root}icon_19.png`
    },
  }
}