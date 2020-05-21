<template>
  <div class="z-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-row',
  props:{
     gutter:[Number,String]
  }
 }
</script>

<style lang="scss" scoped>
  .z-row{
      display: flex;
  }
</style>