<template>
    <div class="container">
        <z-button plain @click="open">弹出消息提示</z-button>
        <z-button plain @click="open1">成功</z-button>
        <z-button plain @click="open2">警告</z-button>
        <z-button plain @click="open3">错误</z-button>
    </div>
</template>

<script>
    import NoticePlugin from '../../../src/components/notice/NoticePlugin'
    import Button from '../../../src/components/Button/button'
    import Vue from 'vue'
    Vue.use(NoticePlugin)
    export default {
        name: "Message",
        components:{
            'z-button':Button,
        },
        methods:{
            open(){
                this.$message('这是一条消息提示')
            },
            open1(){
                this.$message({
                    message:'这是一条成功提示',
                    type:'success'
                })
            },
            open2(){
                this.$message({
                    message:'这是一条警告提示',
                    type:'warning'
                })
            },
            open3(){
                this.$message({
                    message:'这是一条错误提示',
                    type:'danger'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        padding: 20px 0;
        .z-button{
            margin-right: 5px;
        }

    }
</style>