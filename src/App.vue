<template>
	<div id="app">
<!--		<z-icon cool-hover="start">Star</z-icon>-->
<!--		<z-row class="row">-->
<!--			<z-popover position="top">-->
<!--				<template slot="content">-->
<!--					toptoptoptoptoptoptop-->
<!--				</template>-->
<!--				<z-button icon="setting">t</z-button>-->
<!--			</z-popover>-->
<!--			<z-popover position="bottom">-->
<!--				<template slot="content">-->
<!--					bottombottombottombottombottom-->
<!--				</template>-->
<!--				<z-button icon="setting">b</z-button>-->
<!--			</z-popover>-->
<!--			<z-popover position="left">-->
<!--				<template slot="content">-->
<!--					left-->
<!--				</template>-->
<!--				<z-button icon="setting">left</z-button>-->
<!--			</z-popover>-->
<!--			<z-popover position="right">-->
<!--				<template slot="content">-->
<!--					right-->
<!--				</template>-->
<!--				<z-button icon="setting">right</z-button>-->
<!--			</z-popover>-->
<!--			<z-popover position="bottom" trigger="hover">-->
<!--				<template slot="content">-->
<!--					hover-->
<!--				</template>-->
<!--				<z-button icon="setting">hover</z-button>-->
<!--			</z-popover>-->
<!--		</z-row>-->
<!--		<z-tab type="card" v-model="selectedName">-->
<!--			<z-tab-panel label="标签11111" name="first">内容1</z-tab-panel>-->
<!--			<z-tab-panel label="标签2" name="second">内容2</z-tab-panel>-->
<!--			<z-tab-panel label="标签3" name="third">内容3</z-tab-panel>-->
<!--		</z-tab>-->
<!--		<p>{{selectedName}}</p>-->
<!--		<z-tab  v-model="selectedName">-->
<!--			<z-tab-panel label="标签11111" name="first">内容1</z-tab-panel>-->
<!--			<z-tab-panel label="标签2" name="second">内容2</z-tab-panel>-->
<!--			<z-tab-panel label="标签3" name="third">内容3</z-tab-panel>-->
<!--		</z-tab>-->
<!--		<p>{{selectedName}}</p>-->
		<z-collapse v-model="activeName" accordion >
			<z-collapse-item title="header1" name="1">
				panel2
			</z-collapse-item>
			<z-collapse-item title="header2" name="2">
				panel2
			</z-collapse-item>
			<z-collapse-item title="header3" name="3">
				panel3
			</z-collapse-item>
		</z-collapse>
		active:{{activeName}}
	</div>
</template>

<script>
import Button from './components/Button/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from './components/Button/button-group.vue'
import Row from './components/grid/Row.vue'
import Col from './components/grid/Col.vue'
import Input from './components/input/input.vue'
import Popover from "./components/Popover/Popover";
import Tab from './components/Tab/tab'
import TabPanel from './components/Tab/tab-panel'
import Collapse from './components/Collapse/z-collapse'
import CollapseItem from './components/Collapse/z-collapse-item'
export default {
	name: 'App',
	components: {
		'z-button': Button,
		'z-icon': Icon,
		'z-button-group': ButtonGroup,
		'z-row': Row,
		'z-col': Col,
		'z-input': Input,
		'z-popover':Popover,
		'z-tab':Tab,
		'z-tab-panel':TabPanel,
		'z-collapse':Collapse,
		'z-collapse-item':CollapseItem
	},
	data() {
		return {
			message: '222',
			selectedName:'first',
			activeName:['1','2']
		}
	},
	methods: {
		clickEvent() {
			this.$message({
				type:'danger',
				message:`<strong>这是一段消息</strong>`,
				duration:3,
				showClose:true,
				useHtmlString:true
			})
		},

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
.z-button{
	&.gradient-bg{
		background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	}
}
.rowElement {
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background: #d3dce6
}
</style>
