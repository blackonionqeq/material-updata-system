<template>
  <div class="model-info-container" @click.stop="">
    <div class="model-param" v-if="modelInfo">
      <div class="property-name">StyleNumber:</div>
      <div class="attribute">
        {{ modelInfo.modelNumber }}
        <img style="position:relative; top: .3em; left: .5em; cursor: pointer;" srcset="@/../static/imgs/public/修改2.png 1x" @click="modifyTagName()">
      </div>
      <div class="property-name">Collection:</div>
      <div class="attribute">{{ modelInfo.series }}</div>
      <div class="property-name">Last:</div>
      <div class="attribute">{{ modelInfo.lastNumber }}</div>
      <div class="property-name">Sole:</div>
      <div class="attribute">{{ modelInfo.soleNumber }}</div>
      <div class="property-name">UpdateTime:</div>
      <div class="attribute">{{ modelInfo.uploadTime.substring(0, 10) }}</div>
      <div class="property-name">LastModeified:</div>
      <div class="attribute">{{ modelInfo.lastTime.substring(0, 10) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelInfo: Object
  },
  methods: {
    modifyTagName() {
      alert('This function hasn\'t been activated yet.')
    }
  },
  mounted() {
    console.log(this.modelInfo)
  }
}
</script>

<style lang="scss" scoped>
  .model-info-container {
    width: 26em;
    height: 16em;
    background-color: #fff;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid #444;
    border-radius: .375em;
    .model-param {
      display: grid;
      grid-template:  repeat(6, 2em) / 8em 15em;
      justify-items: flex-start;
      .property-name {
        justify-self: right;
        color: #333;
        align-self: center;
      }
      .attribute {
        font-size: .875em;
        margin-left: 1.5em;
        text-align: left;
        color: #999;
        align-self: center;
        line-height: 2em;
      }
    }
  }
</style>
