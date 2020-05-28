<template>
    <div class="z-popover" @click="onClickTrigger">
        <!--        触发的元素-->
        <span ref="trigger">
            <slot></slot>
        </span>
        <!--        弹出的内容-->
        <div ref="content" v-if="isVisible" class="z-popover-content">
            <slot name="content"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "z-popover",
        data(){
            return {
                isVisible:false
            }
        },
        mounted() {

        },
        methods:{
            movePostion(){
                const {content} = this.$refs;
                document.body.appendChild(content)
                const {top,left} = this.$refs.trigger.getBoundingClientRect()
                const {width,height} = getComputedStyle(content)
                this.$refs.content.style.left = left + 'px'
                this.$refs.content.style.top = (top - parseInt(height)/2)   + 'px'
            },
            onClickDocument(e){
                const {content,trigger} = this.$refs;
                if(content){
                    if(!content.contains(e.target) && !trigger.contains(e.target)){
                        //当点击的内容不是触发按钮或者弹出框时候触发
                        this.isVisible = false;
                    }
                }

            },
            open(){
                this.isVisible = true
                this.$nextTick(()=>{
                    this.movePostion()
                    document.addEventListener('click',this.onClickDocument)
                })
            },
            close(){
                this.isVisible = false;
                document.removeEventListener('click',this.onClickDocument)
            },
            onClickTrigger(e){
                if(this.$refs.trigger.contains(e.target)){
                    if(this.isVisible === false){
                        this.open()
                    }else{
                        this.close()
                    }
                }
            }


        }
    }
</script>

<style scoped lang="scss">
    .z-popover{
        display: inline-block;
        position: relative;
    }
    .z-popover-content{
        display: inline-block;
        position: absolute;
        min-width: 150px;
        min-height: 30px;
        text-align: center;
        left: 0;
        bottom: 100%;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
        padding:10px 5px;
        transform: translateY(-100%);
    }

</style>