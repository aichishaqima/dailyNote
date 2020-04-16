# CSS background-color 属性

### 实例
```css
body{
    background-color:yellow;
}
h1{
    background-color:#00ff00;
}
p{
    background-color:rgb(255,0,255);
}
```

### 定义和用法
background-color 属性设置元素的背景颜色
#### 元素背景的范围
background-color属性为元素设置一种纯色。这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界(但不包括外边距)。如果边框有透明部分(如虚线边框)，会透过这些透明部分显示出背景色。
#### transparent值
尽管在大多数情况下，没有必要使用transparent。不过如果您不希望某元素拥有背景色，同时又不希望用户对浏览器的颜色设置影响到您的设计，那么设置transparent值还是有必要的。
|默认值：|transparent|
|---|---|

|继承性：|no|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.backgroundColor=""|
|---|---|

### 可能的值
|值|描述|
|---|---|
|color_name|规定颜色值为颜色名称的背景颜色(比如red)。|
|hex_number|规定颜色值为十六进制值的背景颜色(比如#ff0000)。|
|rgb_number|规定颜色值为rgb代码的背景颜色(比如rgb(255,0,0))。|
|transparent|默认。背景颜色为透明。|
|inherit|规定应该从父元素继承background-color属性的设置。|