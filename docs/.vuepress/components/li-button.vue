<template>
    <button class="li-button" @click="handleClick" :class="[{'is-loading': loading}]">
        <span v-if="$slots.default">
            <slot></slot>
        </span>
        <i class="li-icon-loading" v-if="loading"></i>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        componentName: 'liButton',
        props: {
            loading: {
                type: Boolean,
                default: true
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
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #FFF;
        border: 1px solid #DCDFE6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
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
        width: 10px;
        height: 10px;
        line-height: 1;
        background-color: red;
        background: url(../assets/loading.png) no-repeat left top;
    }
</style>