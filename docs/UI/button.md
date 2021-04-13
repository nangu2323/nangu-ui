# Button 按钮
常用的操作按钮。

### 基础用法
<br/>
<div class="content">
  <div class="item">
    <li-button  >默认按钮</li-button>
    <li-button  type="primary">主要按钮</li-button>
    <li-button  type="success">成功按钮</li-button>
    <li-button  type="info">信息按钮</li-button>
    <li-button  type="warning">警告按钮</li-button>
    <li-button  type="danger">危险按钮</li-button>
  </div>
   <div class="item">
    <li-button round>默认按钮</li-button>
    <li-button type="primary" round>主要按钮</li-button>
    <li-button type="success" round>成功按钮</li-button>
    <li-button type="info" round>信息按钮</li-button>
    <li-button type="warning" round>警告按钮</li-button>
    <li-button type="danger" round>危险按钮</li-button>
  </div>
</div>

<br/>
<br/>
<br/>

### 禁用状态
按钮不可用状态。
<br/>


<div class="content">
  <div class="item">
    <li-button class="left" disabled >默认按钮</li-button>
    <li-button class="left" disabled  type="primary">主要按钮</li-button>
    <li-button class="left" disabled  type="success">成功按钮</li-button>
    <li-button class="left" disabled type="info">信息按钮</li-button>
    <li-button class="left" disabled type="warning">警告按钮</li-button>
    <li-button class="left" disabled type="danger">危险按钮</li-button>
  </div>
   <div class="item">
    <li-button disabled round>默认按钮</li-button>
    <li-button type="primary" disabled round>主要按钮</li-button>
    <li-button type="success" disabled round>成功按钮</li-button>
    <li-button type="info" disabled round>信息按钮</li-button>
    <li-button type="warning" disabled round>警告按钮</li-button>
    <li-button type="danger" disabled round>危险按钮</li-button>
  </div>
</div>

<br/>
<br/>
<br/>

### 文字按钮
没有边框和背景色的按钮
<br/>

<div class="content1">
   <li-button type="text">默认按钮</li-button>
   <li-button type="text" color="#45b787">主要按钮</li-button>
   <li-button type="text" color="#2b333e">信息按钮</li-button>
   <li-button type="text" color="#f97d1c">警告按钮</li-button>
   <li-button type="text" color="#d42517">危险按钮</li-button>
</div>

<br/>
<br/>
<br/>

### 加载状态
点击按钮后进行数据加载操作，在按钮上显示加载状态。
<br/>

<div class="content1">
   <li-button loading ></li-button>
   <li-button loading loadingClass="li-icon-loading1"></li-button>
   <li-button loading loadingClass="li-icon-loading2"></li-button>
</div>


<br/>
<br/>
<br/>

### 大小控制
Button 组件提供高和宽，可以在不同场景下选择合适的按钮尺寸。
<br/>

<div class="content1">
   <li-button >正常</li-button>
   <li-button :height="30" >偏小</li-button>
   <li-button :height="20" >很小</li-button>
   <li-button :height="20" :width="120" >自定义</li-button>
</div>




<style>
  .content{
    width:740px;
    height:200px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .content1{
    width:740px;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .item{
    display:flex;
    width:740px;
    flex-wrap: wrap;
    align-items:center;
    justify-content:space-around;
    margin: 10px 0;
  }

</style>


<br/>
<br/>
<br/>

### 按钮颜色
颜色来源中国色

鹤顶红  #d42517    橘橙 #f97d1c    虹蓝  #2177b8    蛙绿 #45b787   青灰  #2b333e



### Button Attributes
</br>

| 参数        | 说明           | 类型  | 可选值        | 默认值         |
| ------------- |:-------------:| -----:| ------------- |:-------------:|
| type     | 类型    | string|—   | — | 
| width       | 宽度   | number |—   |  | 
| height| 高度     |   number |—— | 40 |
| circle| 是否圆形按钮 |   boolean |—— | —— |
| round     | 是否圆角按钮     |   boolean | ---    | ---      |
| loading   | 是否加载中状态    |   boolean | ---    | ---     |
| loadingClass   | 加载中图标    | string  | li-icon-loading/1/2     | ---     |
| loadingText   | 加载文字 |   string | ---    | ---     |
| disabled   | 是否禁用状态 |   boolean | ---    | ---     |
| color   | 加载文字颜色 |   string | ---    | ---     |

