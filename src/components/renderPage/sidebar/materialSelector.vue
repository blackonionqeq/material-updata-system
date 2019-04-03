<template>
  <div class="materialSelector-container">
    <!-- <materials-from-component style="width: 100%;" v-for="(material, index) of changeableMaterialList" :material="material" :key="index">
    </materials-from-component> -->
    <!-- <search-bar input_bar_ID="m_search" @getKeyword="getKeyword"></search-bar>
    <div class="search-result-container">
      <div v-if="searchData" class="return-icon-container">
        <img v-if="searchData" class="return-icon__img" srcset="@/../static/imgs/public/close.png 1x" @click="closeSearchData()"/>
      </div>
      <vue-loading v-if="searchIsLoading"  type="spiningDubbles" color="#1E95F7" style="margin: .5em auto .5em;"></vue-loading>
      <transition name="fade">
        <div v-if="searchData">
          <materials-from-component :material="searchData"></materials-from-component>
        </div>
      </transition>
    </div> -->
    <div class="collected-materials-container animated pulse">
      <div class="title-bar" @click="toggle(0)">
        <div>Collected Materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(collectedShow)">
      </div>
      <vue-loading v-if="!collectedData && collectedShow" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div v-if="collectedShow && collectedData">
          <materials-from-component :material="collectedData"></materials-from-component>
        </div>
      </transition>
    </div>
    <div class="selected-materials-container">
      <div class="title-bar" @click="toggle(1)">
        <div>Selected Materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(selectedShow)">
      </div>
      <vue-loading v-if="!selectedData && selectedShow" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div v-if="selectedShow && selectedData">
          <selected-material-and-component :selectedMaterials="selectedData"></selected-material-and-component>
        </div>
      </transition>
      <!-- <selected-materials-info> -->
    </div>
    <!-- <div class="public-materials-container">
      <div class="title-bar" @click="toggle(2)">
        <div>Public Materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(publicMaterialShow)">
      </div>
      <vue-loading v-if="!publicMaterialData && publicMaterialShow" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div v-if="publicMaterialShow && publicMaterialData">
          <materials-from-component :material="publicMaterialData"></materials-from-component>
        </div>
      </transition>
    </div> -->
    <div class="private-materials-container">
      <div class="title-bar" @click="toggle(3)">
        <div>Custormer Supplied Proprietary Materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(privateMaterialShow)">
      </div>
      <vue-loading v-if="!privateMaterialData && privateMaterialShow" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div v-if="privateMaterialShow && privateMaterialData">
          <materials-from-component :material="privateMaterialData"></materials-from-component>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import Vue from 'vue'
