# CSS border-spacing 属性

### 实例
为表格设置border-spacing:
```css
table{
    border-collapse:separate;
    border-spacing:10px 50px;
}
```
### 定义和用法
border-spacing属性设置相邻单元格的边框间的距离(仅用于"边框分离"模式)
注释：某些版本的IE浏览器不支持此属性。
#### 说明
该属性指定分隔边框模型中单元格边界之间的距离。在指定的两个长度值中，第一个是水平间隔，第二个是垂直间隔。除非border-collapse被设置为separate，否则将忽略这个属性。尽管这个属性只应用于表，不过它可以由表中的所有元素继承。
|默认值：|not specified|
|---|---|

|继承性：|yes|
|---|---|

|版本：|CSS2|
|---|---|

|JavaScript语法：|object.style.borderSpacing="15px"|
|---|---|---|

### 可能的值
|值|描述|
|---|:---|
|length length|规定相邻单元的边框之间的距离。使用px、cm等单位。不允许使用负值。如果定义一个length参数，那么定义的是水平和垂直间距。如果定义两个length参数，那么第一个设置水平间距，而第二个设置垂直间距。|
|inherit|规定应该从父元素继承border-spacing属性的值。|






















