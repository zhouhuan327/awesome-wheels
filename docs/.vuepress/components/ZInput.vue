<template>
    <div class="container">
        <div>
            <h2>基础用法</h2>
            <z-input v-model="value" placeholder="基础输入框"></z-input>
        </div>
        <div>
            <h2>禁用状态</h2>
            <p>通过指定disabled来禁用</p>
            <z-input disabled placeholder="禁用状态"></z-input>
        </div>
        <div>
            <h2>带Icon的输入框</h2>
            <z-input prefixIcon="start" placeholder="prefixIcon"></z-input>
            <br>
            <z-input suffixIcon="thumbs-up" placeholder="suffixIcon"></z-input>
        </div>
        <div>
            <h2>error错误提示</h2>
            <z-input error="填错了"  placeholder="error"></z-input>
        </div>
    </div>
</template>

<script>
    import Input from '../../../src/components/input/input'
    export default {
        name: "input-demo",
        data(){
            return{
                value:''
            }
        },
        components:{
            'z-input':Input
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        padding: 20px 0;
        .z-input{
            margin: 10px;
        }
    }
</style>