<template>
    <div class="container">
        <z-button plain @click="open">
            html
        </z-button>
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
                this.$message({
                    message:'<p style="color:red">这是一段html片段</p>',
                    useHtmlString:true
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