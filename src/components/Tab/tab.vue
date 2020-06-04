<template>
    <div class="z-tab">
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
                panes: []
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        props: {
            selectedName: {
                type: String,
                default:'first'
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            if (this.$slots.default) {
                this.$slots.default.forEach( vnode =>{
                    if('z-tab-panel' === vnode.componentOptions.tag){
                        const instance = vnode.componentInstance
                        this.panes.push(instance)
                        if(instance.$options.propsData.name === this.selectedName){
                            this.eventBus.$emit('update:selected', this.selectedName, instance)
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>