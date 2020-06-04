<template>
    <div class="z-tab-nav">
        <template v-for="item in panes">
            <z-tab-item
                    :label="item.$options.propsData.label"
                    :name="item.$options.propsData.name"
            ></z-tab-item>
        </template>
    </div>
</template>

<script>
    import tabItem from './tab-item'
    export default {
        name: "tab-nav",
        components:{
          'z-tab-item':tabItem
        },
        props:{
            panes:{
                type:Array
            }
        },
        mounted() {

        },

    }
</script>

<style lang="scss" scoped>
    .z-tab-nav{
        display: flex;
        justify-content: flex-start;
        height: 40px;
    }
</style>