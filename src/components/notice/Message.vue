<template>
    <div class="z-message z-message--danger">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $box-height:40px;
    @mixin message-color($color, $bgcolor, $bdcolor) {
        color: $color;
        background-color: $bgcolor;
        border-color: $bdcolor;
    }
.z-message{
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: $box-height;
    border: 1px solid #ebeef5;
    font-size: $font-size;
    border-radius: 4px;
    line-height: 1.8px;
    padding: 5px 16px;
    @include message-color(gray,#edf2fc,#edf2fc);
}
    .z-message.z-message--success{
        @include message-color(#67c23a, #f0f9eb, #e1f3d8)
    }
    .z-message.z-message--warning{
        @include message-color(#e6a23c, #fdf6ec, #fdf6ec)
    }
    .z-message.z-message--danger{
        @include message-color(#f56c6c,#fef0f0,#fef0f0)
    }
</style>