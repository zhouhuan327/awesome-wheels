<template>
    <transition tag="div"  name="slide" mode="out-in" >
        <div class="z-tab-panel" v-if="active" ref="panel">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "z-tab-panel",
        props:{
            label:{
                type:String,
                required: true
            },
            name:{
                type:String,
                required:true
            }
        },
        data () {
            return {
                active: false,
                height:'height:0px'
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name) => {

                this.active = name === this.name
            })
        }
    }
</script>

<style lang="scss" scoped>
    .z-tab-panel{
        position: absolute;
        padding: 14px 1em;
    }
    .wrapper{
        position: relative;
    }
    .slide-enter{
        transform: translateX(100%);
    }
    .slide-leave-to{
        transform: translateX(-50%);
    }
    .slide-leave-active{
        transition: all 0.2s ease-in-out ;
        opacity: 0.1;
    }
    .slide-enter-active,{
        transition: all 0.3s ease-in-out ;
        opacity: 0.2;
    }
</style>