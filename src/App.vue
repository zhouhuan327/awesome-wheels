<template>
	<div id="app">
		<z-button @click="clickEvent" icon="setting">默认按钮</z-button>
<!--		<z-input value="12" disabled />-->
<!--		<z-input @change="change" error="出错了" value="1233" />-->
<!--		<z-input suffixIcon="setting" v-model="message" />-->
<!--		<z-input prefixIcon="setting" v-model="message" />-->
<!--		{{message}}-->
		<!-- <div class="row">
			<z-button @click="clickEvent" icon="setting">默认按钮</z-button>
			<z-button :loading="true" type="primary">主要按钮</z-button>
			<z-button type="success">成功按钮</z-button>
			<z-button type="info">信息按钮</z-button>
			<z-button type="warning">警告按钮</z-button>
			<z-button type="danger">危险按钮</z-button>
		</div>
		<div class="row">
			<z-button plain>默认按钮</z-button>
			<z-button plain type="primary">主要按钮</z-button>
			<z-button plain type="success">成功按钮</z-button>
			<z-button plain type="info">信息按钮</z-button>
			<z-button plain type="warning">警告按钮</z-button>
			<z-button plain type="danger">危险按钮</z-button>
		</div>
		<div class="row">
			<z-button plain round>默认按钮</z-button>
			<z-button plain round type="primary">主要按钮</z-button>
			<z-button plain round type="success">成功按钮</z-button>
			<z-button plain round type="info">信息按钮</z-button>
			<z-button plain round type="warning">警告按钮</z-button>
			<z-button plain round type="danger">危险按钮</z-button>
		</div>
		<div class="row">
			<z-button>默认按钮</z-button>
			<z-button disabled type="primary">主要按钮</z-button>
			<z-button disabled type="success">成功按钮</z-button>
			<z-button disabled type="info">信息按钮</z-button>
			<z-button disabled type="warning">警告按钮</z-button>
			<z-button disabled type="danger">危险按钮</z-button>
		</div>
		<z-button-group>
			<z-button icon="arrow-left">上一页</z-button>
			<z-button>更多</z-button>
			<z-button icon="arrow-right">下一页</z-button>
			<div></div>
		</z-button-group>
		<div class="row">
			<z-row :gutter="20" align="center">
				<z-col :span="24" :sm="12" :md="6">
					<div class="rowElement">1</div>
				</z-col>
				<z-col :span="24" :sm="12" :md="6">
					<div class="rowElement">2</div>
				</z-col>
				<z-col :span="24" :sm="12" :md="6">
					<div class="rowElement">3</div>
				</z-col>
				<z-col :span="24" :sm="12" :md="6">
					<div class="rowElement">4</div>
				</z-col>
			</z-row>
		</div>-->
	</div>
</template>

<script>
import Button from './components/Button/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from '@/components/Button/button-group.vue'
import Row from '@/components/grid/Row.vue'
import Col from '@/components/grid/Col.vue'
import Input from '@/components/input/input.vue'
export default {
	name: 'App',
	components: {
		'z-button': Button,
		'z-icon': Icon,
		'z-button-group': ButtonGroup,
		'z-row': Row,
		'z-col': Col,
		'z-input': Input
	},
	data() {
		return {
			message: '222'
		}
	},
	methods: {
		clickEvent() {
			this.$message({
				type:'danger',
				message:'这是一段消息',
				duration:10,
				showClose:true
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

	color: #2c3e50;
	margin-top: 20px;
}
.row {
	margin-bottom: 20px;
	.z-button {
		margin-right: 10px;
	}
}
.rowElement {
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background: #d3dce6;
}
</style>
