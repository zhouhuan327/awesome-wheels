<template>
    <div class="z-tab-item" :class="itemClass" @click="onClick" >
        {{label}}
    </div>
</template>

<script>
    export default {
        name: "z-tab-item",
        props:{
            label:String,
            name:String
        },
        data () {
            return {
                active: false
            }
        },
        inject:['eventBus','selectedName','type'],
        mounted() {
            this.eventBus.$on('update:selected',(name,vm) => {
                this.active = name === this.name
            })
            if(this.selectedName === this.name){
                this.eventBus.$emit('update:selected', this.name, this)
            }

        },
        methods:{
            onClick(){
                this.eventBus.$emit('update:selected', this.name, this)
            }
        },
        computed:{
            itemClass(){
                return {
                    'active':this.active,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $tab-active-color:#1890ff;
    .z-tab-item{
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        transition: all 0.4s ease;
        &:hover{
            color: $tab-active-color;
        }
        &.active{
            color: $tab-active-color;
            font-weight: 500;
        }

    }
</style>