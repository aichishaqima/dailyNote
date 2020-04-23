# CSS3 box-shadow 属性

### 实例
向 div 元素添加 box-shadow:
```css
div{
    box-shadow:10px 10px 5px #888888;
}
```

### 浏览器支持
IE9+、Firefox 4、Chrome、Opera以及Safari 5.1.1 支持 box-shadow属性。

### 定义和用法
box-shadow 属性向框添加一个或多个阴影。

<font color="#FF9955">提示：</font>请使用 border-image-* 属性来构造漂亮的可伸缩按钮！

|默认值：|none|
|---|---|

|继承性：|no|
|---|---|

|版本：|CSS3|
|---|---|

|JavaScript语法：|object.style.boxShadow="10px 10px 5px #888888"|
|---|---|

### 语法
```css
box-shadow:h-shadow v-shadow blur spread color inset;
```

**注释：** box-shadow向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由2-4个长度值、可选的颜色值以及可选的inset关键词来规定。省略长度的值是0。

|值|描述|
|---|---|
|h-shadow|水平阴影的位置。允许负值。|
|v-shadow|垂直阴影的位置。允许负值。|
|blur|可选。模糊距离。|
|spread|可选。阴影的尺寸。|
|color|可选。阴影的颜色。|
|inset|可选。将外部阴影(outset)改为内部阴影。|







