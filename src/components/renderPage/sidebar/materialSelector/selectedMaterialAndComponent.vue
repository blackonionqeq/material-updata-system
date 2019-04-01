<template>
  <div class="selected-materials-list-container">
    <!-- <div class="title-bar" @click="openList()">
      <div>{{ material.componentName }}</div>
      <span></span>
      <img style="height: 9px;" :src="arrowOrient">
    </div> -->
    <!-- <div class="materials-content" :class="{ hidden: openFlag === 0 }"> -->
    <div class="selected-materials-content">
      <div v-for="(eachMaterial, index) of selectedMaterials" :key="index">
        <div class="tipIcon" style="position: relative;">
          <img style="position: absolute; right: .5em; top: 1.25em;" src="@/../static/imgs/icons/icon_13.png">
        </div>
        <img :src='eachMaterial.materialImg' :alt="eachMaterial.materialImg">
        <div class="selected-component-info">{{ eachMaterial.componentName }}</div>
        <div class="selected-material-info">{{ eachMaterial.materialNumber }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedMaterials: Array,
  },
}
</script>

<style lang="scss" scoped>
.selected-materials-content {
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-right: .8em;
    margin-bottom: .8em;

    // cursor: pointer;
  }
  > div > img {
    margin-top: .8em;
    width: 100px;
    height: 100px;
  }
  .selected-material-info, .selected-component-info {
    text-align: center;
    height: 1.5em;
    width: 100px;

    font-size: .8em;
    color: #999;

    overflow: hidden;
  }
}
</style>
