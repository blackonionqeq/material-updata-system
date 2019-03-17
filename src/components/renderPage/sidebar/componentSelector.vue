<template>
  <div class="componentSelector-container">
    <!-- <div v-for="(model, index) of selectInfos.models" :key="index" @click="selectModel(model.modelID)">
      <div class="img-container">
        <img style="width: auto; height: 60px; background-color: skyblue;" :src="model.imgUrl">
      </div>
      <div>{{ model.modelName }}</div>
    </div> -->
    <div class="changeable-component-container">
      <div>
        <img srcset="@/../static/imgs/renderPage/个性定制@2x.png 1x">
        <div class="title">Customized Parts</div>
      </div>
      <div class="changeable-components" v-if="changeableComponentList">
        <div class="changeable-components-item" v-for="(changeableComponent, index) of changeableComponentList" :key="index">
          <div class="changeable-components-item-title">{{ changeableComponent.name }}</div>
          <div class="changeable-components-item-list" v-if="changeableComponent">
            <div class="changeable-components-item-unit" v-for="(eachComponent, index) of changeableComponent.list" :key="index">
              <img :srcset="eachComponent.imgUrl">
              <div>{{ eachComponent.partsName }}</div>
            </div>  <!--unit over. -->
          </div>  <!--list over.-->
        </div>
      </div>
    </div> <!-- changeable-component-container over. -->
    <div class="changeable-models-container">
      <div>
        <!-- <img src="@/../static/imgs/renderPage/皮鞋@2x.png 1x"> -->
        <div class="title">Model List</div>
      </div>
      <div class="changeable-models-item">
        <div class="changeable-models-item-title">Public Models</div>
        <div class="changeable-models-item-list" v-if="showPublicModels">
          <div class="changeable-models-item-unit" v-for="(eachPublicModel, index) of changeablePublicModels" :key="index">
            <img :srcset="eachPublicModel.imgUrl">
            <div>{{ eachPublicModel.modelName}}</div>
          </div>
        </div>
        <div class="changeable-models-item-title">Private Models</div>
        <div class="changeable-models-item-list" v-if="showPrivateModels">
          <div class="changeable-models-item-unit" v-for="(eachPrivateModel, index) of changeablePrivateModels" :key="index">
            <img :srcset="eachPrivateModel.imgUrl">
            <div>{{ eachPrivateModel.modelName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      changeableComponentList: null,
      showPublicModels: false,
      showPrivateModels: false,
    }
  },
  props: ['selectInfos'],
  methods: {
    selectModel(id) {
      // console.log(this.selectInfos.models[id].modelID)
      this.$router.push(`/render?id=${id}`)
      this.$store.dispatch('getModelInfo', id)
      this.$store.dispatch('setModelInfo', id)
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.componentSelector-container {
  display: flex;
  flex-wrap: wrap;
  div {
    color: #000;
    margin: 10px; 
    div {
      margin: auto;
      cursor: pointer;
    }
  }
}
</style>
