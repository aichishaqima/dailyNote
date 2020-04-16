# 20200414
### 伪类:hover和:active兼容
- IE6及更早版本，支持\<a>元素的4种状态
- IE6浏览器不支持其他元素的:hover和:active
### 链接伪类顺序
链接伪类的顺序，a:hover必须置于a:link和a:visited之后，才有效，a:active必须在a：hover之后，才有效。而link、visited两个伪类之间顺序无所谓，谁在前都可以。

# 20200415
### font属性(简写)
<font color='red'><strong>font:</strong></font>font-style font-variant font-weight font-size/line-height font-family
### padding不能为负，margin可以为负

#20200416
#### 边框颜色默认和文字颜色相同
```html
<style>
    .demoBgc{
    color:red;
    width:300px;
    height:300px;
    background-color:green;
    border:20px solid;
}
</style>

<body>
    <div class="demoBgc">
        吃葡萄不吐葡萄皮
    </div>
</bady>
```
#### RGBA 颜色值得到以下浏览器的支持：IE9+、Firefox 3+、Chrome、Safari 以及 Opera 10+
#### 任何版本的Internet Explorer(包括IE8)都不支持属性值"inherit"

