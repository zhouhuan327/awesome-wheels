---
title: Collapse 折叠面板
---

# Collapse 折叠面板
可以折叠/展开的内容区域。

## 基础用法

可以同时展开多个面板


<ClientOnly>
<CollapseDemo></CollapseDemo>
</ClientOnly>

```vue
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
    export default {
        data(){
            return {
                activeName: ['1']
            }
        }
    }
</script>
```

## 手风琴

每次只打开一个item

<ClientOnly>
<CollapseAc></CollapseAc>
</ClientOnly>

```vue
<template>
    <div class="container">
        <z-collapse accordion v-model="activeName">
            <z-collapse-item name="1" title="这是第一个面板">
                <p>第1️⃣个面板的内容</p>
            </z-collapse-item>
            <z-collapse-item name="2" title="这是第二个面板">
                <p>第2️⃣个面板的内容</p><p>第2️⃣个面板的内容</p>
            </z-collapse-item>
            <z-collapse-item name="3" title="这是第三个面板">
                <p>第3️⃣个面板的内容</p><p>第3️⃣个面板的内容</p><p>第3️⃣个面板的内容</p>
            </z-collapse-item>
        </z-collapse>
        <p>activeName:{{activeName}}</p>
    </div>
</template>
<script>
    export default {
        name: "CollapseDemo.vue",
        data(){
            return {
                activeName: ['1']
            }
        }
    }
</script>
```

