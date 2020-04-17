# CSS background-position 属性

### 实例
如何定位背景图像：
```css
body{
    background-image:url('bgimage.gif');
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
}
```

### 定义和用法
background-position 属性设置图像的起始位置。
这个属性设置背景原图像(由background-image定义)的位置，背景图像如果要重复，将从这一点开始。

<font color="#FF9955">提示：</font>您需要把background-attachment属性设置为"fixed"，才能保证该属性在Firefox和Opera中正常工作。
|默认值：|0% 0%|
|---|---|

|继承性：|no|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.backgroundPosition="center"|
|---|---|

### 可能的值
|值|描述|
|---|---|
|top left|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|top center|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|top right|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|center left|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|center center|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|center right|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|bottom left|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|bottom center|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|bottom right|如果您规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|x% y%|第一个值是水平位置，第二个值是垂直位置。左上角是0% 0%。右下角是100% 100%。如果您仅规定了一个值，另一个值将是50%。|
|xpos ypos|第一个值是水平位置，第二个值是垂直位置。左上角是0 0。单位是像素(0px 0px)或任何其他的CSS单位。如果您仅规定了一个值，另一个值将是50%。您可以混合使用%和position值。|











