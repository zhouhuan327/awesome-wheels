<template>
  <div class="z-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-col',
  data(){
    return {
      gutter:0
    }
  },
  props:{
      span:[Number,String],
      offset:[Number,String]
  },
  computed:{
    colClass(){
      let {span,offset} = this
      return [
        span && `z-col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    colStyle(){
      return {
        paddingLeft:this.gutter/2+'px',
        paddingRight:this.gutter/2+'px'
      }
    }
  }
 }
</script>

<style lang="scss" scoped>
  .z-col{
    min-height: 40px;
    width: 50%;
    border: 1px solid $menuText;
    //生成z-col-1到z-col-24
    $prefix: z-col-;
    @for $n  from 1 through 24{
        &.#{$prefix}#{$n} {
            width:($n / 24) * 100%;
        }
    }
    //生成offset-1到offset-24
    $prefix:offset-;
    @for $n  from 1 through 24{
        &.#{$prefix}#{$n} {
            margin-left:($n / 24) * 100%;
        }
    }
  }
  

</style>