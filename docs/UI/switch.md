# Switch 开关
提供多种可供的设备选项


###  基本用法
绑定一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色
<br/>

<div class="content">
  <li-switch  v-model="value" active-color="#1781b5"
  inactive-color="#a7535a"></li-switch>
</div>


::: details 点击查看代码
```js
<div class="content">
  <li-switch  v-model="value" active-color="#1781b5"
  inactive-color="#a7535a"></li-switch>
</div>

<script>
export default {
    data(){
      return{
        value:false
      }
    }
};
</script>

```
:::

###  文字描述
active-text与inactive-text来设置开关的文字描述。
<br/>
activefontColor与inactivefontColor来设置开关的文字初始颜色
<br/>
activeColor与inactiveColor来设置开关不同状态的颜色
<div class="content">
  <li-switch  v-model="value1" active-text="激活文字"  activefontColor="#5698c3"
  inactive-text="未激活文字" inactivefontColor="#12aa9c"  ></li-switch>
</div>

<script>
export default {
    data(){
      return{
        value:false,
        value1:false,
        value2:false,
        value3:true
      }
    }
};
</script>

::: details 点击查看代码
```js
<div class="content">
  <li-switch  v-model="value1" active-text="激活文字"  activefontColor="#5698c3"
  inactive-text="未激活文字" inactivefontColor="#12aa9c"  ></li-switch>
</div>

<script>
export default {
    data(){
      return{
        value1:false,
        value2:false
      }
    }
};
</script>
```
:::

### 禁用状态

设置disabled属性，接受一个Boolean，设置true即可禁用。
<div class="content">
  <li-switch  v-model="value2"  activefontColor="#5698c3" :disabled="true"
  inactivefontColor="#12aa9c"  ></li-switch>
  <li-switch  v-model="value3"  activefontColor="#5698c3" :disabled="true"
  inactivefontColor="#12aa9c"  ></li-switch>
</div>

::: details 点击查看代码
```js
  <div class="content">
  <li-switch  v-model="value2"  activefontColor="#5698c3" :disabled="true"
  inactivefontColor="#12aa9c"  ></li-switch>
  <li-switch  v-model="value3"  activefontColor="#5698c3" :disabled="true"
  inactivefontColor="#12aa9c"  ></li-switch>
</div>

```
:::



<style>
  .content{
    width:100%;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }

</style>


### Switch 源码
<br/>

