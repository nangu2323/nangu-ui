<script>
    export default {
        name: 'li-col',
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