<template>
  <svg v-if="name" class="z-icon"><use :xlink:href="`#icon-${name}`"></use></svg>
</template>

<script>
export default {
  name: 'z-icon',
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
    margin:0 2px;
}

</style>