import materialsFromComponent from '@/components/renderPage/sidebar/materialSelector/materialsFromComponent'
import selectedMaterialAndComponent from '@/components/renderPage/sidebar/materialSelector/selectedMaterialAndComponent'
import searchBar from '@/components/public/searchBar'
export default {
  props: ['selectInfos'],
  components: {
    materialsFromComponent,
    selectedMaterialAndComponent,
    searchBar
  },
  data() {
    return {
      // changeableMaterialList: []
      searchData: null,
      searchIsLoading: false,
      collectedShow: false,
      collectedData: null,
      selectedShow: false,
      selectedData: [],
      publicMaterialShow: false,
      publicMaterialData: null,
      privateMaterialShow: false,
      privateMaterialData: null,

      isCreated: false,
    }
  },
  methods: {
    judgeDirection(trueness) {
      let root = '@/../static/imgs/renderPage/'
      return trueness?`${root}icon_20.png`:`${root}icon_19.png`
    },
    toggle(number) {
      switch(number) {
        case 0: this.collectedShow = !this.collectedShow;break
        case 1: this.selectedShow = !this.selectedShow;break
        case 2: this.publicMaterialShow = !this.publicMaterialShow;break
        case 3: this.privateMaterialShow = !this.privateMaterialShow;break
      }
    },
    pushToSelectedMaterials(type) {
      console.log(type)
      if(type === 'init') {
        this.selectedData = []
        this.currentModelList.forEach(eachComponent => {
          this.selectedData.push(eachComponent)
        })
      } 
      else if(type === 'change') {
        console.log(' in change')
        if(this.selectedData.length !== this.currentModelList.length) {
          this.selectedData = []
          this.currentModelList.forEach(eachComponent => {
            this.selectedData.push(eachComponent)
          })
        }
        else {
          console.log('asdf')
          for(let i = 0; i < newList.length; i++) {
            if(this.selectedData[i] !== newList[i]) {
              Vue.set(this.selectedData, i, newList[i])
            }
          }
        }
      }
    },
    getKeyword(keyword) {
      console.log(keyword)
      if(keyword === '') {
        this.searchData = null
        return
      }
      this.searchIsLoading = true
      console.log(this.searchIsLoading)
      this.$store.dispatch('SearchMaterials', keyword).then(res => {
        console.log(res)
        this.searchIsLoading = false
        if(res.value.length !== 0)
          this.searchData = res.value
      }).catch(err => {
        console.log(err)
        this.searchIsLoading = false
      })
    },
    closeSearchData() {
      this.searchData = null
    }
  },
  computed: {
    ...mapGetters([
      'selectedModelID',
      'currentModelList',
      'tmpObject',
    ]),
  },
  watch: {
    currentModelList() {
      if(this.selectedShow) {
        this.selectedData = []
        this.currentModelList.forEach(eachComponent => {
          this.selectedData.push(eachComponent)
        })
      }
    },
    // When change the material and the selected matreials bar is open, use this function
    tmpObject(newObj) {
      if(!this.selectedShow) 
        return
      for(let i = 0; i < this.selectedData.length; i++) {
        if(this.selectedData[i].componentName === newObj.componentName) {
          Vue.set(this.selectedData, i, newObj)
        }
      }
    },
    selectedModelID(newID) {
      this.collectedShow = false
      this.collectedData = null
      this.selectedShow = false
      this.selectedData = []
    },
    // selectInfos(newInfo) {
    //   console.log(newInfo)
    // }
    collectedShow(newVal) {
      console.log(`selectedModelID is ${this.selectedModelID}`)
      if(newVal === true && this.collectedData == null) {
        this.$store.dispatch('GetCollectedMaterials', this.selectedModelID).then(response => {
          console.log(response)
          this.collectedData = response
        }).catch(error => {
          console.log(error)
        })
      }
    },

    selectedShow(newVal) {
      if(newVal === true ) {
        this.selectedData = []
        this.currentModelList.forEach(eachComponent => {
          this.selectedData.push(eachComponent)
        })
      }
    },

    
    publicMaterialShow(newVal) {
      if(this.publicMaterialData)
        return 
      if(newVal === true) {
        console.log(0)
        this.$store.dispatch('GetPublicMaterials').then(response => {
          console.log(response)
          this.publicMaterialData = response
        }).catch(error => {
          console.log(error)
        })
      }
    },

    privateMaterialShow(newVal) {
      if(this.privateMaterialData)
        return 
      if(newVal === true) {
        this.$store.dispatch('GetPrivateMaterials').then(response => {
          console.log(response)
          this.privateMaterialData = response
        }).catch(error => {
          console.log(error)
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

  height: 2.2em;

  border-bottom: 2px solid #eee;
  border-top: 2px solid #fff;

  cursor: pointer;
  div {
    // margin-left: .2em;
    // font-size: 1.3em;
    // font-weight: 600;
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
.materialSelector-container {
  display: flex;
  flex-wrap: wrap;
  width: 24em;
  margin-top: 2em;

  > div {
    width: 100%;
  }
  .search-result-container {
    .return-icon-container {
      position: relative;
      .return-icon__img {
        width: 1em;
        height: 1em;
        cursor: pointer;
        position: absolute;
        right: 1em;
      }
    }
  }
}
</style>
