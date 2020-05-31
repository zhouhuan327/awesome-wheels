---
title: Message 消息提示
--- 

# Message
常用于主动操作后的反馈提示

## 基础用法 
在Vue中注册了$message方法,接受一个字符串或者对象

<ClientOnly>
<Message></Message>
</ClientOnly>

```javascript
<template>
    <div class="container">
        <z-button plain @click="open">弹出消息提示</z-button>
        <z-button plain @click="open1">成功</z-button>
        <z-button plain @click="open2">警告</z-button>
        <z-button plain @click="open3">错误</z-button>
    </div>
</template>
<script>
import Button from '../../../src/components/Button/button'
export default {
    name: "Message",
    components:{
        'z-button':Button,
    },
    methods:{
        open(){
            this.$message('这是一条消息提示')
        },
        open1(){
            this.$message({
                message:'这是一条成功提示',
                type:'success'
            })
        },
        open2(){
            this.$message({
                message:'这是一条警告提示',
                type:'warning'
            })
        },
        open3(){
            this.$message({
                message:'这是一条错误提示',
                type:'danger'
            })
        }
    }
}
</script>

```
## 设置持续时间

提示默认在三秒后小时，可以通过设置duration参数来更改持续时间

<ClientOnly>
<MessageDuration></MessageDuration>
</ClientOnly>

```javascript
methods:{
    open1(){
        this.$message({
            message:'1s后消失',
            type:'success',
            duration:1
        })
    },
    open2(){
        this.$message({
            message:'5s后消示',
            duration:5

        })
    },
}
```
## 可关闭

通过设置showClose添加关闭按钮

<ClientOnly>
<MessageClose></MessageClose>
</ClientOnly>

```javascript
this.$message({
    message:'可关闭',
    type:'success',
    showClose:true
})
```

## 使用HTML片段

通过设置useHtmlString为true 来开启对HTML片段的渲染
不建议使用复杂的元素

<ClientOnly>
<MessageHtml></MessageHtml>
</ClientOnly>

```javascript
this.$message({
    message:'<p style="color:red">这是一段html片段</p>',
    useHtmlString:true
})
```
