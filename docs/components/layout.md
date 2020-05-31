---
title: Layout 布局
---

# Grid Layout

## 基础布局
通过基础的 24 分栏，迅速简便地创建布局。

<ClientOnly>
<LayoutDemo></LayoutDemo>
</ClientOnly>

```javascript
<z-row>
    <z-col :span="24"><div class="grid-content bg1"></div></z-col>
</z-row>
<z-row>
    <z-col :span="12"><div class="grid-content bg1"></div></z-col>
    <z-col :span="12"><div class="grid-content bg2"></div></z-col>
</z-row>
<z-row>
    <z-col :span="8"><div class="grid-content bg1"></div></z-col>
    <z-col :span="8"><div class="grid-content bg2"></div></z-col>
    <z-col :span="8"><div class="grid-content bg3"></div></z-col>
</z-row>
<z-row>
    <z-col :span="6"><div class="grid-content bg1"></div></z-col>
    <z-col :span="6"><div class="grid-content bg2"></div></z-col>
    <z-col :span="6"><div class="grid-content bg3"></div></z-col>
    <z-col :span="6"><div class="grid-content bg4"></div></z-col>
</z-row>
```
 
 ## 分栏间隔
 可以使用Row的gutter属性，我们推荐使用 (16+8n)px 作为栅格间隔
 
 <ClientOnly>
 <LayoutGutter></LayoutGutter>
 </ClientOnly>
 
```javascript
<z-row :gutter="20">
    <z-col :span="10"><div class="grid-content bg1"></div></z-col>
    <z-col :span="10"><div class="grid-content bg2"></div></z-col>
</z-row>
<z-row :gutter="24">
    <z-col :span="6"><div class="grid-content bg1"></div></z-col>
    <z-col :span="6"><div class="grid-content bg2"></div></z-col>
    <z-col :span="6"><div class="grid-content bg3"></div></z-col>
</z-row>
```
## 列偏移

使用offset可以使列向右偏移，例如:offset=4 将元素向右偏移四个列的宽度

<ClientOnly>
<LayoutOffset></LayoutOffset>
</ClientOnly>

```javascript
 <z-row>
    <z-col :span="6" ><div class="grid-content bg1"></div></z-col>
    <z-col :span="6" ><div class="grid-content bg2"></div></z-col>
</z-row>
<z-row>
    <z-col :span="6" :offset="3"><div class="grid-content bg1"></div></z-col>
    <z-col :span="6" :offset="4"><div class="grid-content bg2"></div></z-col>
</z-row>
```


 ## 对其方式
 栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右。
 
<ClientOnly>
<LayoutAlign></LayoutAlign>
</ClientOnly>

```javascript
<z-row align="center" :gutter="20">
    <z-col :span="4" ><div class="grid-content bg1"></div></z-col>
    <z-col :span="4"><div class="grid-content bg2"></div></z-col>
    <z-col :span="4"><div class="grid-content bg2"></div></z-col>
</z-row>
    <z-row align="left" :gutter="20">
    <z-col :span="4"><div class="grid-content bg1"></div></z-col>
    <z-col :span="4"><div class="grid-content bg2"></div></z-col>
    <z-col :span="4"><div class="grid-content bg3"></div></z-col>
</z-row>
<z-row align="right" :gutter="20">
    <z-col :span="4"><div class="grid-content bg1"></div></z-col>
    <z-col :span="4"><div class="grid-content bg2"></div></z-col>
    <z-col :span="4"><div class="grid-content bg3"></div></z-col>
</z-row>
```

## 响应式 

设计了sm,md,lg三种响应式尺寸
分别对应:768px,992px,1200px

<ClientOnly>
<Layoutsml></Layoutsml>
</ClientOnly>

```javascript
<z-row :gutter="10">
    <z-col :sm="20" :md="5" :lg="10"><div class="grid-content bg1"></div></z-col>
    <z-col :sm="20" :md="5" :lg="10"><div class="grid-content bg2"></div></z-col>
    <z-col :sm="20" :md="5" :lg="10"><div class="grid-content bg3"></div></z-col>
    <z-col :sm="20" :md="5" :lg="10"><div class="grid-content bg3"></div></z-col>
</z-row>
```
