<template>
    <svg v-if="name" class="z-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
    <div v-else-if="coolHover" class="z-3d-icon">
        <div class="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="wrapper">
                <svg class="z-icon">
                    <use :xlink:href="`#icon-${coolHover}`"></use>
                </svg>
            </div>
        </div>
        <span class="text"><slot></slot></span>
    </div>
</template>

<script>
    import '../assets/iconfont'

    export default {
        name: 'z-icon',
        props: {
            name: {
                type: String
            },
            coolHover: {
                type: String,
                default: 'start'
            }

        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #c8cdd2;
    $box-shadow-color: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    .z-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .z-3d-icon {
        position: relative;
        font-size: 20px;
        cursor: pointer;
        display: inline-block;
        margin: 6px;
        .layer {
            display: inline-block;
            transition: all 0.3s ease-in-out;

            span, {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                border-radius: 5px;
                transition: all 0.3s;
            }

            .wrapper {
                line-height: 1em;
                padding: 5px;
                border: 1px solid $border-color;
                border-radius: 5px;
                transition: all 0.3s;
            }
        }
        .text {
            position: absolute;
            font-size: 13px;
            left:50%;
            top: 80%;
            transform: translateX(-50%);
            transition: top 0.3s ease, opacity 0.3s ease;
            opacity: 0;
            color: black;
            word-break: keep-all;
        }

        &:hover {
            .layer {
                transform: rotate(-35deg) skew(20deg);

                span {
                    border: 1px solid $border-color;
                    box-shadow: $box-shadow-color;
                }

                span:nth-child(1) {
                    opacity: 0.2;
                }

                span:nth-child(2) {
                    opacity: 0.4;
                    transform: translate(5px, -5px);
                }

                span:nth-child(3) {
                    opacity: 0.6;
                    transform: translate(10px, -10px);
                }

                span:nth-child(4) {
                    opacity: 0.8;
                    transform: translate(15px, -15px);
                }
                .wrapper {
                    opacity: 1;
                    transform: translate(20px, -20px);
                }
            }
            .text{
                top: 100%;
                opacity: 1;
            }
        }
    }

</style>