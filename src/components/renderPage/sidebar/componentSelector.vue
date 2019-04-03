<template>
  <div class="componentSelector-container">>
    <div class="changeable-component-container">
      <div class="title-bar" @click="toggle(0)">
        <img srcset="@/../static/imgs/renderPage/个性定制@2x.png 1x">
        <div>Customizable Parts</div>
        <span></span>
        <img style="height: .4em;" :src="judgeDirection(showCustomized)">
      </div>
      <vue-loading v-if="showLoadingC" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div class="changeable-components" v-if="showCustomized && changeableComponentList">
          <component-unit :components="changeableComponentList"></component-unit>
        </div>
      </transition>
    </div>
    <div class="changeable-models-container">
      <div class="title-bar" @click="toggle(1)">
        <img srcset="@/../static/imgs/renderPage/皮鞋@2x.png 1x">
        <div>Model List</div>
        <span></span>
        <img style="height: .4em;" :src="judgeDirection(showModelList)">
      </div>
      <div v-if="showModelList" class="public-models-item">
        <div class="public-models-item-title sub-title-bar" @click="toggle(2)">
          <div>Public Models</div>
          <span></span>
          <img style="height: .4em;" :src="judgeDirection(showPublicModels)">
        </div>
        <vue-loading v-if="showLoadingM1" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
        <transition name="fade">
          <div class="public-models-item-list" v-if="showPublicModels && publicModels">
            <div class="public-models-item-unit" v-for="(eachPublicModel, index) of publicModels" :key="index" @click="selectModel(eachPublicModel)">
              <img :srcset="eachPublicModel.curtailImg">
              <div>{{ eachPublicModel.modelNumber}}</div>
            </div>
          </div>
        </transition>
        <div class="private-models-item-title sub-title-bar" @click="toggle(3)">
          <div>Private Models</div>
          <span></span>
          <img style="height: .4em;" :src="judgeDirection(showPrivateModels)">
        </div>
        <vue-loading v-if="showLoadingM2" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
        <transition name="fade">
          <div class="private-models-item-list" v-if="showPrivateModels && privateModels">
            <div class="private-models-item-unit" v-for="(eachPrivateModel, index) of privateModels" :key="index" @click="selectModel(eachPrivateModel)">
              <img :srcset="eachPrivateModel.curtailImg">
              <div>{{ eachPrivateModel.modelNumber}}</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import componentUnit from '@/components/renderPage/sidebar/componentSelector/componentUnit'
export default {
  components: {
    componentUnit,
  },
  data() {
    return {
      showCustomized: false,
      showLoadingC: false,
      changeableComponentList: null,

      showModelList: false,

      showPublicModels: false,
      showLoadingM1: false,
      publicModels: null,

      showPrivateModels: false,
      showLoadingM2: false,
      privateModels: null,

      // customizedShow: false,
      // publicModelShow: false,
      // privateModelShow: false,
    }
  },
  // props: ['selectInfos'],
  methods: {

    selectModel(info) {
      // this.$router.push(`/render?id=${id}`)
      // this.$store.dispatch('getModelInfo', id)
      // this.$store.dispatch('setModelInfo', id)
      this.$router.push(`/render?id=${info.shoeID}`)
      this.$store.dispatch('GetModelsInfoFromBackEnd', info.shoeID).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      this.iniallizeModels()
      this.$store.dispatch('reset_historyOperation')
      this.$store.dispatch('GetInfoOfAModel' ,info.shoeID).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    iniallizeModels() {
      this.showCustomized = false
      this.showLoadingC = false
      this.changeableComponentList = null
    },
    judgeDirection(trueness) {
      let root = '@/../static/imgs/renderPage/'
      return trueness?`${root}icon_20.png`:`${root}icon_19.png`
    },
    toggle(number) {
      switch(number) {
        case 0: this.showCustomized = !this.showCustomized;break
        case 1: this.showModelList = !this.showModelList;break
        case 2: this.showPublicModels = !this.showPublicModels;break
        case 3: this.showPrivateModels = !this.showPrivateModels;break
      }
    },
  },
  computed: {
    ...mapGetters([
      'selectedModelID'
    ]),
  },
  watch: {
    showCustomized(newVal) {
      if(this.changeableComponentList)
        return
      if(newVal === true ) {
        let id = this.selectedModelID + ''
        this.showLoadingC = true
        this.$store.dispatch('GetChangeableComponents', id).then(res => {
          console.log(res)
          this.changeableComponentList = res
          this.showLoadingC = false
        }).catch(err => {
          console.log(err)
        })
      }
    },
    showPublicModels(newVal) {
      if(this.publicModels)
        return
      if(newVal === true ) {
        this.showLoadingM1 = true
        this.$store.dispatch('GetPublicModels').then(res => {
          console.log(res)
          this.publicModels = res
          this.showLoadingM1 = false
        }).catch(err => {
          console.log(err)
        })
      }
    },
    showPrivateModels(newVal) {
      if(this.privateModels)
        return 
      if(newVal === true ) {
        this.showLoadingM2 = true
        this.$store.dispatch('GetPrivateModels').then(res => {
          console.log(res)
          this.privateModels = res
          this.showLoadingM2 = false
        }).catch(err => {
          console.log(err)
        })
      }
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.title-bar {
  display: flex;
  align-items: center;

  height: 3.2em;

  border-bottom: 2px solid #eee;
  border-top: 2px solid #fff;

  cursor: pointer;
  > div {
    // margin-left: .2em;
    // font-size: 1.3em;
    font-weight: 600;
    color: #222;
  }
  span {
    flex-grow: 1;
  }
  > img {
    margin-right: 1em;
    cursor: pointer;
  }

}
.sub-title-bar {
  display: flex;
  align-items: center;

  // height: 2em;
  margin-top: 1.25em;
  width: 95%;

  cursor: pointer;

  span {
    flex-grow: 1;
  }
  > img {
    margin-right: 1em;
    cursor: pointer;
  }
}

.componentSelector-container {
  display: flex;
  flex-wrap: wrap;
  
  > div {
    width: 100%;
  }
  .public-models-item-list, .private-models-item-list {
    display: flex;
    flex-wrap: wrap;
    .public-models-item-unit, .private-models-item-unit {
      cursor: pointer;
      > img {
        width: 130px;
        height: 100px;
      }
      > div {
        height: 2.2em;
        line-height: 2.2em;
        font-size: .875em;
        color: #666;
        max-width: 130px;
        text-align: center;
      }
    }
  }
  
}
</style>
