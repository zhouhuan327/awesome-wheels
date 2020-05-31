<template>
   <div class="container">
       <z-row :gutter="20">
           <z-col :span="10"><div class="grid-content bg1"></div></z-col>
           <z-col :span="10"><div class="grid-content bg2"></div></z-col>
       </z-row>
       <z-row :gutter="24">
           <z-col :span="6"><div class="grid-content bg1"></div></z-col>
           <z-col :span="6"><div class="grid-content bg2"></div></z-col>
           <z-col :span="6"><div class="grid-content bg3"></div></z-col>
       </z-row>
   </div>
</template>

<script>
    import Row from '../../../src/components/grid/Row'
    import Col from '../../../src/components/grid/Col'
    export default {
        name: "layoutDemo",
        components:{
            'z-row':Row,
            'z-col':Col
        }
    }
</script>

<style lang="scss" scoped>
    $bg1:#66b1ffbf;
    $bg2:#66b1ff8c;
    $bg3: rgba(102, 177, 255, 0.35);
    $bg4:rgba(102, 177, 255, 0.2);
.container{
    .grid-content{
        border-radius:8px;
        min-height:35px;
        &.bg1{
            background: $bg1;
        }
        &.bg2{
            background: $bg2;
        }
        &.bg3{
            background: $bg3;
        }
        &.bg4{
            background: $bg4;
        }
    }
}
</style>