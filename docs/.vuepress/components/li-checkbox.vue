<template>
    <label class="li-checkbox">
        <span class="li-checkbox_input">

        </span>
    </label>
</template>

<script>
    export default {
        name: 'li-checkbox',
        componentName: 'liCheckBox',
        props: [''],
        data() {
            return {

            };
        },

        components: {},

        computed: {},

        beforeMount() {},

        mounted() {},

        methods: {}

    }
</script>
<style scoped>
    .li-checkbox {
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-right: 30px
    }

    .li-checkbox,
    .li-checkbox_input {
        display: inline-block;
        position: relative
    }

    .li-checkbox-button_inner,
    .li-checkbox_input {
        white-space: nowrap;
        vertical-align: middle;
        outline: 0
    }
</style>