# Layout 布局
 基于flex布局的封装
### 等分 间隔
<br/>

<div>
  <li-row :gutter="10">
      <li-col>
          <div class="content bg-purple-dark"></div>
      </li-col>
  </li-row>
    <li-row :gutter="10">
      <li-col>
          <div class="content bg-purple-dark"></div>
      </li-col>
       <li-col>
        <div class="content bg-purple"></div>
    </li-col>
  </li-row>
  <li-row :gutter="10">
    <li-col>
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col>
        <div class="content bg-purple"></div>
    </li-col>
     <li-col>
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row>
</div>


<style>
  .li-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .content{
    /* background: blue; */
    border-radius: 4px;
    min-height: 36px;
  }
</style>
::: details  点击查看代码
```js
<div>
  <li-row :gutter="10">
      <li-col>
          <div class="content bg-purple-dark"></div>
      </li-col>
  </li-row>
    <li-row :gutter="10">
      <li-col>
          <div class="content bg-purple-dark"></div>
      </li-col>
       <li-col>
        <div class="content bg-purple"></div>
    </li-col>
  </li-row>
  <li-row :gutter="10">
    <li-col>
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col>
        <div class="content bg-purple"></div>
    </li-col>
     <li-col>
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row>
</div>

<style>
  .li-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .content{
    /* background: blue; */
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::


### 固定一边或两边
<br/>
<div>
  <li-row>
      <li-col :width="120">
          <div class="content bg-purple-dark"></div>
      </li-col>
       <li-col>
        <div class="content bg-purple"></div>
    </li-col>
  </li-row>
  <li-row>
    <li-col :width="120">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col>
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="120">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row>
</div>

::: details  点击查看代码
```js
<div>
  <li-row>
      <li-col :width="120">
          <div class="content bg-purple-dark"></div>
      </li-col>
       <li-col>
        <div class="content bg-purple"></div>
    </li-col>
  </li-row>
  <li-row>
    <li-col :width="120">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col>
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="120">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row>
</div>


<style>
  .li-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .content{
    /* background: blue; */
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::

### 偏移
<br/>
<div>
    <li-row>
      <li-col :width="100">
          <div class="content bg-purple-dark"></div>
      </li-col>
       <li-col  :left="180" >
        <div class="content bg-purple"></div>
    </li-col>
  </li-row>
  <li-row>
    <li-col :width="100" >
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :left="180">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :left="180">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row>
</div>

::: details  点击查看代码
```js
<div>
    <li-row>
      <li-col :width="100">
          <div class="content bg-purple-dark"></div>
      </li-col>
       <li-col  :left="180" >
        <div class="content bg-purple"></div>
    </li-col>
  </li-row>
  <li-row>
    <li-col :width="100" >
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :left="180">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :left="180">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row>
</div>


<style>
  .li-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .content{
    /* background: blue; */
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::


### 行布局
</br>
<div>
  <li-row justify="flex-start">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
   <li-row>
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
  <li-row justify="flex-end">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
   <li-row justify="space-between">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
   <li-row justify="space-around">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 

  </div>
  
::: details  点击查看代码
```js
<div>
  <li-row justify="flex-start">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
   <li-row>
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
  <li-row justify="flex-end">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
   <li-row justify="space-between">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 
   <li-row justify="space-around">
    <li-col :width="150">
        <div class="content bg-purple-dark"></div>
    </li-col>
    <li-col :width="150">
        <div class="content bg-purple"></div>
    </li-col>
     <li-col :width="150">
        <div class="content bg-purple-light"></div>
    </li-col>
  </li-row> 

  </div>


<style>
  .li-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .content{
    /* background: blue; */
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::

### row 源码
<br/>

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

### col 源码
<br/>

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


### Row Attributes
</br>

| 参数        | 说明           | 类型  | 可选值        | 默认值         |
| ------------- |:-------------:| -----:| ------------- |:-------------:|
| justify     | flex 布局下的水平排列方式    | string   |flex-start/flex-end/center/space-around/space-between     | center | 
| align       | flex 布局下的垂直排列方式    |   string |flex-start/flex-end/centers                               | center | 
| warp        | flex 换行                    |   string |nowarp/warp/wrap-reverse                                  | nowarp |
| direction   | flex 方向                    |   string |row/row-reverse/column/column-reverse                     | row    |
| gutter      | 间隔                         |   number | ---                                                      | 0      |

### Col Attributes
</br>

| 参数        | 说明           | 类型  | 可选值        | 默认值         |
| ------------- |:-------------:| -----:| ------------- |:-------------:|
| left          | 距离右侧距离               |   number |---                                                       | 0       | 
| right         | 距离左侧距离               |   number |---                                                       | 0       | 
| width         |  固定宽度                  |   number |  ---                                                     | 0       |
| textAlign     |  水平排列方式              |   string |start/center/end                                          | start    |
| tag           | 自定义元素标签             |   string | ---                                                      |  div     |