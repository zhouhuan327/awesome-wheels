---
title: Tab 标签页
--- 

# Tab 

## 基础用法

基础的、简洁的标签页。


<ClientOnly>
<TabDemo></TabDemo>
</ClientOnly>

```javascript
<template>
<div class="container">
    <z-tab v-model="selectedName">
        <z-tab-panel label="Tab1" name="first">内容1</z-tab-panel>
        <z-tab-panel label="Tab2" name="second">内容2</z-tab-panel>
        <z-tab-panel label="Tab3" name="third">内容3</z-tab-panel>
    </z-tab>
</div>
</template>
<script>
export default {
    name: "TabDemo.vue",
    data(){
        return {
            selectedName:'first'
        }
    }
}
</script>
```

## 卡片化
卡片化的标签页。
<ClientOnly>
<TabCard></TabCard>
</ClientOnly>

```javascript
<div class="container">
    <z-tab type="card" v-model="selectedName">
        <z-tab-panel label="Tab1" name="first">内容1</z-tab-panel>
        <z-tab-panel label="Tab2" name="second">内容2</z-tab-panel>
        <z-tab-panel label="Tab3" name="third">内容3</z-tab-panel>
    </z-tab>
    <p>selectedName:{{selectedName}}</p>
</div>
```