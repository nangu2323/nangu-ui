<template>
    <button class="li-button" @click="handleClick" :disabled="buttonDisabled || loading" :class="[
    type ? 'li-button-' + type : '',
    {'is-loading': loading,'is-disabled': disabled, 'is-round': round}]" :style="{'color':color,'height':height + 'px','width':width + 'px'}">
        <span v-if="$slots.default && !loading">
            <slot></slot>
        </span>
        <span class="loading-text" v-if="loading">{{loadingText}}</i><i :class="loadingClass"></i></span>
    </button>
</template>

<script>
    export default {
        name: 'li-button',
        componentName: 'liButton',
        props: {
            type: String,
            round: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
            },
            height: {
                type: Number,
                default: 40
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingClass: {
                type: String,
                default: 'li-icon-loading'
            },
            loadingText: {
                type: String,
                default: '加载中'
            },
            disabled: Boolean,
            color: {
                type: String
            }
        },
        data() {
            return {

            };
        },

        components: {},
        computed: {
            buttonSize() {
                return this.size
            },
            buttonDisabled() {
                return this.disabled
            }
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },

    }
</script>
<style scoped>
    .li-button {
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #FFF;
        border: 1px solid #DCDFE6;
        color: #606266;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: .1s;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }

    .loading-text {
        display: flex;
        align-items: center;
        line-height: 1;
    }

    .li-button.is-round {
        border-radius: 20px;
        padding: 12px 23px
    }

    .li-button:focus,
    .li-button:hover {
        color: #2177b8;
        border-color: #c6e2ff;
        background-color: #ecf5ff
    }

    .li-button:active {
        color: #2177b8;
        border-color: #2177b8;
        outline: 0
    }

    .li-button-primary {
        color: #FFF;
        background-color: #2177b8;
        border-color: #FFF
    }

    .li-button-primary:focus,
    .li-button-primary:hover {
        color: #FFF;
        border-color: #FFF;
        background-color: #2177b8
    }

    .li-button-primary:active {
        color: #FFF;
        border-color: #2177b8;
        outline: 0
    }


    .li-button-success {
        color: #FFF;
        background-color: #45b787;
        border-color: #FFF
    }

    .li-button-success:focus,
    .li-button-success:hover {
        color: #FFF;
        border-color: #FFF;
        background-color: #45b787
    }

    .li-button-success:active {
        color: #FFF;
        border-color: #45b787;
        outline: 0
    }

    .li-button-info {
        color: #FFF;
        background-color: #2b333e;
        border-color: #FFF
    }

    .li-button-info:focus,
    .li-button-info:hover {
        color: #FFF;
        border-color: #FFF;
        background-color: #2b333e
    }

    .li-button-info:active {
        color: #FFF;
        border-color: #2b333e;
        outline: 0
    }

    .li-button-warning {
        color: #FFF;
        background-color: #f97d1c;
        border-color: #FFF
    }

    .li-button-warning:focus,
    .li-button-warning:hover {
        color: #FFF;
        border-color: #FFF;
        background-color: #f97d1c
    }

    .li-button-warning:active {
        color: #FFF;
        border-color: #f97d1c;
        outline: 0
    }

    .li-button-danger {
        color: #FFF;
        background-color: #d42517;
        border-color: #FFF
    }

    .li-button-danger:focus,
    .li-button-danger:hover {
        color: #FFF;
        border-color: #FFF;
        background-color: #d42517
    }

    .li-button-danger:active {
        color: #FFF;
        border-color: #d42517;
        outline: 0
    }

    .li-button.is-disabled,
    .li-button.is-disabled:focus,
    .li-button.is-disabled:hover {
        color: #C0C4CC;
        cursor: not-allowed;
        background-image: none;
        filter: opacity(60%);
        border-color: #EBEEF5
    }

    .li-button-text,
    .li-button-text.is-disabled,
    .li-button-text.is-disabled:focus,
    .li-button-text.is-disabled:hover,
    .li-button-text:active {
        border-color: transparent
    }

    .li-button-text {
        color: #2177b8;
        background: 0 0;
        padding-left: 0;
        padding-right: 0
    }

    .li-button-text:focus,
    .li-button-text:hover {
        color: #2177b8;
        border-color: transparent;
        background-color: transparent
    }

    .li-button-text:active {
        color: #2177b8;
        background-color: transparent
    }

    .li-button.is-loading {
        position: relative;
        pointer-events: none
    }

    .li-button.is-loading:before {
        pointer-events: none;
        content: '';
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, .35)
    }

    .li-icon-loading {
        display: inline-block;
        margin-left: 5px;
        width: 20px;
        height: 20px;
        line-height: 1;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url(../public/image/loading.png);
        animation: test 1s linear infinite;
    }

    .li-icon-loading1 {
        display: inline-block;
        margin-left: 5px;
        width: 20px;
        height: 20px;
        line-height: 1;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url(../public/image/loading1.png);
        animation: test 1s linear infinite;
    }

    .li-icon-loading2 {
        display: inline-block;
        margin-left: 5px;
        width: 20px;
        height: 20px;
        line-height: 1;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url(../public/image/loading2.png);
        animation: test 1s linear infinite;
    }


    @keyframes test {
        form {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>