<template>
  <div id="app">
    <div class="row">
      <z-button @click="clickEvent" icon="setting">默认按钮</z-button>
      <z-button :loading="true" type="primary" >主要按钮</z-button>
      <z-button type="success">成功按钮</z-button>
      <z-button type="info">信息按钮</z-button>
      <z-button type="warning">警告按钮</z-button>
      <z-button type="danger">危险按钮</z-button>
    </div>
    <div class="row">
      <z-button plain>默认按钮</z-button>
      <z-button plain type="primary">主要按钮</z-button>
      <z-button plain type="success">成功按钮</z-button>
      <z-button plain type="info">信息按钮</z-button>
      <z-button plain type="warning">警告按钮</z-button>
      <z-button plain type="danger">危险按钮</z-button>
    </div>
    <div class="row">
      <z-button plain round>默认按钮</z-button>
      <z-button plain round type="primary">主要按钮</z-button>
      <z-button plain round type="success">成功按钮</z-button>
      <z-button plain round type="info">信息按钮</z-button>
      <z-button plain round type="warning">警告按钮</z-button>
      <z-button plain round type="danger">危险按钮</z-button>
    </div>
    <div class="row">
      <z-button>默认按钮</z-button>
      <z-button disabled type="primary">主要按钮</z-button>
      <z-button disabled type="success">成功按钮</z-button>
      <z-button disabled type="info">信息按钮</z-button>
      <z-button disabled type="warning">警告按钮</z-button>
      <z-button disabled type="danger">危险按钮</z-button>
    </div>
    <div class="row">
      <z-icon name="loading" />
    </div>
  </div>
</template>

<script>
import Button from './components/Button/button.vue'
import Icon from './components/icon.vue'
export default {
  name: 'App',
  components: {
    'z-button': Button,
    'z-icon':Icon
  },
  methods:{
    clickEvent(e){
      console.log(e)
    }
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
  .z-button {
    margin-right: 10px;
  }
}
</style>
