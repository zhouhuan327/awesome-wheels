<template>
  <div class="z-button-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'button-group',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="scss" scoped>
  .z-button-group{
      display: inline-flex;
      > .z-button{
          border-radius: 0;
          margin-left: -1px;
          &:first-child{
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }
          &:last-child{
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
          &:hover{
              position: relative;
              z-index: 1;
          }
      }
  }
</style>