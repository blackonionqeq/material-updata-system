<template>
  <div class="renderer-page-container">
    <banner></banner>
    <div class="renderer-page-content">
      <div class="second-top-bar">
        <!-- <div class="go-back" @click="goBack()">
          <img src="@/../static/imgs/public/icon_back.png">
          &nbsp;&nbsp;&nbsp;Return
        </div> -->
        <!-- <div class="separator">|</div> -->
        <div class="shoe-title" v-if="modelInfo">{{ modelInfo.modelNumber }}</div>
        <div class="shoe-tags-container">
          <div class="shoe-tag" v-for="(tag, index) of tags" :key="index">
            <div>{{ tag }}</div>
          </div>
          <div class="shoe-tag-add" @click="addTag()">
            <img srcset="@/../static/imgs/renderPage/添加@2x.png 1x">
          </div>
        </div>
        <span></span>
        <!-- <div class="save-colors" style="padding-right: 1em;cursor: pointer;" @click="fake = true">Output rendering</div> -->
        <div class="save-colors" @click="savePatterns()">
          Save
          <img srcset="@/../static/imgs/renderPage/下拉@2x.png 1x">
        </div>
      </div>
      <div class="renderer-and-controllor">
        <renderer></renderer>
        <sidebar></sidebar>
      </div>
    </div>
    <div class="tips-bar-container" :class="{ hidden: flag === 0 }" @click="close()">
      <!-- <div class="model-param-container" :class="{ hidden: flag !== 1 }"> -->
        <model-information :modelInfo="modelInfo" :class="{ hidden: flag !== 1 }"></model-information>
      <!-- </div> -->
      <div class="how-to-use-container" :class="{ hidden: flag !== 2 }">
        <!-- <div class="close">X</div> -->
        <div v-for="(eachTip, index) of tips" :key="index">
          <img :src="eachTip.url">
          <div>
            <b>{{ eachTip.title }}</b>
          </div>
          <div>
            <b>{{ eachTip.title2 }}</b>
          </div>
        </div>
      </div>
      <div class="material-param-container" :class="{ hidden: flag !== 3 }">
        <material-information :materialInfo="materialInfo"></material-information>
      </div>
    </div>
    <!-- <div class="previous-op">
        <img class="big-size" srcset="@/../static/imgs/renderPage/undo.png 1x" @click="undo()">
    </div>
    <div class="next-op">
        <img class="big-size" srcset="@/../static/imgs/renderPage/redo.png 1x" @click="redo()">
    </div> -->
    <!-- <div class="fake" v-if="fake" @click="fake=false"></div>
    <div class="fake2" v-if="fake" @click="fake=false">
      <img style="width: 140px; height: 140px;" srcset="@/../static/imgs/renderPage/完成@2x.png 1x">
      <div>已传输至云渲染平台</div>
    </div> -->
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import banner from '@/components/public/banner'
import sidebar from '@/components/renderPage/sidebar'
import renderer from '@/components/renderPage/renderer'
import materialInformation from '@/components/public/materialInformation'
import modelInformation from '@/components/public/modelInformation'

