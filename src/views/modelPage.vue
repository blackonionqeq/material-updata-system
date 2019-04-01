<template>
  <div class="modelPage-container">
    <banner></banner>
    <div class="modelPage-content">
      <!-- Fixed sidebar which is navigator -->
      <div class="side-navigator-container">
        <div class="underline-container">
          <div class="navigator__underline"></div>
        </div>
        <div class="navigator-item" :class="navigatorItem.class" v-for="(navigatorItem, index) of navigatorContent" :key="index">
          <img :srcset="navigatorItem.srcset" :src="navigatorItem.iconUrl" :alt="navigatorItem.iconUrl">
          <div>{{ navigatorItem.title }}</div>
        </div>
      </div>
      <div class="model-type-container">
        <div class="left-arrow">
        </div>
        <div class="model-type-item" :class="{ selectedType: modelTypesPointer == index }" v-for="(modelType, index) of modelTypes" :key="index">
          {{ modelType }}
        </div>
        <div class="space"></div>
        <div class="search-bar">
          <input id="search" placeholder="search">
          <img srcset="
            @/../static/imgs/modelsPage/搜索@2x.png 1x
          " @click="search()">
        </div>
      </div>
      <div class="model-sequence-container">
        <div class="sequence-item" :class="{ selectedItem: selectedItem === index}" v-for="(sequenceItem, index) of sequenceType" :key="index" @click="sequenceItems(sequenceItem, index)">
          {{ sequenceItem }}
        </div>
        <div @click="addKeyword()">
          <img style="width: 3em; height: 2.3em; cursor: pointer;" srcset="@/../static/imgs/modelsPage/添加@2x.png 1x">
        </div>
      </div>
      <vue-loading v-if="!modelsList" type="spiningDubbles" color="#1E95F7" style="margin-left: 13em;"></vue-loading>
      <!-- <div class="model-tiles-area-container"> -->
        <transition-group name="fade" tag="span" class="model-tiles-area-container">
          <div class="model-item" v-for="(modelInfo) of modelsInfo" :key="modelInfo.name" @click="selectModel(modelInfo.modelID)">
            <img class="model-item-thumbnail" :src="modelInfo.thumbnailUrl" :alt="modelInfo.thumbnailUrl">
            <div class="model-item-title">{{ modelInfo.name }} </div>
            <div class="model-item-tags-container">
              <!-- <transition-group name="fade" tag="div"> -->
              <div class="model-item-tag" v-for="(modelTag) of modelInfo.tags" :key="modelTag">
                {{ modelTag }}
              </div>
              <!-- </transition-group> -->
            </div>
            <!-- <span></span> -->
            <div class="model-item-time-info-container">
              <div class="model-item-time">
                <img style="width: 1em; height: 1.0625em;" srcset="
                  ../../static/imgs/public/上传@2x.png 1x,
                  "
                src="@/../static/imgs/icons/icon_14.png">
                <div>{{ modelInfo.startTime}}</div>
              </div>
              <div class="model-item-time">
                <img style="width: 1em; height: 1.0625em;" srcset="
                  ../../static/imgs/public/修改@2x.png 1x,
                "
                src="@/../static/imgs/icons/icon_15.png">
                <div>{{ modelInfo.modifiedTime}}</div>
              </div>
              <div class="spice"></div>
              <!-- <div class="model-item-tips">tips</div> -->
              <div class="model-item-tips" @click.stop="showModelInfo(modelInfo.modelID)">
                <img srcset="
                  ../../static/imgs/public/信息@2x.png 1x,
                "
                src="@/../static/imgs/icons/icon_13.png">
              </div>
            </div>
          </div>
        </transition-group>
      <!-- </div> -->
    </div>
    <!-- Hidden default. -->
    <div class="tips-bar-container" :class="{ hidden: flag === 0 }" @click="close()">
      <div class="model-param-container" :class="{ hidden: flag !== 1 }">
        <div class="model-param" v-if="modelInfo">
          <div>ModelNumber</div>
          <div>{{ modelInfo.modelNumber }}</div>
          <div>Series</div>
          <div>{{ modelInfo.series }}</div>
          <!-- <div>Components</div>
          <div style="overflow: auto;">{{ modelInfo.component.split('/').join(' ') }}</div> -->
          <div>UpdateTime</div>
          <div>{{ modelInfo.uploadTime }}</div>
          <div>LastModeified</div>
          <div>{{ modelInfo.lastTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/public/banner'
export default {
  components: {
    banner
  },
  data() {
    return {
      flag: 0,
      modelInfo: null,
      navigatorContent: [
        {
          iconUrl: '../../../static/imgs/public/meau_icon_2_light.png',
          title: 'My model',
          class: 'my-model-class',
          srcset: '../../static/imgs/public/皮鞋_1.png 1x',
        },{
          iconUrl: '../../../static/imgs/public/meau_icon_3_gray.png',
          title: 'My materials',
          class: 'my-material-class',
          srcset: '../../static/imgs/public/材质替换_2.png 1x',
        },{
          iconUrl: '../../../static/imgs/public/meau_icon_4_gray.png',
          title: 'Order list',
          class: 'my-list-class',
          srcset: '../../static/imgs/public/我的订单_2.png 1x',
        },{
          iconUrl: '../../../static/imgs/public/meau_icon_5_gray.png',
          title: 'Settings',
          class: 'my-setting-class',
          srcset: '../../static/imgs/public/设置_2.png 1x',
        },
      ],
      modelTypes: [
        'All Models',
        'confirmed',
        'unconfirmed'
      ],
      modelTypesPointer: 0,
      sequenceType: [
        'Latest',
        '20Spring',
        '19Autumn',
      ],
      modelsInfo: [
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
        // {
        //   thumbnailUrl: 'http://m.360buyimg.com/pop/jfs/t22519/318/1775869926/149617/f0cffc4b/5b6954ecN758addcf.png',
        //   name: '鞋子A',
        //   startTime: '23/1/19',
        //   modifiedTime: '1/2/18',
        //   tags: '19秋冬 休闲鞋 女 美国',
        // },
      ],
      selectedItem: 0,
      modelsList: null,
    }
  },
  mounted() {
    if(!this.$store.getters.token) {
      this.$router.push('/')
      return
    }
    this.$store.dispatch('GetPrivateModels2ModelPage').then(modelsList => {
      console.log(modelsList)
      this.adapt2List(modelsList)
      this.modelsList = modelsList
    }).catch(reject => {
      console.log(reject)
      alert('The server have some wrong.')
    })
    this.$store.dispatch('GetModelsSeriesAndSeasons').then(tags => {
      let tmp = this.sequenceType[0]
      tags.unshift(tmp)
      this.sequenceType = null
      this.sequenceType = tags
    })
  },
  methods: {
    showModelInfo(id) {
      console.log(id)
      this.modelInfo = null
      let temp = this.modelsList.filter(eachModel => eachModel.shoeID == id)[0]
      this.modelInfo = temp
      this.flag = 1
    },
    close() {
      this.flag = 0
    },
    adapt2List(models) {
      let temp = []
      models.forEach(eachModel => {
        let temp2 = {}
        temp2.thumbnailUrl = eachModel.curtailImg
        temp2.name = eachModel.modelNumber
        temp2.tags = Object.values(eachModel.tags)
        console.log(typeof eachModel.uploadTime)
        temp2.startTime = eachModel.uploadTime.substring(2,10).replace(/-/g,'.')
        temp2.modifiedTime = eachModel.lastTime.substring(2,10).replace(/-/g,'.')
        temp2.modelID = eachModel.shoeID
        temp.push(temp2)
      })
      this.modelsInfo = temp
    },
    sequenceItems(keyWord, index) {
      let temp = []
      this.selectedItem = index
      if(index == 0) {
        this.modelsList = null
        this.$store.dispatch('GetPrivateModels2ModelPage').then(modelsList => {
          console.log(modelsList)
          this.adapt2List(modelsList)
          this.modelsList = modelsList
        }).catch(reject => {
          console.log(reject)
        })
        return
      }
      this.modelsList.forEach(eachModel => {
        if(eachModel.tags.includes(keyWord)) {
          temp.push(eachModel)
        }
      })
      this.adapt2List(temp)
    },
    addKeyword() {
      let newKeyWord = prompt('Please input tag name:', '')
      if(newKeyWord && newKeyWord != '') {
        this.sequenceType.push(newKeyWord)
      }
    },
    selectModel(modelID) {
      // this.$store.commit('SELECT_A_MODEL', modelID)
      let routeData = this.$router.resolve({ path:`/render?id=${modelID}`})
      window.open(routeData.href, '_blank')
    },
    search() {
      let keyValue = document.getElementById('search').value
      // console.log(keyValue)
      this.$store.dispatch('GetModelsBySearch', keyValue).then(res => {
        console.log(res)
        this.modelsList = res
        this.adapt2List(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
}
.hidden {
  display: none!important;
}
.modelPage-container {
  background-color: #f5f5f5;
}
.modelPage-content {
  display: flex;
  flex-flow: column nowrap;

  width: 100%;
  // height: 100vh;

  .model-tiles-area-container {
    display: flex;
    flex-wrap: wrap;

    margin-top: 1em!important;
    .model-item {
      display: flex;
      flex-flow: column nowrap;

      margin-right: 1.625em;
      margin-bottom: 1.625em;
      width: 16.25em;
      // height: 21em;

      background-color: #fff;

      text-align: left;

      cursor: pointer;
      > div {
        margin-left: 1em;
      }
      .model-item-thumbnail {
        width: 16.25em;
        height: 200px;
      }

      .model-item-tags-container {
        display: flex;
        flex-flow: row wrap;
        margin-top: 1em;
        height: 3.9em;
        overflow: auto;
        // for Firefox
        scrollbar-color: #0ae;
        .model-item-tag {
          border: .0625em solid #2ecefe;
          color: #2ecefe;
          font-size: .75em;
          border-radius: .25em;
          // padding: .1em .2em;
          padding: .375em;
          margin-right: .375em;
          margin-bottom: .5em;
          max-height: 1.17em;
        }

        
        // margin-top: 1em;
        // font-size: .8em;
        // color: #888; 
        // word-wrap: break-word;
        // line-height: 2em;
      }
      .model-item-tags-container::-webkit-scrollbar {
        width: .4em;
        background-color: #fff;
      }
      .model-item-tags-container::-webkit-scrollbar-thumb {
        border-radius: .625em;
        background-color: #0ae;
        background-image: #fff;
      }
      .model-item-tags-container::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #fff;
      }

      .model-item-time-info-container {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: .6em;
        // margin-top: 1em;

        > div {
          margin-right: 1em;
        }
        

        .model-item-time {
          display: flex;
          flex-flow: row nowrap;
          margin-bottom: .3em;

          div {
            margin-left: .5em;
            // margin-top: .1em;
            height: 1.5em;
            line-height: 1.5em;
            font-size: .6em;
            color: #aaa;
          }
        }
        .spice {
          flex-grow: 1;
        }
      }

      .model-item-tips {
        height: 1em;
      }

      span {
        flex-grow: 1;
      }

      > img:nth-of-type(1) {
        // width: 14em;
        // height: 11em;
      }
    }
  }

  > :not(.side-navigator-container) {
    margin-left: 11.5em;
    margin-top: 2em;
  }

  .model-type-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    width: 88%;
    height: 3.5em;

    background-color: #fff;

    border-radius: 10px;

    div {
      cursor: pointer;
    }

    > div:not(.left-arrow) {
      height: 3.5em;
      line-height: 3.5em;
      margin: 0 1.25em;
    }

    .search-bar {
      width: 6.5em;
      height: 2em!important;
      border: .0625em solid #aaa;
      border-radius: 1em;
      margin-right: 3em!important;
      input {
        width: 8ch;
        border: 0;
        position: relative;
        bottom: .7em;
        left: .5em;
        font-size: 1.05em;
        outline: none;
        z-index: 1;
      }
      img {
        z-index: 99;
        position: relative;
        bottom: .5em;
        right: .6em;
      }
    }

    .model-type-item {
      color: #aaa;
    }

    // .model-type-item:nth-of-type(2) {
    //   line-height: 3.5em;

      
    //   // border-bottom: 3px solid skyblue;
    // }

    .model-type-item.selectedType {
        font-weight: 600;
        color: #000;
    }

    .space {
      flex-grow: 1;
    }

    .update-model {
      margin-right: 4em;
      background-image: url('../../static/imgs/icon_date_light.png');
      background-size: 10.5em 4em;
      background-position: 8.5em -1em;

      height: 2em;
      // width: 7.2em;

      border: 0;
      border-radius: 1em;

      cursor: pointer;
      color: #fff;
    }
  }

  .model-sequence-container {
    display: flex;
    flex-flow: row wrap;

    margin-top: 1em;

    .sequence-item {
      height: 2.3em;
      line-height: 2.3em;

      margin-right: .625em;
      margin-bottom: 1em;
      padding: 0 1.5em;

      background-color: #dbdbdb;
      color: #fff;

      border-radius: .7em;

      cursor: pointer;
    }
    // .sequence-item:nth-of-type(1) {
    //   background-color: #ddf0f7;
    //   color: #1d80dd;
    // }
  }
}
.selectedItem {
  background-color: #c5eeff!important;
  color: #1E95F7!important;
}
.side-navigator-container {
  display: flex;
  flex-flow: column nowrap;

  position: fixed;
  top: 6em;
  left: 2em;

  width: 7.5em;

  background-color: #fff;

  border-radius: 10px;
  .underline-container {
    position: relative;
    .navigator__underline {
      position: absolute;
      top: 7em;
      left: calc(60px - 2.5em);
      border-image: linear-gradient(90deg,#1E95F7, #73D4FC)0 0 10% 0;
      border-width: .25em;
      border-style: solid;
      height: .25em;
      width: 4.5em;
    }
  }
  .navigator-item {
    margin-top: 2em;
    margin-bottom: 2em;

    cursor: pointer;

    img {
      margin-bottom: 1em;
    }

    div {
      color: #888;
    }
  }
  .navigator-item:nth-of-type(2) {
    div {
      // width: 4em;
      // margin-left: 1em;
      // border-bottom: 3px solid skyblue;
      color: #000;
      font-weight: 600;
    }
  }
  .navigator-item:last-of-type {
    margin-bottom: 3em;
  }
}
.tips-bar-container {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;

  background-color: #666;

  opacity: .8;

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
  border-radius: 10px;
  .model-param {
    display: grid;
    grid-template: repeat(2, 2em) 5em repeat(2, 2em) / 8em 15em;
    justify-items: flex-start;
    > div:nth-of-type(2n) {
      // margin-top: .2em;
    }
  }
}
</style>
