<template>
    <div class="z-tab-panel" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "z-tab-panel",
        props:{
            label:String,
            name:String
        },
        data () {
            return {
                active: false
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name,vm) => {
                // console.log(`${item}被选中,panel ${this.label}收到`)
                this.active = name === this.name
            })
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .z-tab-panel{
        padding: 0 1em;
    }
</style>