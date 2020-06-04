<template>
    <div class="z-tab-nav">
        <template v-for="item in panes">
            <z-tab-item :label="item.$options.propsData.label"></z-tab-item>
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
           this.$nextTick(()=>{
               console.log(this.panes);
           })
        },

    }
</script>

<style scoped>

</style>