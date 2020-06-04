<template>
    <div class="z-tab-nav" ref="nav">
        <template v-for="item in panes">
            <z-tab-item
                    :label="item.$options.propsData.label"
                    :name="item.$options.propsData.name"
            ></z-tab-item>
        </template>
        <div class="z-tab_active-bar" ref="bar"></div>
    </div>
</template>

<script>
    import tabItem from './tab-item'
    export default {
        name: "tab-nav",
        components:{
          'z-tab-item':tabItem
        },
        inject:['eventBus'],
        props:{
            panes:{
                type:Array
            }
        },
        mounted() {
            this.eventBus.$on('update:selected',(name,vm)=>{
                this.scrollToActiveTab(vm)
            })
        },
        methods:{
            scrollToActiveTab(activeTab){
                let {width,left} = activeTab.$el.getBoundingClientRect()
                let {left:navLeft} = this.$refs.nav.getBoundingClientRect();

                this.$refs.bar.style.width = `${width}px`
                this.$refs.bar.style.left = `${ left - navLeft }px`

            }
        }

    }
</script>

<style lang="scss" scoped>
    .z-tab-nav{
        position: relative;
        display: flex;
        justify-content: flex-start;
        height: 40px;
        margin-bottom: 10px;
        .z-tab_active-bar{
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid #1890ff;
            transition: all 0.3s ease;
            height: 2px;
            width: 50px;
        }
    }
</style>