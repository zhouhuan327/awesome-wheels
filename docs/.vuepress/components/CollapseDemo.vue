<template>
    <div class="container">
        <z-collapse v-model="activeName">
            <z-collapse-item name="1" title="这是第一个面板">
                <p>第1️⃣个面板的内容</p>
            </z-collapse-item>
            <z-collapse-item name="2" title="这是第二个面板">
                <p>第2️⃣个面板的内容</p><p>第2️⃣个面板的内容</p>
            </z-collapse-item>
            <z-collapse-item name="3" title="这是第三个面板">
                <p>第3️⃣个面板的内容</p><p>第3️⃣个面板的内容</p><p>第3️⃣个面板的内容</p>
            </z-collapse-item>
            <z-collapse-item name="4" title="这是第四个面板">
                <p>第4️⃣个面板的内容</p><p>第4️⃣个面板的内容</p><p>第4️⃣个面板的内容</p><p>第4️⃣个面板的内容</p>
            </z-collapse-item>
        </z-collapse>
        <p>activeName:{{activeName}}</p>
    </div>
</template>

<script>
   import Collapse from '../../../src/components/Collapse/z-collapse'
   import CollapseItem from '../../../src/components/Collapse/z-collapse-item'
    export default {
        name: "CollapseDemo.vue",
        data(){
            return {
                activeName: ['1']
            }
        },
        components:{
            'z-collapse':Collapse,
            'z-collapse-item':CollapseItem
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin: 20px 0;
    }
</style>