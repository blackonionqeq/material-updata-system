<template>
  <div class="matreial-info-container" @click.stop="">
    <!-- <div style="position: relative;">
      <img style="position: absolute; right: 1em; top: 1em;" srcset="@/../static/imgs/public/close.png 1x">
    </div> -->
    <div class="material-param" v-if="materialInfo">
      <img style="width: 150px; height: 150px; margin: 1em;" :src="materialInfo.curtailImg">
      <div class="material-param-content">
        <div class="property-name">MaterialNumber:</div>
        <div class="attribute">
          {{ materialInfo.materialNumber }}
          <img style="position:relative; top: .3em; left: .5em; cursor: pointer;" srcset="@/../static/imgs/public/修改2.png 1x" @click="modifyTagName()">
        </div>
        <div class="property-name property-tags">Tags:</div>
        <div class="attribute tags-container" style="overflow: auto;">
          <div class="tag" v-for="(tag, index) of materialInfo.tags" :key="index">{{ tag }}</div>
          <div>
            <img class="add-icon" srcset="@/../static/imgs/public/添加.png 1x" @click="addTag()">
          </div>
        </div>
        <div class="property-name">Supplier:</div>
        <div class="attribute">{{ materialInfo.supplier || 'hello world' }}</div>
        <div class="property-name">SupplierID:</div>
        <div class="attribute">{{ materialInfo.supplierID || -1 }}</div>
        <div class="property-name">Price:</div>
        <div class="attribute">
          {{ materialInfo.prices || 'undefined' }}
          <select>
            <option>twd</option>
          </select>
        </div>
        <div class="property-name">MOQ:</div>
        <div class="attribute">{{ materialInfo.MOQ || -1 }}</div>
        <div class="property-name property-size">Size:</div>
        <div class="attribute attribut-size">
          Thickness:&nbsp;&nbsp;&nbsp;&nbsp;{{ materialInfo.thickness || 20 }}&nbsp;&nbsp;&nbsp;&nbsp;
          <select>
            <option>mm</option>
          </select><br>
          Width:&nbsp;&nbsp;&nbsp;&nbsp;{{ materialInfo.width || 30 }}&nbsp;&nbsp;&nbsp;&nbsp;
          <select>
            <option>yd</option>
          </select><br>
          Density:&nbsp;&nbsp;&nbsp;&nbsp;{{ materialInfo.density || 13 }}&nbsp;&nbsp;&nbsp;&nbsp;
          <select>
            <option>cm</option>
          </select>
        </div>
        <div class="property-name">UpdateTime:</div>
        <div class="attribute">{{ materialInfo.uploadTime.substring(0, 10) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: 'aaa aaa aaa aaa aaa aaaa aaa aaa aaa aa'
    }
  },
  props: {
    materialInfo: Object
  },
  methods: {
    modifyTagName() {
      alert('This function hasn\'t been activated yet.')
    },
    addTag() {
      // alert('This function hasn\'t been activated yet.')
      console.log(this.materialInfo.materialID)
      let newKeyWord = prompt('Please input tag name:', '')
      let aObject = {
        materialID: this.materialInfo.materialID,
        tag: newKeyWord
      }
      console.log(aObject)
      if(newKeyWord && newKeyWord != '') {
        this.$store.dispatch('AddTagOnMaterial', aObject).then(res => {
          console.log(res)
          this.materialInfo.tags.push(newKeyWord)
          alert('Add successfully.')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .matreial-info-container {
    width: 56em;
    height: 26em;
    background-color: #fff;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid #444;
    border-radius: .375em;
    .material-param {
      display: flex;
      flex-wrap: nowrap;
      .material-param-content {
        display: grid;
        grid-template: 2em 4em repeat(4, 2em) 6em 2em / 8em 20em;
        justify-items: flex-start;
        // text-align: right;
        .property-name {
          justify-self: right;
          color: #333;
          align-self: center;
        }
        .property-tags, .property-size {
          align-self: start;
        }
        .attribute {
          font-size: .875em;
          margin-left: 1.5em;
          text-align: left;
          color: #999;
          align-self: center;
          line-height: 2em;
          select {
            margin-left: 1em;
          }
          .add-icon {
            position: relative;
            width: 1.8em;
            height: 23px;
            top: .3em;
            margin-left: .3em;
            cursor: pointer;
          }
        }
        .attribute-tags, .attribut-size {
          align-self: start;
        }
        .tags-container {
          align-self: start;
          display: flex;
          flex-flow: row wrap;
          max-height: 4.5em;
          .tag {
            line-height: 1.5em;
            border-radius: .375em;
            border: 1px solid #7ED7FC;
            padding: 0 .2em;
            color: #7ED7FC;
            margin: .3em .3em;
          }
        }
      }
    }
  }
</style>

