<template>
    <div class="z-popover" @click.stop="trigger">
        <!--        触发的元素-->
        <span ref="trigger">
            <slot></slot>
        </span>
        <!--        弹出的内容-->
        <div ref="content" @click.stop v-if="isVisible" class="z-popover-content">
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
            console.log(this.$refs.trigger)
        },
        methods:{
            trigger(){
                this.isVisible = !this.isVisible
                //点击空白处关闭提示框
                if(this.isVisible === true){
                    this.$nextTick(()=>{
                        const {content} = this.$refs;
                        document.body.appendChild(content)
                        this.movePostion()
                        const handler = () =>{
                            this.isVisible = false;
                            document.removeEventListener('click',handler)
                        }
                        document.addEventListener('click',handler)
                    })
                }
            },
            movePostion(){
                const {top,left} = this.$refs.trigger.getBoundingClientRect()
                this.$refs.content.style.left = left + 'px'
                this.$refs.content.style.top = top + 'px'
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
        text-align: center;
        left: 0;
        bottom: 100%;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
        padding:10px 5px;
        transform: translateY(-200%);
    }

</style>