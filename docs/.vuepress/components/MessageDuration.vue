<template>
    <div class="container">
        <z-button plain @click="open1">1s后消失</z-button>
        <z-button plain @click="open2">5s后消失</z-button>
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
                    message:'1s后消失',
                    type:'success',
                    duration:1
                })
            },
            open2(){
                this.$message({
                    message:'5s后消示',
                    duration:5

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