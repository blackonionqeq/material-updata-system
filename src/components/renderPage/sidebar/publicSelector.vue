<template>
  <div class="public-selector-container">
    <!-- <div class="public-models-container">
      <div class="title-bar" @click="toggle(1)">
        <div>Styles</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(publicModelIsShow)">
      </div>
      <vue-loading v-if="!publicModelData && publicModelIsShow" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div class="public-models-item-list" v-if="publicModelIsShow && publicModelData">
          <div class="public-models-item-unit" v-for="(eachPublicModel, index) of publicModelData" :key="index" @click="selectModel(eachPublicModel)">
            <img :srcset="eachPublicModel.curtailImg">
            <div>{{ eachPublicModel.modelNumber}}</div>
          </div>
        </div>
      </transition>
    </div> -->
    <search-bar input_bar_ID="p_search" @getKeyword="getKeyword"></search-bar>
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
    </div>
    <div class="public-materials-container">
      <div class="title-bar" @click="toggle(2)">
        <div>Public Materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(publicMaterialIsShow)">
      </div>
      <vue-loading v-if="!publicMaterialData && publicMaterialIsShow" type="spiningDubbles" color="#1E95F7" style="height: 4em;margin-top: 2em;"></vue-loading>
      <transition name="fade">
        <div v-if="publicMaterialIsShow && publicMaterialData">
          <materials-from-component :material="publicMaterialData"></materials-from-component>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import SelectorMethods from './mixin/selectorMethods'
import materialsFromComponent from './materialSelector/materialsFromComponent'
import searchBar from '@/components/public/searchBar'
export default {
  mixins: [SelectorMethods],
  components: {
    materialsFromComponent,
    searchBar
  },
  data() {
    return {
      publicModelData: null,
      publicModelIsShow: false,
      publicMaterialData: null,
      publicMaterialIsShow: false,

      searchData: null
    }
  },
  methods: {
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
    },
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
    toggle(num) {
      switch(num) {
        case 1: this.publicModelIsShow = !this.publicModelIsShow;break
        case 2: this.publicMaterialIsShow = !this.publicMaterialIsShow;break
      }
    }
  },
  watch: {
    publicModelIsShow(newVal) {
      if(this.publicModelData)
        return
      if(newVal === true ) {
        // this.publicModelIsShow = true
        this.$store.dispatch('GetPublicModels').then(res => {
          console.log(res)
          this.publicModelData = res
          // this.showLoadingM1 = false
        }).catch(err => {
          console.log(err)
        })
      }
    },
    publicMaterialIsShow(newVal) {
      if(this.publicMaterialData)
        return 
      if(newVal === true) {
        this.$store.dispatch('GetPublicMaterials').then(response => {
          console.log(response)
          this.publicMaterialData = response
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },
  mounted() {
    this.publicMaterialIsShow = true
  }
}
</script>


<style lang="scss" scoped>
  .public-selector-container {
    margin-top: 2em;
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
    .public-models-container {
      .public-models-item-list {
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        .public-models-item-unit {
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
    > div {
      width: 24em;
    }
  }
</style>

