::: details 点击查看代码
```js
<script>
    export default {
        name: 'Row',
        componentName: 'liRow',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            justify: {
                type: String,
                default: 'center'
            },
            align: {
                type: String,
                default: 'center'
            },
            warp: {
                type: String,
                default: 'nowarp'
            },
            direction: {
                type: String,
                default: 'row'
            },
            gutter: Number
        },
        computed: {
            style() {
                const ret = {};
                if (this.gutter) {
                    ret.marginLeft = `-${this.gutter}px`;
                    ret.marginRight = ret.marginLeft;
                }
                return ret;
            }
        },
        render(h) {
            return h(this.tag, {
                class: ['li-row',
                    `is-justify-${this.justify}`,
                    `is-align-${this.align}`,
                    `is-warp-${this.wrap}`,
                    `is-direction-${this.direction}`,
                ],
                // style: this.style
            }, this.$slots.default)
        }
    }
</script>
<style scoped>
    .li-row {
        display: flex;
    }

    .is-direction-row-reverse {
        flex-direction: row-reverse;
    }

    .is-direction-column {
        flex-direction: column;
    }

    .is-direction-column-reverse {
        flex-direction: column-reverse;
    }

    .is-warp-nowrap {
        flex-wrap: nowrap;
    }

    .is-warp-wrap-reverse {
        flex-wrap: wrap-reverse;
    }

    .is-justify-center {
        justify-content: center;
    }

    .is-justify-flex-start {
        justify-content: flex-start;
    }

    .is-justify-flex-end {
        justify-content: flex-end;
    }

    .is-justify-space-between {
        justify-content: space-between;
    }

    .is-justify-space-around {
        justify-content: space-around;
    }

    .is-align-center {
        align-items: center;
    }

    .is-align-flex-start {
        align-items: flex-start;
    }

    .is-align-flex-end {
        align-items: flex-end;
    }
</style>
```
:::



::: details 点击查看代码
```js
<script>
    export default {
        name: 'Col',
        componentName: 'liRow',
        props: {
            span: {
                type: Number,
                default: 24
            },
            tag: {
                type: String,
                default: 'div'
            },
            left: Number,
            right: Number,
            width: Number,
            textAlign: String
        },
        computed: {
            style() {
                let obj = {};
                let parent = this.$parent;
                while (parent && parent.$options.componentName !== 'liRow') {
                    parent = parent.$parent;
                }
                if (this.width) {
                    obj.width = this.width + 'px';
                    obj.flexGrow = 0;
                } else {
                    obj.marginLeft = parent.gutter + 'px';
                    obj.marginRight = parent.gutter + 'px'
                }
                this.textAlign ? obj.textAlign = this.textAlign : '';
                this.left ? obj.paddingLeft = this.left + 'px' : '';
                this.right ? obj.paddingRight = this.right + 'px' : '';
                return obj;
            }
        },
        render(h) {
            return h(this.tag, {
                class: ['li-col'],
                style: this.style
            }, this.$slots.default);
        }

    }
</script>
<style scoped>
    [class*=li-col] {
        flex-grow: 1
    }
</style>
```
:::