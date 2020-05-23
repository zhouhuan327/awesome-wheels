<template>
	<div
		class="z-input"
		:class="{'error':error,'z-input-suffix':suffixIcon,'z-input-prefix':prefixIcon}"
	>
		<input
			type="text"
			:value="value"
			:disabled="disabled"
			@change="changeEvent"
			@input="inputEvent"
			@focus="focusEvent"
			@blur="blurEvent"
		/>
		<span v-if="suffixIcon" class="suffix-icon">
			<Icon :name="suffixIcon" />
		</span>
		<span v-if="prefixIcon" class="prefix-icon">
			<Icon :name="prefixIcon" />
		</span>
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
		suffixIcon: {
			type: String
		},
		prefixIcon: {
			type: String
		}
	},
	mounted() {
		console.log(this.suffixIcon)
	},
	methods: {
		changeEvent(e) {
			this.$emit('change', e)
		},
		inputEvent(e) {
			this.$emit('input', e.target.value)
		},
		focusEvent(e) {
			this.$emit('focus', e)
		},
		blurEvent(e) {
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
	position: relative;
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
	&.z-input-suffix {
		> input {
			padding: 0 20px 0 10px;
		}
	}
	&.z-input-prefix {
		> input {
			padding: 0 10px 0 25px;
		}
	}
	.suffix-icon {
		font-size: 18px;
		position: absolute;
		height: 100%;
		right: 5px;
		line-height: 32px;
		color: #c0c4cc;
	}
	.prefix-icon {
		font-size: 18px;
		position: absolute;
		height: 100%;
		left: 5px;
		line-height: 32px;
		color: #c0c4cc;
	}
}
</style>