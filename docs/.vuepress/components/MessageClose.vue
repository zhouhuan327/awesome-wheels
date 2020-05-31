<template>
    <div class="container">
        <z-button plain @click="open1">带关闭按钮</z-button>
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
            open1(){
                this.$message({
                    message:'可关闭',
                    type:'success',
                    showClose:true
                })
            },
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