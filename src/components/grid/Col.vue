<template>
	<div class="z-col" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'z-col',
	data() {
		return {
			gutter: 0
		}
	},
	props: {
		span: [Number, String],
		offset: [Number, String],
		sm: [Number, String],
		md: [Number, String],
		lg: [Number, String]
	},
	computed: {
		colClass() {
			let { span, offset, sm, md, lg } = this
			return [
				span && `z-col-${span}`,
				offset && `offset-${offset}`,
				sm && `z-col-sm-${sm}`,
				md && `z-col-md-${md}`,
				lg && `z-col-lg-${lg}`
			]
		},
		colStyle() {
			return {
				paddingLeft: this.gutter / 2 + 'px',
				paddingRight: this.gutter / 2 + 'px'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.z-col {
	min-height: 40px;
	width: 100%;
	text-align: left;
	//生成offset-1到offset-24
	$prefix: offset-;
	@for $n from 1 through 24 {
		&.#{$prefix}#{$n} {
			margin-left: ($n / 24) * 100%;
		}
	}

	//生成z-col-1到z-col-24
	$prefix: z-col-;
	@for $n from 1 through 24 {
		&.#{$prefix}#{$n} {
			width: ($n / 24) * 100%;
		}
	}

	@media (min-width: 768px) {
		//生成z-col-sm-1到z-col-sm-24
		$prefix: z-col-sm-;
		@for $n from 1 through 24 {
			&.#{$prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
	}
	@media (min-width: 992px) {
		//生成z-col-md-1到z-col-md-24
		$prefix: z-col-md-;
		@for $n from 1 through 24 {
			&.#{$prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
	}
	@media (min-width: 1200px) {
		//生成z-col-lg-1到z-col-lg-24
		$prefix: z-col-lg-;
		@for $n from 1 through 24 {
			&.#{$prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
	}
}
</style>