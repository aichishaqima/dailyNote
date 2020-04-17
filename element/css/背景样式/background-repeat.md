# CSS background-repeat 属性

### 实例
```css
body{
    background-image:url(stars-gif);
    background-repeat:repeat-y;
}
```

### 定义和用法
background-repeat属性设置是否及如何重复背景图像。
默认地，背景图像在水平和垂直方向上重复。
#### 详细说明
background-repeat属性定义了图像的平铺模式。
从原图像开始重复，原图像由background-image定义，并根据background-position的值放置。
|默认值：|repeat|
|---|---|

|继承性：|no|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.backgroundRepeat="repeat-y"|
|---|---|

### 提示和注释
<font color="#FF9955">提示：</font>背景图像的位置是根据background-position属性设置的。如果未规定background-position属性，图像会被放置在元素的左上角。

### 可能的值
|值|描述|
|---|---|
|repeat|默认。背景图像将在垂直方向和水平方向重复。|
|repeat-x|背景图像将在水平方向重复。|
|repeat-y|背景图像将在垂直方向重复。|
|no-repeat|背景图像将仅显示一次。|
|inherit|规定应该从父元素继承background-repeat属性的设置|









