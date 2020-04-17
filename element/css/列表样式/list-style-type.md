# CSS list-style-type 属性

### 定义和用法
list-style-type属性设置列表标记的类型。

|默认值：|disc|
|---|---|

|继承性：|yes|
|---|---|

|版本：|CSS1|
|---|---|

|JavaScript语法：|object.style.listStyleType="square"|
|---|---|

### 实例
设置不同的列表样式：
```css
ul.cricle{list-style-type:circle;}
ul.square{list-style-type:square;}
ol.upper-roman{list-style-type:upper-roman;}
ol.upper-alpha{list-style-type:lower-alpha;}
```
### 浏览器支持
所有浏览器都支持list-style-type属性。

<b>注释：</b>任何的版本的Internet Explorer(包括IE8)都不支持属性值"decimal-leading-zero"、"lower-greek"、"lower-latin"、"upper-latin"、"armenian"、"georgian"或"inherit"。
### 可能的值
#### CSS2的值
|值|描述|
|---|---|
|none|无标记。|
|disc|默认。标记是实心圆。|
|circle|标记是空心圆。|
|square|标记是空心方块。|
|decimal|标记是数字。|
|decimal-leading-zero|0开头的数字标记。(01,02,03,等。)|
|lower-roman|小写罗马数字(i,ii,iii,iv,v,等。)|
|upper-roman|大写罗马数字(I,II,III,IV,V,等。)|
|lower-alpha|小写英文字母The marker is lower-alpha (a,b,c,d,e,等。)|
|upper-alpha|大写英文字母The marker is upper-alpha (A,B,C,D,E,等。)|
|lower-greek|小写希腊字母(alpha,beta,gamma等。)|
|lower-latin|小写拉丁字母(a,b,c,d,e,等。)|
|upper-latin|大写拉丁字母(A,B,C,D,E,等。)|
|hebrew|传统的希伯来编号方式|
|armenian|	传统的亚美尼亚编号方式|
|georgian|传统的乔治亚编号方式(an,ban,gan等。)|
|cjk-ideographic|	简单的表意数字|
|hiragana|	标记是：a,i,u,e,o,ka,ki等。（日文片假名）|
|katakana|标记是：A,I,U,E,O,KA,KI等。（日文片假名）|
|hiragana-iroha|标记是：i,ro,ha,ni,ho,he,to,等。（日文片假名）|
|katakana-iroha|标记是：I,RO,HA,NI,HO,HE,TO等。（日文片假名）|

#### CSS2.1的值
```
disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | none | inherit
```

