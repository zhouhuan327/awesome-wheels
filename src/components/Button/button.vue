<template>
  <button
    class="z-button"
    :class="buttonClass"
    :disabled="disabled"
    @click="clickEvent"
  >
    <icon v-if="icon && !loading" :name="icon"/>
    <icon class="loading" v-if="loading" name="loading"/>
    <slot></slot>
  </button>
</template>

<script>
import Icon from '../icon.vue'
export default {
  name: 'Button',
  components:{
    'icon':Icon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon:{
      type:String,
      default:''
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    clickEvent(e){
      this.$emit('click',e)
    }
  },
  computed:{
    buttonClass(){
      let {type,plain,round,disabled} = this
      return [
      `z-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-disabled': disabled }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin btn-color($color, $bgcolor, $bdcolor) {
  color: $color;
  background-color: $bgcolor;
  border-color: $bdcolor;
}
@keyframes spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
.z-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -webkit-appearance: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  transition: all 0.1s ease-in-out;
  &:hover,
  &:focus {
    @include btn-color($light-blue, #ecf5ff, #c6e2ff);
  }
  &:active {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    transform: scale(0.95);
  }
  .loading{
    animation:spin 1.5s infinite linear;
  }
  
}
.z-button.is-round {
  border-radius: 18px;
}
.z-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
}
.z-button--primary {
  @include btn-color(#fff, $light-blue, $light-blue);
  &:hover,
  &:focus {
    @include btn-color(#fff, $light-blue-hover, $light-blue-hover);
  }
}
.z-button--primary.is-plain {
  @include btn-color(#409eff, #ecf5ff, #b3d8ff);
  &:hover,
  &:focus {
    @include btn-color(#fff, $light-blue, $light-blue);
  }
}

.z-button--success {
  @include btn-color(#fff, #67c23a, #67c23a);
  &:hover,
  &:focus {
    @include btn-color(#fff, #85ce61, #85ce61);
  }
}
.z-button--success.is-plain {
  @include btn-color(#67c23a, #f0f9eb, #c2e7b0);
  &:hover,
  &:focus {
    @include btn-color(#fff, #67c23a, #67c23a);
  }
}
.z-button--info {
  @include btn-color(#fff, #909399, #909399);
  &:hover,
  &:focus {
    @include btn-color(#fff, #a6a9ad, #a6a9ad);
  }
}
.z-button--info.is-plain {
  @include btn-color(#909399, #f4f4f5, #f4f4f5);
  &:hover,
  &:focus {
    @include btn-color(#fff, #a6a9ad, #a6a9ad);
  }
}

.z-button--warning {
  @include btn-color(#fff, #e6a23c, #e6a23c);
  &:hover,
  &:focus {
    @include btn-color(#fff, #ebb563, #ebb563);
  }
}
.z-button--warning.is-plain {
  @include btn-color(#e6a23c, #fdf6ec, #f5dab1);
  &:hover,
  &:focus {
    @include btn-color(#fff, #ebb563, #ebb563);
  }
}
.z-button--danger {
  @include btn-color(#fff, #f56c6c, #f56c6c);
  &:hover,
  &:focus {
    @include btn-color(#fff, #f78989, #f78989);
  }
}
.z-button--danger.is-plain {
  @include btn-color(#f56c6c, #fef0f0, #fbc4c4);
  &:hover,
  &:focus {
    @include btn-color(#fff, #f56c6c, #f78989);
  }
}
</style>
