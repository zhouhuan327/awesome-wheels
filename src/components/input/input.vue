<template>
	<div class="z-input" :class="{'error':error}">
		<input
			type="text"
			:value="value"
			:disabled="disabled"
			@change="changeEvent"
			@input="inputEvent"
			@focus="focusEvent"
			@blur="blurEvent"
		/>
		<template class="error-msg" v-if="error">
			<Icon name="setting" />
			<span>{{error}}</span>
		</template>
	</div>
</template>

<script>
import Icon from '../icon.vue'
export default {
	name: 'z-input',
	components: {
		Icon
	},
	props: {
		value: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		error: {
			type: String
		},
		eventCalled: {
			//用来触发测试
			type: Function
		}
	},
	methods: {
		changeEvent(e) {
			this.eventCalled && this.eventCalled('change')
			this.$emit('change', e)
		},
		inputEvent(e) {
			this.eventCalled && this.eventCalled('input')
			this.$emit('input', e)
		},
		focusEvent(e) {
			this.eventCalled && this.eventCalled('input')
			this.$emit('focus', e)
		},
		blurEvent(e) {
			this.eventCalled && this.eventCalled('blur')
			this.$emit('blur', e)
		}
	}
}
</script>

<style lang="scss" scoped>
$border-color: #dcdfe6;
$border-hover-color: #bfcbd9;
$box-shadow-color: #66b1ff45;
.z-input {
	display: inline-block;
	font-size: 13px;
	&.error {
		> input,
		input:hover,
		input:focus {
			border-color: red;
		}
	}
	> input {
		position: relative;
		height: 32px;
		border: 1px solid $border-color;
		border-radius: 4px;
		padding: 0 10px;
		font-size: 12px;
		transition: 0.2s all ease-in;
		&:hover {
			border-color: $border-hover-color;
		}
		&:focus {
			outline: none;
			box-shadow: inset 0 1px 2px $box-shadow-color;
		}
		&[disabled] {
			opacity: 1;
			background-color: #fff;
			border-color: #e4e7ed;
			color: #ccc;
			cursor: not-allowed;
		}
	}
}
</style>