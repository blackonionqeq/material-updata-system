<template>
  <div class="materialSelector-container">
    <!-- <materials-from-component style="width: 100%;" v-for="(material, index) of changeableMaterialList" :material="material" :key="index">
    </materials-from-component> -->
    <div class="collected-materials-container">
      <div class="title-bar" @click="toggle(0)">
        <div>Collected Materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(collectedShow)">
      </div>
      <div v-if="collectedShow && collectedData">
        <materials-from-component></materials-from-component>
      </div>
    </div>
    <div class="selected-materials-container">
      <div class="title-bar" @click="toggle(1)">
        <div>Selected materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(selectedShow)">
      </div>
      <!-- <selected-materials-info> -->
    </div>
    <div class="public-materials-container">
      <div class="title-bar" @click="toggle(2)">
        <div>Public materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(publicMaterialShow)">
      </div>
      <div v-if="publicMaterialShow && publicMaterialData">
        <materials-from-component></materials-from-component>
      </div>
    </div>
    <div class="private-materials-container">
      <div class="title-bar" @click="toggle(3)">
        <div>Private materials</div>
        <span></span>
        <img style="height: .5625em;" :src="judgeDirection(privateMaterialShow)">
      </div>
      <div v-if="privateMaterialShow && publicMaterialData">
        <materials-from-component></materials-from-component>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
let materialsSquare = require('@/../static/js/materialSquare')
let materialChangeableMap = require('@/../static/js/materialChangeableMap')
import materialsFromComponent from '@/components/renderPage/sidebar/materialSelector/materialsFromComponent'
export default {
  props: ['selectInfos'],
  components: {
    materialsFromComponent
  },
  data() {
    return {
      // changeableMaterialList: []
      collectedShow: false,
      collectedData: null,
      selectedShow: false,
      selectedData: null,
      publicMaterialShow: false,
      publicMaterialData: null,
      privateMaterialShow: false,
      privateMaterialData: null,
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

  },
  computed: {
    ...mapGetters([
      'selectedModelID'
    ]),
  },
  watch: {
    // selectInfos(newInfo) {
    //   console.log(newInfo)
    // }
    collectedShow(newVal) {
      if(newVal === true && this.collectedData == null) {
        this.$store.dispatch('GetCollectedMaterials', this.selectedModelID).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
    },

    selectedShow(newVal) {
      if(newVal === true && this.collectedData == null) {
        // this.$store.dispatch('GetPublicMaterials').then(response => {
        //   console.log(response)
        // }).catch(error => {
        //   console.log(error)
        // })
      }
    },

    
    publicMaterialShow(newVal) {
      if(newVal === true) {
        console.log(0)
        this.$store.dispatch('GetPublicMaterials').then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
    },

    privateMaterialShow(newVal) {
      if(newVal === true && this.collectedData == null) {
        this.$store.dispatch('GetPrivateMaterials').then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
    },
  },
  mounted() {

    { // console.log(this.selectInfos)
      // let temp = this.selectInfos
      // let temp2 = []
      // materialsSquare.materials.forEach(eachMaterial => {//对面料广场的每种面料遍历
      //   temp.forEach(eachComponent => {//对从sidebar父组件里得到的原单位为{部件，面料ID数组}的数组（即[{部件，面料ID数组}, {部件，面料ID数组}]）遍历
      //     eachComponent.Mlist = []
      //     eachComponent.list.forEach(eachMaterialID => {//对每个{部件，面料ID数组}的面料ID数组的每个ID遍历
      //       if(eachMaterialID == eachMaterial.furID) {//通过面料ID在模型广场中找对应的面料，加载到部件的一个属性里，形成一个数组
      //         if(temp2.filter(each => each.componentName == eachComponent.componentName).length == 0) //当temp2里不存在该部件名时加入部件和可替换的面料信息，否则找到赌赢的部件，在对应的可替换面料数组中加上面料信息
      //           temp2.push({
      //             componentName: eachComponent.componentName,
      //             Mlist: [eachMaterial]
      //           })
      //         else {
      //           temp2.filter(each => each.componentName == eachComponent.componentName)[0].Mlist.push(eachMaterial)
      //         }
      //       }
      //     })
      //   })
      // })
      // this.changeableMaterialList = temp2
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar {
  display: flex;
  align-items: center;

  height: 2.2em;

  border-bottom: 2px solid #888;
  border-top: 2px solid #fff;

  cursor: pointer;
  div {
    margin-left: .3em;
    font-size: 1.3em;
    font-weight: 600;
    color: #888;
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
}
</style>
