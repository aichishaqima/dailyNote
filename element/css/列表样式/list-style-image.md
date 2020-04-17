# CSS list-style-image  属性

### 实例
把图像设置为列表中的项目标记：
```css
ul{
    list-style-image:url("/i/arrow.gif");
    list-style-type:square;
}
```
### 浏览器支持
所有浏览器都支持list-style-image属性。

<b>注释：</b>任何版本的Internet Explorer(包括IE8)都不支持属性值"inherit"。
### 定义和用法
list-style-image属性使用图像来替换列表项的标记。
#### 说明
这个属性指定作为一个有序或无序列表项标志的图像。图像相对于列表内容的放置位置通常使用list-style-position属性控制。

<b>注释：</b>请始终规定一个"list-style-type"属性以防图像不可用。
|默认值：|none|
|---|---|

|继承性：|yes|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.listStyleImage="url('/image/blueball.gif')"|
|---|---|

### 可能的值
|值|描述|
|---|---|
|URL|图像的路径|
|none|默认。无图形被显示。|
|inherit|规定应该从父元素继承list-style-image属性的值。|



