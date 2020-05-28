<template>
  <svg v-if="name" class="z-icon"><use :xlink:href="`#icon-${name}`"></use></svg>
</template>

<script>
  import '../assets/icon/iconfont'
export default {
  name: 'Icon',
  props:['name'],
  data() { 
    return {

    }
  }
 }
</script>

<style lang="scss" scoped>
  .z-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

</style>