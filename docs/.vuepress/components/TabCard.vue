<template>
    <div class="container">
        <z-tab type="card" v-model="selectedName">
            <z-tab-panel label="Tab1" name="first">内容1</z-tab-panel>
            <z-tab-panel label="Tab2" name="second">内容2</z-tab-panel>
            <z-tab-panel label="Tab3" name="third">内容3</z-tab-panel>
        </z-tab>
        <p>selectedName:{{selectedName}}</p>
    </div>
</template>

<script>
    import Tab from '../../../src/components/Tab/tab'
    import TabPanel from '../../../src/components/Tab/tab-panel'
    export default {
        name: "TabDemo.vue",
        data(){
            return {
                selectedName:'first'
            }
        },
        components:{
            'z-tab':Tab,
            'z-tab-panel':TabPanel
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin: 20px 0;
    }
</style>