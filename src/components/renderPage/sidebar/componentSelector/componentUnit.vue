<template>
  <div class="component-list-container">
    <!-- <div class="title-bar" @click="openList()">
      <div>{{ material.componentName }}</div>
      <span></span>
      <img style="height: 9px;" :src="arrowOrient">
    </div> -->
    <!-- <div class="materials-content" :class="{ hidden: openFlag === 0 }"> -->
    <div v-for="(changeableComponent, index) of components" :key="index" @click="toggle(index)">
      <!-- <div class="tipIcon" style="position: relative;" @click.stop="sendShowFlag(materialInfo)">
        <img style="position: absolute; right: 0; top: 20px;" src="@/../static/imgs/icons/icon_13.png">
      </div> -->
      <div class="sub-title-bar">
        <!-- Component Name -->
        <div class="component-info">{{ changeableComponent.name }}</div>
        <span></span>
        <img style="height: .4em;" :src="judgeDirection(componentListFlag[index])">
      </div>
      <transition name="fade">
        <div class="component-list-sub-container" v-if="componentListFlag[index]">
          <div v-for="(profile, index) of changeableComponent.foreProfiles" :key="index" @click.stop="sendComponentInfo(profile)">
            <img :src='profile.curtailImg' :alt="profile.curtailImg">
            <div class="component-info">{{ profile.layer + profile.profile }}</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: ['components'],
  data() {
    return {
      len: null,
      componentListFlag: [],
    }
  },
  methods: {
    changeComponent() {
      console.log('changeComponent')
    },
    toggle(num) {
      // this.componentListFlag[num] = !this.componentListFlag[num]
      Vue.set(this.componentListFlag, num, !this.componentListFlag[num])
      // console.log(this.componentListFlag)
    },
    
    judgeDirection(trueness) {
      let root = '@/../static/imgs/renderPage/'
      return trueness?`${root}icon_20.png`:`${root}icon_19.png`
    },
    sendComponentInfo(componentInfo) {
      console.log(componentInfo)
      this.$store.dispatch('GetComponentsInfo', componentInfo)
      this.$store.dispatch('reset_historyOperation')
    },
  },
  computed: {
  },
  mounted() {
    console.log(this.components)
    this.len = this.components.length
    let tmp = []
    for(let i = 0; i < this.len; i++) {
      tmp.push(false)
    }
    this.componentListFlag = tmp
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
.component-list-sub-container {
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
  .component-info {
    height: 2.2em;
    line-height: 2.2em;
    width: 100px;

    font-size: .875em;
    color: #666;
    text-align: center;

    overflow: hidden;
  }
}
</style>

