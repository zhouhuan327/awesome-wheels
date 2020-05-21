<template>
  <div class="z-row" :style="rowStyle">
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
 },
 computed:{
   rowStyle(){
     return {
       marginLeft:-this.gutter/2+'px',
       marginRight:-this.gutter/2+'px'
     }
   }
 }
 }
</script>

<style lang="scss" scoped>
  .z-row{
      display: flex;
  }
</style>