export default {
  components: {
    banner,
    sidebar,
    renderer,
    materialInformation,
    modelInformation
  },
  data() {
    return {
      tags: [
      ],
      tips: [
        {
          url:'@/../static/imgs/renderPage/左键.png',
          title: 'Left-click',
          title2: 'Rotate',
        },
        {
          url: '@/../static/imgs/renderPage/滑轮.png',
          title: 'Wheel',
          title2: 'Scale/Zoom',
        },
        {
          url:'@/../static/imgs/renderPage/右键.png',
          title: 'Right-click',
          title2: 'Move',
        },
      ],
      flag: null,
      // historyPointer: null, 
      fake: false,
    }
  },
  methods: {
    goBack() {
      this.$store.dispatch('beforeGoBack')
    },
    close() {
      this.flag = 0
      this.$store.dispatch('resetShowFlag')
      this.$store.dispatch('triggerHasShown')
    },
    addTag() {
      let aTag = prompt('Please input a tag name：','')
      if(aTag && aTag != '') {
        this.tags.push(aTag)
        console.log(this.$route.query.id)
        console.log(aTag)
        let anObject = {
          shoeID: parseInt(this.$route.query.id),
          tag: aTag
        }
        this.$store.dispatch('UpdataTagOfModel', anObject).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    undo() {
      // --this.historyPointer下面这句相当于这个，注意pointer为-1时该按钮已不可用
      if(this.historyPointer +1 == this.historyOperation.length) {
        this.$store.dispatch('push_tmp_operation_and_undo')
        // console.log(this.historyOperation)
        return
      }
      this.$store.dispatch('redo_or_undo_operation', 1)
      console.log(this.historyPointer)
    },
    redo() {
      // 注意pointer+1等于operation的长度时该按钮已不可用
      this.$store.dispatch('redo_or_undo_operation', 2)
      console.log(this.historyPointer)
    },
    savePatterns() {
      this.$store.dispatch('SetSaveFlag')
      // let imgData = renderer.domElement.toDataURL("image/jpeg")
    },
    arrangeSavingInfo(componentList, colorsAndTilesList) {
      let tmp = []
      for(let i = 0; i < componentList.length; i++) {
        for(let j = 0; j < colorsAndTilesList.length; j++) {
          if(componentList[i].componentName === colorsAndTilesList[j].componentName) {
            tmp.push({
              componentName: componentList[i].componentName,
              componentID: componentList[i].componentID,
              materialID: componentList[i].materialID,
              materialNumber: componentList[i].materialNumber,
              color: colorsAndTilesList[j].color,
              tile: colorsAndTilesList[j].tile || '',
            })
            break
          }
        }
      }
      return tmp
    },
  },
  computed: {
    ...mapGetters([
      'showFlag',
      'modelInfo',
      'materialInfo',
      // 'materialImgUrl',
      'goBackFlag',
      'historyOperation',
      'historyPointer',
      'colorsAndTiles',
      'currentModelList',
      'hasShown'
    ]),
  },
  watch: {
    colorsAndTiles(newList) {
      let info = this.arrangeSavingInfo(this.currentModelList, newList)
      info.shoeID = parseInt(this.$route.query.id)
      this.$store.dispatch('SaveAModel', info).then(res => {
        alert("Save successfully.")
      }).catch(err => {
        console.log(err)
      })
    },
    showFlag(newFlag) {
      this.flag = newFlag
    },
    modelInfo(newInfo) {
      // this.modelInfo = newInfo
      this.tags = newInfo.tags
    },
    materialInfo(newInfo) {
      console.log(newInfo)
    },
    goBackFlag: function(newVal, oldVal) {
      if(newVal === 0 && oldVal === 1) {
        this.$router.go(-1)
      }
    },
    historyOperation(newOp) {
      // console.log(newOp)
    },
    hasShown(newFlag) {
      console.log('hasShown')
    }
  },
  mounted() {
    console.log(this.$store.getters.hasShown)
    if(this.$store.getters.hasShown) {
      this.flag = 0
    }
    else {
      this.flag = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.fake {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 90;
  background: #444;
  background-color: rgba(0, 0, 0, 0.6);
}
.fake2 {
  z-index: 91;
  position: fixed;
  top: calc(50vh - 190px);
  left: calc(50vw - 300px);
  width: 600px;
  height: 380px;
  background: #fff;
  border-radius: 1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content:flex-start;
  align-items: center;
  img {
    margin-top: 3em;
  }
  div {
    font-size: 2em;
    margin-top: 1em;
  }
}
.previous-op {
  position: absolute;
  left: 5vw;
  top: 23vh;
}
.next-op {
  position: absolute;
  left: 69vw;
  top: 23vh;
}
.previous-op, .next-op {
  cursor: pointer;
}
.big-size {
  font-size: 2em;
}
.hidden {
  display: none!important;
}
.renderer-page-container {
  background-color: #f5f5f5;
}
.second-top-bar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  margin: 1.5em auto 0 auto;

  width: 95%;
  height: 3.75em;

  border-radius: .375em;

  background-color: #fff;

  div {
    // margin-left: 1em;
    line-height: 3em;
  }

  .go-back {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .go-back,.separator {
    margin-left: 1.5em;
  }

  .shoe-title {
    // margin-left: 3.75em;
    margin-left: 2em;
  }

  .shoe-tags-container {
    display: flex;
    align-items: center;
    margin-left: 2em;
    > div {
      height: 1.825em;

      background-color: #ACE7FF;

      border-radius: .375em;

      color: #fff;
      padding-left: 1em;
      margin-right: 1em;

      cursor: pointer;
      > div {
        margin-right: 1em;
        height: 2.5em;
        line-height: 2em;
      }
    }
    > div.shoe-tag-add {
      // border-radius: .3125em;
      background:linear-gradient(45deg,rgba(115,212,252,1),rgba(30,149,247,1));
      img {
        position: relative;
        right: .46em;
        bottom: .2em;
      }
    }
  }

  span {
    flex-grow: 1;
  }

  .save-colors {
    margin-right: 3.125em;
    background:linear-gradient(45deg,rgba(115,212,252,1),rgba(30,149,247,1));
    line-height: 2em;
    padding: 0 0 0 1em;
    // background-size: 10em 4em;
    // background-position: 8.5em -1em;

    height: 1.875em;
    // width: 7.2em;

    border: 0;
    border-radius: 1em;

    cursor: pointer;
    color: #fff;

    img {
      margin: 0 1em 0 .3em;
      position: relative;
      bottom: .0625em;
    }
  }
}
.renderer-and-controllor {
  display: flex;
  flex-flow: row nowrap;

  margin: 1.5em auto 0;

  width: 95%;
  > div {
    margin-bottom: 2em;
  }
}
.renderer-page-content {
  display: flex;
  flex-flow: column nowrap;
}
.tips-bar-container {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;

  // background-color: #666;

  // opacity: .8;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
}
.model-param-container {
  width: 36em;
  height: 16em;
  background-color: #fff;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #444;
  border-radius: .375em;
  .model-param {
    display: grid;
    grid-template: repeat(2, 2em) 5em repeat(2, 2em) / 8em 15em;
    justify-items: flex-start;
    // > div:nth-of-type(2n) {
    //   margin-top: .2em;
    // }
  }
}
.how-to-use-container {
  width: 40em;
  height: 20em;
  background-color: #fff;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid #444;
  border-radius: .375em;
  > div {
    display: flex;
    flex-flow: column nowrap;
    font-size: 1.2em;
    > div:nth-of-type(2) {
      color: #6B9AD1;
    }
  }
  > div:nth-of-type(1) {
    margin-left: 3em;
  }
  > div:nth-of-type(3) {
    margin-right: 4em;
  }
}
.close {
  position: absolute;
  top: 1em;
  right: 1em;
}
.material-param-container {
  width: 36em;
  height: 16em;
  background-color: #fff;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #444;
  border-radius: .375em;
  .material-param {
    display: flex;
    flex-wrap: nowrap;
    .material-param-content {
      display: grid;
      grid-template: 1.5em 4em repeat(4, 1.5em) / 8em 10em;
      justify-items: flex-start;
      // > div:nth-of-type(2n) {
      //   margin-top: .2em;
      // }
    }
  }
}
</style>
