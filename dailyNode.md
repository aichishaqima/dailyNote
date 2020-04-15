# 20200414
### 伪类:hover和:active兼容
- IE6及更早版本，支持\<a>元素的4种状态
- IE6浏览器不支持其他元素的:hover和:active
### 链接伪类顺序
链接伪类的顺序，a:hover必须置于a:link和a:visited之后，才有效，a:active必须在a：hover之后，才有效。而link、visited两个伪类之间顺序无所谓，谁在前都可以。

# 20200415
### font属性(简写)
<font color='red'><strong>font:</strong></font>font-style font-variant font-weight font-size/line-height font-family