::: details 点击查看代码
```js
<template>
    <div class="li-switch" :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }" role="switch" :aria-checked="checked" :aria-disabled="switchDisabled" @click.prevent="switchValue ">
        <input type="checkbox" ref="input" class="li-switch__input" @change="handleChange" :true-value="activeValue" :false-value="inactiveValue" @keydown.enter="switchValue" :disabled="switchDisabled">
        <span :class="[!checked ? 'is-active' : '']" :style="{'fontSize':fontSize + 'px','color':checked ? activefontColor : inactivefontColor}">
            <i v-if="inactiveIconClass" :class="inactiveIconClass"></i>
            <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
        </span>
        <span class="li-switch__core" ref="core" :style="{ 'width': coreWidth + 'px','height': coreHeight + 'px'}">
            <span class="li-switch__core__c" :style="{ 'width': innerHeight + 'px','height': innerHeight + 'px','backgroundColor': checked ? activeBgColor : inactiveBgColor,'marginLeft': checked ?  -(innerHeight+1) + 'px' : '' }"></span>
        </span>
        <span>
            <i v-if="activeIconClass" :class="activeIconClass"></i>
            <span :class="[!checked ? 'is-active' : '']" :style="{'fontSize':fontSize + 'px','color':
            !checked ? activefontColor : inactivefontColor}">
                <i v-if="inactiveIconClass" :class="inactiveIconClass"></i>
                <span v-if="!inactiveIconClass && activeText" :aria-hidden="checked">{{ activeText }}</span>
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'liSwitch',
        componentName: 'liSwitch',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            width: Number,
            coreHeight: Number,
            innerHeight: Number,
            activeIconClass: {
                type: String,
                default: ''
            },
            activeClass: {
                type: String,
                default: ''
            },
            activeText: String,
            inactiveIconClass: {
                type: String,
                default: ''
            },
            inactiveClass: {
                type: String,
                default: ''
            },
            inactiveText: String,
            disabled: {
                type: Boolean,
                default: false
            },
            activeValue: {
                type: Boolean,
                default: true
            },
            inactiveValue: {
                type: Boolean,
                default: false
            },
            activeValue: {
                type: Boolean,
                default: true
            },
            inactiveValue: {
                type: Boolean,
                default: false
            },
            activeColor: {
                type: String,
                default: ''
            },
            inactiveColor: {
                type: String,
                default: ''
            },
            activeBgColor: {
                type: String,
                default: ''
            },
            inactiveBgColor: {
                type: String,
                default: ''
            },
            fontSize: {
                type: Number,
                default: 14
            },
            activefontColor: {
                type: String,
                default: '#1781b5'
            },
            inactivefontColor: {
                type: String,
                default: '#a7535a'
            }
        },
        data() {
            return {
                coreWidth: this.width
            };
        },

        computed: {
            checked() {
                return this.value === this.activeValue;
            },
            switchDisabled() {
                return this.disabled
            }
        },
        watch: {
            checked() {
                this.$refs.input.checked = this.checked;
                if (this.activeColor || this.inactiveColor) {
                    this.setBackgroundColor();
                }
            }
        },
        created() {
            this.$emit('input', this.value);
        },
        mounted() {
            /* istanbul ignore if */
            this.coreWidth = this.width || 40;
            if (this.activeColor || this.inactiveColor) {
                this.setBackgroundColor();
            }
            this.$refs.input.checked = this.checked;
        },
        methods: {
            handleChange(event) {
                const val = this.checked ? this.inactiveValue : this.activeValue;
                this.$emit('input', val);
                this.$emit('change', val);
                this.$nextTick(() => {
                    this.$refs.input.checked = this.checked;
                })
            },
            switchValue(val) {
                !this.switchDisabled && this.handleChange();
            },
            setBackgroundColor() {
                let newColor = this.checked ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = newColor;
                this.$refs.core.style.backgroundColor = newColor;
            },
        },

    }
</script>
<style scoped>
    .li-switch {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 1;
        /* line-height: 20px;
        height: 20px; */
        vertical-align: middle;
        border: 1px solid red;
    }

    .li-switch.is-disabled .li-switch__core,
    .li-switch.is-disabled .li-switch__label {
        cursor: not-allowed
    }

    .li-switch__input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0
    }


    .li-switch__core {
        margin: 0;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #DCDFE6;
        outline: 0;
        border-radius: 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #DCDFE6;
        -webkit-transition: border-color .3s, background-color .3s;
        transition: border-color .3s, background-color .3s
    }

    .li-switch__core__c {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        -webkit-transition: all .3s;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #FFF
    }

    .li-switch.is-checked .li-switch__core {
        border-color: #409EFF;
        background-color: #409EFF
    }

    .li-switch.is-checked .li-switch__core__c {
        left: 100%;
        margin-left: -17px
    }

    .li-switch.is-disabled {
        opacity: .6
    }
</style>
```
:::


### Switch Attributes
</br>

| 参数        | 说明           | 类型  | 可选值        | 默认值         |
| ------------- |:-------------:| -----:| ------------- |:-------------:|
| value     | 绑定值开关状态    | boolean|—   | — | 
| width       | switch 的宽度   | number |—   | 40 | 
| activeIconClass| 激活状态图标类名     |   string |—— | —— |
| inactiveIconClass| 未激活状态图标类名 |   string |—— | —— |
| activeText     | 激活状态文字     |   string | ---    | ---      |
| inactiveText   | 未激活状态文字    |   string | ---    | ---     |
| activeColor   | 激活状态文字颜色    |   string | ---    | ---     |
| inactiveColor   | 未激活状态文字颜色 |   string | ---    | ---     |



