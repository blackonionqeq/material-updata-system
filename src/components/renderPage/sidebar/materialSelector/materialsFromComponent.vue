<template>
  <div class="materials-list-container">
    <!-- <div class="title-bar" @click="openList()">
      <div>{{ material.componentName }}</div>
      <span></span>
      <img style="height: 9px;" :src="arrowOrient">
    </div> -->
    <!-- <div class="materials-content" :class="{ hidden: openFlag === 0 }"> -->
    <div class="materials-content">
      <div v-for="(eachMaterial, index) of material" :key="index" @click="changeFur(eachMaterial)">
        <div class="tipIcon" style="position: relative;" @click.stop="sendShowFlag(eachMaterial)">
          <img style="position: absolute; right: .5em; top: 1.25em;" src="@/../static/imgs/icons/icon_13.png">
        </div>
        <div class="price-tip-container">
          <div class="price-tip">${{ eachMaterial.price || 'UNDEFINED' }} </div>
        </div>
        <img :src='eachMaterial.curtailImg' :alt="eachMaterial.curtailImg">
        <div class="material-info">{{ eachMaterial.materialNumber }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['material'],
  data() {
    return {
      openFlag: 0,
    }
  },
  methods: {
    changeFur(materialInfo) {
      // console.log(materialInfo.renderArguments)
      this.$store.dispatch('GetMaterialInfo', materialInfo)
      this.$store.dispatch('reset_historyOperation')
      // let componentName = materialInfo[1]
      // let furID = materialInfo[0].furID
      // this.$store.dispatch('fillOutTargetMaterial', {componentName, furID})

      // // Push the operation of change fur(include the information of fur and component)
      // let type = 'fur'
      // this.$store.dispatch('pushOperation', {componentName, furID, type})
    },
    sendShowFlag(materialInfo) {
      console.log(materialInfo)
      // let furID = material.furID
      // let furImg = material.furImg
      this.$store.dispatch('setMaterialInfo', materialInfo)
      this.$store.dispatch('setShowFlag', 3 )
    }
  },
  computed: {
    arrowOrient() {
      if(this.openFlag === 0)
        return '@/../static/imgs/icons/icon_19.png'
      else 
        return '@/../static/imgs/icons/icon_20.png'
    },
    ...mapActions([
      'fillOutTargetMaterial'
    ])
  }
}
</script>

<style lang="scss" scoped>
.title-bar {
  display: flex;
  align-items: center;

  height: 2.2em;
  // width: 80%;

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
.materials-content {
  display: flex;
  flex-wrap: wrap;
  .price-tip-container {
    position: relative;
    .price-tip {
      position: absolute;
      right: 1em;
      top: 13em;
      font-size: .75em;
      color: #999;
    }
  }

  > div {
    margin-right: .8em;
    margin-bottom: .8em;

    cursor: pointer;
  }
  > div > img {
    margin-top: .8em;
    width: 11em;
    height: 11em;
  }
  .material-info {
    text-align: center;
    height: 2.5em;

    font-size: .8em;
    color: #999;

    overflow: hidden;
  }
}
.hidden {
  display: none;
}
</style>
