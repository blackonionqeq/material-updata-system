<template>
  <div class="search-bar-container">
    <div class="search-icon-container">
      <img class="search-icon__img" srcset="@/../static/imgs/public/搜索.png 1x" @click="emitKeyword()"/>
    </div>
    <input :id="input_bar_ID" class="search-bar__input" @keyup="emitKeyword()" type="text">
  </div>
</template>

<script>
export default {
  props: {
    input_bar_ID: String
  },
  data() {
    return {
      // input_bar_ID: ''
    }
  },
  methods: {
    emitKeyword() {
      let keyword = document.getElementById(`${this.input_bar_ID}`).value
      this.$emit('getKeyword', keyword)
    }
  }
}
</script>


<style lang="scss" scoped>
  .search-bar-container {
    // width: 90%;
    margin: 1em 0;
    .search-icon-container {
      position: relative;
      .search-icon__img {
        position: absolute;
        right: 1em;
        margin: .5em 0;
      }
    }
    .search-bar__input {
      outline: none;
      padding-left: 1em;
      // margin-right: 1em;
      width: 97%;
      height: 2.5em;
      border-radius: 1em;
      border: 0;
      background-color: #f5f5f5;
    }
  }
</style>

