<template>
    <div id="app">

        <z-tab type="card" v-model="selectedName">
            <z-tab-panel label="标签1" name="first">1</z-tab-panel>
            <z-tab-panel label="标签2" name="second">2</z-tab-panel>
            <z-tab-panel label="标签3" name="third">3</z-tab-panel>
        </z-tab>
    </div>
</template>

<script>
    import Button from './components/Button/button.vue'
    import Icon from './components/icon.vue'
    import ButtonGroup from './components/Button/button-group.vue'
    import Row from './components/grid/Row.vue'
    import Col from './components/grid/Col.vue'
    import Input from './components/input/input.vue'
    import Popover from './components/Popover/Popover'
    import Tab from './components/Tab/tab'
    import TabPanel from './components/Tab/tab-panel'
    import Collapse from './components/Collapse/z-collapse'
    import CollapseItem from './components/Collapse/z-collapse-item'
    import Carousel from '@/components/Carousel/Carousel'
    import CarouselItem from '@/components/Carousel/Carousel-item'

    export default {
        name: 'App',
        components: {
            'z-button': Button,
            'z-icon': Icon,
            'z-button-group': ButtonGroup,
            'z-row': Row,
            'z-col': Col,
            'z-input': Input,
            'z-popover': Popover,
            'z-tab': Tab,
            'z-tab-panel': TabPanel,
            'z-collapse': Collapse,
            'z-collapse-item': CollapseItem,
            'z-carousel': Carousel,
            'z-carousel-item': CarouselItem
        },
        data() {
            return {
                message: '222',
                selectedName: 'first',
                activeName: ['1', '2']
            }
        },
        methods: {
            showMsg() {
                this.$message({
                    type: 'danger',
                    message: `<strong>这是一段消息</strong>`,
                    duration: 3,
                    showClose: true,
                    useHtmlString: true
                })
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 20px;
        color: #2c3e50;
        margin-top: 20px;
    }

    .row {
        margin-bottom: 20px;

        .z-button {
            margin-right: 10px;
        }
    }

    .z-button {
        &.gradient-bg {
            background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        }
    }

    .rowElement {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: #d3dce6;
    }
</style>
