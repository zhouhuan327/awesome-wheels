<template>
  <div class="z-button-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'button-group',
    mounted(){
        for(let node of this.$el.children){
            const name = node.nodeName.toLowerCase()
            if(name!== 'button'){
                console.warn(`z-button-group's child should be z-button,but it contains ${name}`)
            }
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