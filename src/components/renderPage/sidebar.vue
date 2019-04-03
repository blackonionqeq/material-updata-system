<template>
  <div class="sidebar-container">
    <nav class="type-selector">
      <!-- <div class="type-selector-inner"> -->
        <!-- <div :class="{ selectedType: typePointer === index }" v-for="(type, index) of types" :key="index" @click="changeSelector(type.selectorType)">{{ type.name }}</div> -->
        <div :class="{ selectedType: typePointer === index }" v-for="(selector, index) of types" :key="index" @click="changeSelector(selector.name)">
          {{ selector.name }}
        </div>
      <!-- </div> -->
    </nav>
    <div class="object-selector">
      <keep-alive>
        <component :is="currentSelector"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import componentSelector from '@/components/renderPage/sidebar/componentSelector'
import materialSelector from '@/components/renderPage/sidebar/materialSelector'
import publicSelector from '@/components/renderPage/sidebar/publicSelector'

// let modelSquare = require('@/../static/js/modelSquare')
// let materialSquare = require('@/../static/js/materialSquare')


export default {
  data() {
    return {
      currentSelector: 'materialSelector',
      types: [
        { name: 'My Materials', selectorType: 'materialSelector' },
        { name: '4DTC Materials', selectorType: 'publicSelector' },
      ],
      typePointer: 0,
    }
  },
  components: {
    componentSelector,
    materialSelector,
    publicSelector
  },
  methods: {
    changeSelector(type) {
      switch(type) {
        case 'My Materials': {
          this.currentSelector = 'materialSelector'
          this.typePointer = 0
          break
        }
        case '4DTC Materials': {
          this.currentSelector = 'publicSelector'
          this.typePointer = 1
          break
        }
      }
    },
    // getMaterialInfoByID(ID) { //当改变模型时触发。把选择项调到面料页，并传递该ID的面料信息（信息格式见materialChangeableMap.getChangeableList函数）到子部件materialSelector,以便做进一步的判断
    //   let list = materialChangeableMap.getChangeableList(ID)
    //   this.changeSelector('materialSquare', list)
    // }
  },
  computed: {
    ...mapGetters([
      'selectedModelID'
    ]),
  },
  watch: {
    // selectedModelID(id) {
    //   this.getMaterialInfoByID(id)
    // }
  },
  mounted() {
    let tmpObject = document.getElementsByClassName('sidebar-container')[0]
    tmpObject.style.height = screen.availHeight - 240 - 48 -29
  }
}
</script>

<style lang="scss" scoped>
.selectedType {
  font-weight: 600;
  color: #000!important;
  // border-width: 4px;
  // border-style: solid;
  border-image: linear-gradient(90deg,rgba(115,212,252,1),rgba(30,149,247,1))0 0 10% 0!important;
  // z-index: 999;
}
.sidebar-container {
  margin-left: .5em;

  min-height: calc(100vh - 240px + 2em);
  max-height: calc(100vh - 240px + 2em);
  min-width: 27em;
  overflow: auto;

  background-color: #fff;

  border-radius: 10px;
  .type-selector {
    // position: fixed;
    width: 21.34em;
    border-radius: .5em;
    z-index: 99;
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    margin: 0 10px 0 15px;

    color: #000;
    font-size: 1.125em;
    div {
      // position: fixed;
      height: 2.5em;
      line-height: 2.5em;
      // padding: .5em 3.3em;
      // flex-grow: 1;
      // border-bottom: 4px solid skyblue;
      border-bottom: 4px solid transparent;

      // margin-right: 8px;
      // margin-bottom: 10px;
      margin: 0 0 0 1em;
      padding: .3em 1em;

      color: #999;
      
      cursor: pointer;
    }
    div:nth-of-type(2) {
    }
  }
}

.object-selector {
  width: 90%;
  
  margin: 0 auto 0;
  text-align: left;
  
  // border: 1px solid #000;
}
</style>
