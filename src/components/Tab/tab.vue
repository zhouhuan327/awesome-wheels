<template>
    <div class="z-tab" :class="tabClass">
        <z-tab-nav :panes="panes"></z-tab-nav>
        <div class="z-tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import tabNav from './tab-nav'
    export default {
        name: "z-tab",
        components: {
            'z-tab-nav': tabNav,
        },
        data() {
            return {
                eventBus: new Vue(),
                panes: [],
            }
        },
        provide() {
            return {
                eventBus: this.eventBus,
                selectedName:this.selectedName,
                type:this.type
            }
        },
        model:{
            prop:'selectedName'
        },
        props: {
            selectedName:{
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            },
            type:{
                type:String,
                default:'normal'
            }
        },
        mounted() {
            if (this.$slots.default) {
                this.$slots.default.forEach( vnode =>{
                    if('z-tab-panel' === vnode.componentOptions.tag){
                        const instance = vnode.componentInstance
                        this.panes.push(instance)
                    }
                })
            }
            this.eventBus.$on('update:selected',name=>{
                this.$emit('input',name)
            })
        },
        computed:{
            tabClass(){
                return {
                    'tab-border':this.type === 'card'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .z-tab{
        &.tab-border{
            display: inline-block;
            border: 1px solid #dcdfe6;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
            width: auto;
        }
    }
</style>