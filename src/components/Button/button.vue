<template>
  <button
    class="zh-button"
    :class="[
      `zh-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-disabled': disabled }
    ]"
    :disabled="disabled"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
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
    }
  },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
@mixin btn-color($color, $bgcolor, $bdcolor) {
  color: $color;
  background-color: $bgcolor;
  border-color: $bdcolor;
}
.zh-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 10px 18px;
  font-size: 14px;
  border-radius: 4px;
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
}
.zh-button.is-round {
  border-radius: 18px;
}
.zh-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
}
.zh-button--primary {
  @include btn-color(#fff, $light-blue, $light-blue);
  &:hover,
  &:focus {
    @include btn-color(#fff, $light-blue-hover, $light-blue-hover);
  }
}
.zh-button--primary.is-plain {
  @include btn-color(#409eff, #ecf5ff, #b3d8ff);
  &:hover,
  &:focus {
    @include btn-color(#fff, $light-blue, $light-blue);
  }
}

.zh-button--success {
  @include btn-color(#fff, #67c23a, #67c23a);
  &:hover,
  &:focus {
    @include btn-color(#fff, #85ce61, #85ce61);
  }
}
.zh-button--success.is-plain {
  @include btn-color(#67c23a, #f0f9eb, #c2e7b0);
  &:hover,
  &:focus {
    @include btn-color(#fff, #67c23a, #67c23a);
  }
}
.zh-button--info {
  @include btn-color(#fff, #909399, #909399);
  &:hover,
  &:focus {
    @include btn-color(#fff, #a6a9ad, #a6a9ad);
  }
}
.zh-button--info.is-plain {
  @include btn-color(#909399, #f4f4f5, #f4f4f5);
  &:hover,
  &:focus {
    @include btn-color(#fff, #a6a9ad, #a6a9ad);
  }
}

.zh-button--warning {
  @include btn-color(#fff, #e6a23c, #e6a23c);
  &:hover,
  &:focus {
    @include btn-color(#fff, #ebb563, #ebb563);
  }
}
.zh-button--warning.is-plain {
  @include btn-color(#e6a23c, #fdf6ec, #f5dab1);
  &:hover,
  &:focus {
    @include btn-color(#fff, #ebb563, #ebb563);
  }
}
.zh-button--danger {
  @include btn-color(#fff, #f56c6c, #f56c6c);
  &:hover,
  &:focus {
    @include btn-color(#fff, #f78989, #f78989);
  }
}
.zh-button--danger.is-plain {
  @include btn-color(#f56c6c, #fef0f0, #fbc4c4);
  &:hover,
  &:focus {
    @include btn-color(#fff, #f56c6c, #f78989);
  }
}
</style>
