--- 
title: Popover 弹出框
--- 

# Popover


## 基础用法

<ClientOnly>
<PopoverPosition></PopoverPosition>
</ClientOnly>

```vue
<z-popover position="top">
    <template slot="content">
    	这是一段消息
    </template>
    <z-button plain >top</z-button>
</z-popover>
<z-popover position="bottom">
    <template slot="content">
        这是一段消息
    </template>
    <z-button plain >bottom</z-button>
</z-popover>
<z-popover position="left">
    <template slot="content">
        这是一段消息
    </template>
    <z-button plain >left</z-button>
</z-popover>
<z-popover position="right">
    <template slot="content">
        这是一段消息
    </template>
    <z-button plain >rigth</z-button>
</z-popover>

```

## 触发条件

可以通过click和hover两种方式触发

<ClientOnly>
<PopoverDemo></PopoverDemo>
</ClientOnly>



```vue
<z-popover position="top">
    <template slot="content">
    	这是弹出的消息
    </template>
    <z-button plain >click激活</z-button>
</z-popover>
<z-popover trigger="hover" position="top">
    <template slot="content">
        这是弹出的消息
    </template>
    <z-button plain >hover激活</z-button>
</z-popover>
```