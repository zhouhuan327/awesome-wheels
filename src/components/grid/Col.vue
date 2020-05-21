<template>
  <div class="z-col" :class="[`z-col-${span}`]">

  </div>
</template>

<script>
export default {
  name: 'z-col',
  props:{
      span:[Number,String]
  }
 }
</script>

<style lang="scss" scoped>
  .z-col{
    min-height: 40px;
    width: 50%;
    border: 1px solid $menuText;
    $prefix: z-col-;
    @for $n  from 1 through 24{
        &.#{$prefix}#{$n} {
            width:($n / 24) * 100%;
        }
    }
  }
  

</style>