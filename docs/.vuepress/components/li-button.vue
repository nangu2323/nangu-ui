<template>
    <button class="li-button" @click="handleClick" :class="[{'is-loading': loading}]">
        <span v-if="$slots.default">
            <slot></slot>
        </span>
        <i :class="loadingClass" v-if="loading"></i>
    </button>
</template>

<script>
    export default {
        name: 'li-button',
        componentName: 'liButton',
        props: {
            loading: {
                type: Boolean,
                default: true
            },
            loadingClass: {
                type: String,
                default: 'li-icon-loading'
            }
        },
        data() {
            return {

            };
        },

        components: {},

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },

    }
</script>
<style scoped>
    .li-button {
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

    .li-button:focus,
    .li-button:hover {
        color: #409EFF;
        border-color: #c6e2ff;
        background-color: #ecf5ff
    }

    .li-button:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: 0
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