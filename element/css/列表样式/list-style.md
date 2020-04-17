# CSS list-style  属性

### 实例
把图像设置为列表中的列表项目标记：
```css
ul{
    list-style:square inside url('/i/arrow.gif');
}
```
### 浏览器支持
所有浏览器都支持list-style属性。

<b>注释：</b>任何版本的Internet Explorer(包括IE8)都不支持属性值"inherit"。

### 定义和用法
list-style简写属性在一个声明中设置所有的列表属性。
#### 说明
该属性是一个简写属性，涵盖了所有其他列表样式属性。由于它应用到所有display为list-item的元素，所以在普通的HTML和XHTML中只能用于li元素，不过实际上它可以应用到任何元素，并由list-item元素继承。
可以按顺序设置如下属性：
- list-style-type
- list-style-position
- list-style-image

可以不设置其中的某个值，比如"list-style:circle inside;"也是允许的。未设置的属性会使用其默认值。

|默认值：|disc outside none|
|---|---|

|继承性：|yes|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.listStyle="decimal inside"|
|---|---|

### 可能的值
|值|描述|
|---|---|
|list-style-type|设置列表项标记的类型。参阅：[list-style-type](list-style-type.md)中可能的值。|
|list-style-position|设置在何处放置列表项标记。参阅：[list-style-position](list-style-position.md)中可能的值。|
|list-style-image|使用图像来替换列表项的标记。参阅：[list-style-image](list-style-image.md)中可能的值。|
|inherit|规定应该从父元素继承list-style属性的值|



> 一个画家结婚了。蜜月之后，有人问新娘：“婚后生活怎么样？”她回答说：“太好了！我丈夫画画，我做饭。然后，我们就猜测他作的画和我做的饭究竟是什么。”


