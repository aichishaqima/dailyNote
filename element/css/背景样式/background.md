# CSS background 属性

### 实例
如何在一个声明中设置所有背景属性
```css
body{
    background:#00FF00 url(bgimage.gif) no-repeat top;
}
```
### 浏览器支持
所有浏览器都支持background属性。

<b>注释：</b>IE8以及更早的浏览器不支持一个元素多个背景图像。

<b>注释：</b>IE7以及更早的浏览器不支持"inherit"。IE8需要!DOCTYPE。IE9支持"inherit"。

### 定义和用法
background简写属性在一个声明中设置所有的背景属性。
可以设置如下属性：
- background-color
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment
- background-image

如果不设置其中的某个值，也不会出问题，比如background:#ff0000 url('smiley.gif');也是允许的。
通常建议使用这个属性，而不是分别使用单个属性，因为这个属性在较老的浏览器中能够得到更好的支持，而且需要键入的字母也更少。

|默认值：|not specified|
|---|---|

|继承性：|no|
|---|---|

|版本：|CSS1+CSS3|
|---|---|

|JavaScript语法：|object.style.background="white url(paper.gif) repeat-y"|
|---|---|

### 可能的值
|值|描述|CSS|
|---|---|---|
|background-color|规定要使用的背景颜色。|1|
|background-position|规定背景图像的位置。|1|
|background-size|规定背景图片的尺寸。|3|
|background-repeat|规定如何重复背景图像。|1|
|background-origin|规定背景图片的定位区域。|3|
|background-clip|规定背景的绘制区域。|3|
|background-attachment|规定背景图像是否固定或者随着页面的其余部分滚动。|1|
|background-image|规定要使用的背景图像。|1|
|inherit|规定应该从父元素继承background属性的设置。|1|






















