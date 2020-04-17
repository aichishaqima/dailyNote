# CSS list-style-position  属性

### 实例
规定列表中列表项目标记的位置：
```css
ul{
    list-style-position:inside;
}
```
### 浏览器支持
所有浏览器都支持list-style-position属性。

<b>注释：</b>任何版本的Internet Explorer(包括IE8)都不支持属性值"inherit"。
### 定义和用法
list-style-position属性设置在何处放置列表项标记。
#### 说明
该属性用于声明列表标志相对于列表项内容的位置。外部(outside)标志会放在离列表项边框边界一定距离外，不过这距离在CSS中未定义。内部(inside)标志处理为好像它们是插入在列表项内容最前面的行内元素一样。

|默认值：|outside|
|---|---|

|继承性：|yes|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.listStylePosition="inside"|
|---|---|

### 可能的值
|值|描述|
|---|---|
|inside|列表项目标记放置在文本以内，且环绕文本根据标记对齐。|
|outside|默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。|
|inherit|规定应该从父元素继承list-style-position属性的值。|

> 买了个灯泡，问老板为什么不亮？老板说：这是限亮版。