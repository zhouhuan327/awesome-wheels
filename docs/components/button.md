---
title: 按钮 
---
# 默认按钮
<ClientOnly>
    <button-demo></button-demo>
</ClientOnly>

```javascript
<template>
    <div>
        <z-button  icon="setting">默认按钮</z-button>
        <z-button :loading="true" type="primary">主要按钮</z-button>
    </div>
</template>
```