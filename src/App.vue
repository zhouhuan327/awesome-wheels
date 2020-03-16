<template>
  <div id="app">
    <div class="row">
      <zh-button>默认按钮</zh-button>
      <zh-button type="primary">主要按钮</zh-button>
      <zh-button type="success">成功按钮</zh-button>
      <zh-button type="info">信息按钮</zh-button>
      <zh-button type="warning">警告按钮</zh-button>
      <zh-button type="danger">危险按钮</zh-button>
    </div>
    <div class="row">
      <zh-button plain>默认按钮</zh-button>
      <zh-button plain type="primary">主要按钮</zh-button>
      <zh-button plain type="success">成功按钮</zh-button>
      <zh-button plain type="info">信息按钮</zh-button>
      <zh-button plain type="warning">警告按钮</zh-button>
      <zh-button plain type="danger">危险按钮</zh-button>
    </div>
    <div class="row">
      <zh-button plain round>默认按钮</zh-button>
      <zh-button plain round type="primary">主要按钮</zh-button>
      <zh-button plain round type="success">成功按钮</zh-button>
      <zh-button plain round type="info">信息按钮</zh-button>
      <zh-button plain round type="warning">警告按钮</zh-button>
      <zh-button plain round type="danger">危险按钮</zh-button>
    </div>
    <div class="row">
      <zh-button>默认按钮</zh-button>
      <zh-button disabled type="primary">主要按钮</zh-button>
      <zh-button disabled type="success">成功按钮</zh-button>
      <zh-button disabled type="info">信息按钮</zh-button>
      <zh-button disabled type="warning">警告按钮</zh-button>
      <zh-button disabled type="danger">危险按钮</zh-button>
    </div>
  </div>
</template>

<script>
import Button from './components/Button/button.vue'
export default {
  name: 'App',
  components: {
    'zh-button': Button
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.row {
  margin-bottom: 20px;
  .zh-button {
    margin-right: 10px;
  }
}
</style>
