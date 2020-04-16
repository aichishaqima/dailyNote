# CSS border-collapse 属性

### 实例
为表格设置合并边框模型：
```css
table{
    border-collapse:collapse;
}
```

### 定义和用法
border-collapse属性设置表格的边框是否被合并为一个单一的边框，还是像在标准的HTML中那样分开显示。
|默认值：|separate|
|---|---|

|继承值：|yes|
|---|---|

|版本：|CSS2|
|---|---|

|JavaScript：|object.style.borderCollapse="collapse"|
|---|---|

### 可能的值
|值|描述|
|---|---|
|separate|默认值。边框会被分开。不会忽略border-spacing和empty-cells属性。|
|collapse|如果可能，边框会合并为一个单一的边框，会忽略border-spacing和empty-cells属性|
|inherit|规定应该从父元素继承border-collapse属性的值|









