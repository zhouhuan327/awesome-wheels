---
title: Icon 图标
--- 

# Icon 
提供了一些常用的图标


## 使用方法

通过z-icon标签并设置name 来使用
图标大小与父元素font-size一致


<ClientOnly>
<Icon></Icon>
</ClientOnly>

```javascript
<template>
<div class="container">
    <z-icon name="setting"></z-icon>
    <z-icon name="start"></z-icon>
    <z-icon name="thumbs-up"></z-icon>
    <z-icon name="plus"></z-icon>
    <z-icon name="minus"></z-icon>
    <z-icon name="arrow-right"></z-icon>
    <z-icon name="arrow-left"></z-icon>
</div>
</template>
<style scoped>
    .container{
        font-size: 25px;
    }
</style>
```

## 配合button使用 

通过指定z-button的name属性


<ClientOnly>
<ButtonIcon></ButtonIcon>
</ClientOnly>



```javascript
<div class="container">
    <div>
        <z-button plain icon="setting">默认按钮</z-button>
        <z-button round icon="setting">默认按钮</z-button>
        <z-button disabled icon="setting">默认按钮</z-button>
    </div>
    <p>加载中的按钮</p>
    <p>要设置为 loading 状态，只要设置loading属性为true即可</p>
    <div>
        <z-button plain :loading="true">默认按钮</z-button>
        <z-button round :loading="true">默认按钮</z-button>
        <z-button disabled :loading="true">默认按钮</z-button>
    </div>
</div>
```