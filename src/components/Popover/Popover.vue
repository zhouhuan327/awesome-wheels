<template>
    <div class="z-popover" ref="popover">
        <!--        触发的元素-->
        <span ref="trigger" style="display: inline-block">
            <slot></slot>
        </span>
        <!--        弹出的内容-->
        <div ref="content" v-if="isVisible"
             class="z-popover-content"
             :class="{[`position-${position}`]:true}"
        >
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
        props:{
            position:{
                type:String,
                default:'top',
                validator(value) {
                    return ['top','left','right','bottom'].includes(value)
                }
            },
            trigger:{
                type:String,
                default:'click',
                validator(value) {
                    return ['click','hover'].includes(value)
                }
            }
        },
        mounted() {
            const popover = this.$refs.popover
            if(this.trigger === 'click'){
                popover.addEventListener('click',this.onClickTrigger)
            }else{
                popover.addEventListener('mouseenter',this.openByHover)
                popover.addEventListener('mouseleave',this.closeByHover)
            }
        },
        methods:{
            movePostion(){
                const {content} = this.$refs;
                document.body.appendChild(content)
                const {top,left,width,height} = this.$refs.trigger.getBoundingClientRect()

                switch (this.position) {
                    case "top":
                        content.style.left = left   + 'px'
                        content.style.top = top + 'px'
                        break
                    case "bottom":
                        content.style.left = left  + 'px'
                        content.style.top = top + height + 'px'
                        break
                    case "left":
                        content.style.left = left + 'px'
                        content.style.top = top + 'px'
                        break
                    case "right":
                        content.style.left = left + width + 'px'
                        content.style.top = top + 'px'
                        break

                }

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
            openByClick(){
                this.isVisible = true
                this.$nextTick(()=>{
                    this.movePostion()
                    document.addEventListener('click',this.onClickDocument)
                })
            },
            closeByClick(){
                this.isVisible = false;
                document.removeEventListener('click',this.onClickDocument)
            },
            onClickTrigger(e){
                if(this.$refs.trigger.contains(e.target)){
                    if(this.isVisible === false){
                        this.openByClick()
                    }else{
                        this.closeByClick()
                    }
                }
            },
            openByHover(){
                this.isVisible = true
                this.$nextTick(()=>{
                    this.movePostion()
                })
            },
            closeByHover(){
                this.isVisible = false;
            },


        }
    }
</script>

<style scoped lang="scss">
    $popover-bg-color:#fff;
    .z-popover{
        display: inline-block;
        position: relative;
    }
    .z-popover-content{
        display: inline-block;
        position: absolute;
        min-width: 100px;
        min-height: 30px;
        max-width: 15em;
        word-break: break-all;
        text-align: center;
        box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
        background:$popover-bg-color;
        padding:0.5em 1em;
        &::before{
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            position: absolute;

        }
        &.position-top{
            transform: translateY(-100%);
            margin-top: -12px;
            &::before{
                top: 100%;
                border: 10px solid transparent;
                border-top-color: $popover-bg-color;
            }
        }
        &.position-bottom{
            margin-top: 12px;
            &::before{
                bottom: 100%;
                border: 10px solid transparent;
                border-bottom-color: $popover-bg-color;
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -12px;
            &::before{
                left: 100%;
                border: 10px solid transparent;
                border-left-color: $popover-bg-color;
            }
        }
        &.position-right{
            margin-left: 12px;
            &::before{
                right: 100%;
                border: 10px solid transparent;
                border-right-color: $popover-bg-color;
            }
        }
    }

</style>