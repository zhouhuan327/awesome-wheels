<template>
  <div class="z-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-row',
  props:{
     gutter:[Number,String]
  },
  mounted() {
  this.$children.forEach(vm =>{
    vm.gutter = this.gutter
  })
 }
 }
</script>

<style lang="scss" scoped>
  .z-row{
      display: flex;
  }
</style>