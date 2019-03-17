<template>
  <div class="banner">
    <div class="logo-container">
      <img
        srcset="
          ../../../static/imgs/modelsPage/logo@2x.png 1x,
        "
        src="../../../static/imgs/public/top_logo.png">
    </div>
    <div class="space"></div>
    <div class="notice-container">
      <img 
        srcset="
          ../../../static/imgs/modelsPage/消息@2x.png 1x,
        "
      src="../../../static/imgs/public/top_icon_notice.png">
    </div>
    <div class="user-info-container">
      <div class="user-grahp-container"></div>
      <div class="user-info-content">
        <div class="username">AAAAA</div>
        <div class="user-type">Designer</div>
      </div>
      <div class="arrow-container">
        <img 
          srcset="
            ../../../static/imgs/modelsPage/下拉-圆@2x.png 1x,
          "
        src="../../../static/imgs/public/top_icon_up.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
// img {
//   width: 200%;
//   height: 200%;
// }
.banner {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  height: 4em;

  background-color: #fff;

  .logo-container {
    margin-left: 3em;
    line-height: 5.6em;
  }

  .space {
    flex-grow: 1;
  }

  .notice-container {
    line-height: 5em;
    width: 4em;
    border-left: 2px solid #f6f7fa;
  }

  .user-info-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    border-left: 2px solid #f6f7fa;
    .user-grahp-container {
      margin-left: 2em;

      width: 3em;
      height: 3em;

      background-color: skyblue;

      border-radius: 50%;
    }
    .user-info-content {
      display: flex;
      flex-flow: column nowrap;
      div {
        margin-left: .7em;
        text-align: left;
      }
      .user-type {
        color: #888;
        font-size: .85em;
      }
    }
    .arrow-container {
      margin-left: 2em;
      margin-right: 2em;
      cursor: pointer;
    }
  }
}
</style>
