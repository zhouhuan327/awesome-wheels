---
title: Button 按钮
---

# Button 按钮

## 基础用法
使用type,plain和round来定义button样式



<ClientOnly>
<ButtonDemo></ButtonDemo>
</ClientOnly>

```javascript
<div>
    <z-button >默认按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
</div>
<div>
    <z-button plain>默认按钮</z-button>
    <z-button plain type="primary">主要按钮</z-button>
    <z-button plain type="success">成功按钮</z-button>
    <z-button plain type="info">信息按钮</z-button>
    <z-button plain type="warning">警告按钮</z-button>
    <z-button plain type="danger">危险按钮</z-button>
</div>
<div>
    <z-button plain round>默认按钮</z-button>
    <z-button plain round type="primary">主要按钮</z-button>
    <z-button plain round type="success">成功按钮</z-button>
    <z-button plain round type="info">信息按钮</z-button>
    <z-button plain round type="warning">警告按钮</z-button>
    <z-button plain round type="danger">危险按钮</z-button>
</div>
```

## 禁用状态
使用disabled添加禁用状态


<ClientOnly>
<ButtonDisabled></ButtonDisabled>
</ClientOnly>

```javascript
<z-button disabled>默认按钮</z-button>
<z-button disabled type="primary">主要按钮</z-button>
<z-button disabled type="success">成功按钮</z-button>
<z-button disabled type="info">信息按钮</z-button>
<z-button disabled type="warning">警告按钮</z-button>
<z-button disabled type="danger">危险按钮</z-button>
```

## 带图标的按钮

设置setting属性

<ClientOnly>
<ButtonIcon></ButtonIcon>
</ClientOnly>

```javascript
<z-button plain icon="setting">默认按钮</z-button>
<z-button round icon="setting">默认按钮</z-button>
<z-button disabled icon="setting">默认按钮</z-button>

<z-button plain :loading="true">默认按钮</z-button>
<z-button round :loading="true">默认按钮</z-button>
<z-button disabled :loading="true">默认按钮</z-button>

```

## 按钮组

通过z-button-group 包裹的按钮会变成按钮组

<ClientOnly>
<ButtonGroup></ButtonGroup>
</ClientOnly>

```javascript
<z-button-group>
  <z-button icon="arrow-left">上一页</z-button>
  <z-button>更多</z-button>
  <z-button icon="arrow-right">下一页</z-button>
  <div></div>
</z-button-group>

 <z-button-group>
  <z-button>1</z-button>
  <z-button>2</z-button>
  <z-button>3</z-button>
  <z-button>4</z-button>
</z-button-group>
```