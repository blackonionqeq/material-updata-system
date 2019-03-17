<template>
  <div class="materials-list-container">
    <!-- <div class="title-bar" @click="openList()">
      <div>{{ material.componentName }}</div>
      <span></span>
      <img style="height: 9px;" :src="arrowOrient">
    </div> -->
    <!-- <div class="materials-content" :class="{ hidden: openFlag === 0 }"> -->
    <div class="materials-content">
      <div v-for="(materialInfo, index) of material.Mlist" :key="index" @click="changeFur(materialInfo, material.componentName)">
        <div class="tipIcon" style="position: relative;" @click.stop="sendShowFlag(materialInfo)">
          <img style="position: absolute; right: 0; top: 20px;" src="@/../static/imgs/icons/icon_13.png">
        </div>
        <img :src='materialInfo.imgUrl' :alt="materialInfo.imgUrl">
        <div class="material-info">{{ materialInfo.furName }}</div>
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
    openList() {
      if(this.openFlag === 0) 
        this.openFlag = 1
      else 
        this.openFlag = 0
    },
    changeFur(...materialInfo) {
      // console.log({
      //   componentName: materialInfo[1],
      //   furID: materialInfo[0].furID
      // })
      let componentName = materialInfo[1]
      let furID = materialInfo[0].furID
      this.$store.dispatch('fillOutTargetMaterial', {componentName, furID})

      // Push the operation of change fur(include the information of fur and component)
      let type = 'fur'
      this.$store.dispatch('pushOperation', {componentName, furID, type})
    },
    sendShowFlag(material) {
      let furID = material.furID
      let furImg = material.furImg
      this.$store.dispatch('setMaterialInfo', {furID, furImg})
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

  > div {
    margin-right: .8em;
    margin-bottom: .8em;

    cursor: pointer;
  }
  > div > img {
    margin-top: .8em;
    width: 100px;
    height: 100px;
  }
  .material-info {
    height: 2.5em;
    width: 100px;

    font-size: .8em;
    color: #999;

    overflow: hidden;
  }
}
.hidden {
  display: none;
}
</style>
