# CSS background-image 属性

### 实例
```css
body{
    background-image:url(bgimage.gif);
    background-color:#000000;
}
```

### 定义和用法
background-image 属性为元素设置背景图像。
元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。
默认的，背景图像位于元素的左上角，并在水平和垂直方向上重复。

<font color="#ff9955">提示：</font>请设置一种可用的背景颜色，这样的话，假如背景图像不可用，页面也可获得良好的视觉效果。
#### 详细说明
background-image属性会在元素的背景中设置一个图像。
根据background-repeat属性的值，图像可以无限平铺、沿着某个轴(x轴或y轴)平铺，或者根本不平铺。
初始背景图像(原图像)根据background-position属性的值放置。
|默认值：|none|
|---|---|

|继承性：|no|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.backgroundImage="url(stars.gif)"|

### 可能的值
|值|描述|
|---|---|
|url('URL')|指向图像的路径。|
|none|默认值。不显示背景图像。|
|inherit：|规定应该从父元素继承background-image属性的设置|






