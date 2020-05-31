<template>
    <button class="z-button" :class="buttonClass" :disabled="disabled" @click="clickEvent">
        <icon v-if="icon && !loading" :name="icon"/>
        <icon class="loading" v-if="loading" name="loading"/>
        <slot></slot>
    </button>
</template>

<script>
    import Icon from '../icon.vue'

    export default {
        name: 'z-button',
        components: {
            icon: Icon
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            plain: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            loading: {
                type: Boolean,
                default: false
            },
            gradient: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            clickEvent(e) {
                this.$emit('click', e)
            }
        },
        computed: {
            buttonClass() {
                let {type, plain, round, disabled, gradient} = this
                return [
                    `z-button--${type}`,
                    {'is-plain': plain},
                    {'is-round': round},
                    {'is-disabled': disabled},
                    {'gradient-bg': gradient}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/button/gradient-bg";
    @import "../../styles/button/base-color";

    .z-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        font-size: 14px;
        padding: 10px 10px;
        border-radius: 4px;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        font-weight: 500;
        -webkit-appearance: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        transition: transform 0.1s ease-in-out, background-color 0.3s ease;

        &:hover,
        &:focus {
            @include btn-color($light-blue, #ecf5ff, #c6e2ff);
        }

        &:active {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
            transform: scale(0.95);
        }

        &.is-round {
            border-radius: 18px;
        }

        &.is-disabled {
            cursor: not-allowed;
            opacity: 0.4;
            pointer-events: none;
        }

        .loading {
            animation: spin 1.5s infinite linear;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
