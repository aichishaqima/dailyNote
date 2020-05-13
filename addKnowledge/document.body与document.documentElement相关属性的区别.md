对document.body.scrollHeight和document.documentElement.scrollHeight    document.documentElement.offsetHeight和document.body.offsetHeight      document.documentElement.clientHeight和document.body.clientHeight        document.documentElement.clientTop和document.body.clientTop    document.documentElement.offsetTop和document.body.offsetTop        document.body.scrollTop和document.documentElement.scrollTop都有些疑惑。自己简单测试了一下

得到了些结论，若有不对之处，请指正。

首先是我的测试代码：
```html
   <style rel="stylesheet">
        *{margin: 0px;padding: 0px;}
    </style>
   </head>
   <body style="border: 1px solid black;">
   <div style="width: 200px;height: 2000px;border: 1px solid black;"  id="divText">s</div>
   </body>
```
环境是在FireFox、Chrome、IE、Safari、Opera下：

结论如下：
            //document.body.scrollHeight主流浏览器都是整个文档高度（包括body的边框） 2004px
            //document.documentElement.scrollHeight主流浏览器都是整个文档高度（包括body的边框） 2004px

            //document.body.offsetHeight主流浏览器都是整个文档高度（包括body的边框） 2004px
            //document.documentElement.offsetHeight主流浏览器都是整个文档高度（包括body的边框） 2004px

            //document.documentElement.clientHeight = document.body.clientHeight在IE下位浏览器可见区域高度 673px
            //其他浏览器下是整个文档高度（包括body的边框）2004px
            //document.body.clientHeight 浏览器可显示文档的区域高度。因为浏览器不同可能有差别，根据我的代码以及我的电脑
            //屏幕测试得到 IE=>673px FireFox=>631px Chrome=>663px Safari=>646px Opera=>659px

            //document.documentElement.clientTop = document.body.clientTop主流浏览器都是0。
            // 但是如果是div并且设置了div的边框了的话，div.clientTop就是边框的高度

            //document.body.offsetTop     可以理解为元素距离body上边框下面的一个元素的距离。
            // 在火狐下如果设置body的边框为1px，则该属性的值为-1px，其他浏览器都是0。
            // 在几个主流浏览器下，不管对body设没设置边框，document.documentElement.offsetTop都为0。

            //document.body.scrollTop     在有滚动条的情况下，是整个文档利用滚动条隐藏的多少。举个例子：在FireFox下，假如页面有个
            //div是2000px，并且css有*{margin:0px;padding:0px;},把滚动条滚动到底，这时候整个浏览器提供给页面显示的高度
            //也就是document.body.clientHeight为631px的话，document.body.scrollTop = 2004 - 631 = 1373px。但是safari却
            //认为document.body.scrollTop = document.body.scrollTop = 0
            //document.body.scrollTop主流浏览器都是0。


————————————————
版权声明：本文为CSDN博主「只要思想不滑坡，方法总比困难多！」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qlx_4910/java/article/details/50188363



在设计页面时可能经常会用到固定层的位置，这就需要获取一些html对象的坐标以更灵活的设置目标层的坐标，这里可能就会用到document .body.scrollTop等属性，但是此属性在xhtml标准网页或者更简单的说是带标签的页面里得到的结果是0，如果不要此标签则一切正常，那么在xhtml页面怎么获得body的坐标呢，当然有办法-使用document .documentElement来取代document .body,可以这样写
例：
var top = document .documentElement.scrollTop || document .body.scrollTop;
在javascript里||是个好东西，除了能用在if等条件判断里，还能用在变量赋值上。那么上例等同于下例。
例：

1
var top = document .documentElement.scrollTop ? document .documentElement.scrollTop : document .body.scrollTop;

这么写可以得到很好的兼容性。

相反，如果不做声明的话，document .documentElement.scrollTop反而会显示为0。


得到各个属性如下：

 

复制代码
网页可见区域宽： document .body.clientWidth;
网页可见区域高： document .body.clientHeight;

网页可见区域宽： document .body.offsetWidth   (包括边线的宽);
网页可见区域高： document .body.offsetHeight (包括边线的宽);

网页正文全文宽： document .body.scrollWidth;
网页正文全文高： document .body.scrollHeight;

网页被卷去的高： document .body.scrollTop;
网页被卷去的左： document .body.scrollLeft;

网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;

屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;
屏幕可用工作区宽度：window.screen.availWidth; 
复制代码
 

复制代码
scrollHeight: 获取对象的滚动高度。  
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
scrollWidth:获取对象的滚动宽度

offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置  

event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
  
document .documentElement.scrollTop 垂直方向滚动的值
event.clientX+document .documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量 
复制代码
要获取当前页面的滚动条纵坐标位置，用：

1
document .documentElement.scrollTop;
而不是：
document .body.scrollTop;
documentElement 对应的是 html 标签，而 body 对应的是 body 标签。

 

作者：沐禹辰
出处：http://www.cnblogs.com/renfanzi/
本文版权归作者和博客园共有，欢迎转载，但未经作者同意必须保留此段声明，且在文章页面明显位置给出原文连接。