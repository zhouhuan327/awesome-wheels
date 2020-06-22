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

```vue
 <z-icon name="setting"></z-icon>
 <z-icon name="start"></z-icon>
 <z-icon name="thumbs-up"></z-icon>
```

## 悬浮效果的Icon按钮

设置cool-hover属性，指定iconname和传入默认插槽

<ClientOnly>
<Icon3D></Icon3D>
</ClientOnly>

```vue
<z-icon cool-hover="start">收藏</z-icon>
<z-icon cool-hover="thumbs-up">点赞</z-icon>
<z-icon cool-hover="setting">设置</z-icon>
```


## 配合button使用 

通过指定z-button的name属性


<ClientOnly>
<ButtonIcon></ButtonIcon>
</ClientOnly>



```vue
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

