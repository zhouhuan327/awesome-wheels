<template>
    <div class="z-tab-nav" :class="navClass" ref="nav">
        <template v-for="item in panes">
            <z-tab-item
                    :label="item.$options.propsData.label"
                    :name="item.$options.propsData.name"
            ></z-tab-item>
        </template>
        <div :hidden="type === 'card'" class="z-tab_active-bar" ref="bar"></div>
    </div>
</template>

<script>
    import tabItem from './tab-item'
    export default {
        name: "tab-nav",
        components:{
          'z-tab-item':tabItem
        },
        inject:['eventBus','type'],
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
        },
        computed:{
            navClass(){
                return {
                    'z-tab-card':this.type === 'card'
                }
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
        &::before{
            content:'';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom:1px solid #f0f0f0;
            z-index: 2;
        }
        .z-tab_active-bar{
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid #1890ff;
            transition: all 0.4s ease;
            height: 2px;
            width: 50px;
        }
        &.z-tab-card{
            .z-tab-item{
                border: 1px solid #e4e7ed;
                border-bottom-color: transparent;
                border-radius:2px 2px 0 0;
                background-color: #fafafa;
                z-index: 4;
                &.active{
                    background: #fff;
                    border-bottom-color:#fff
                }
            }
        }
    }
</style>