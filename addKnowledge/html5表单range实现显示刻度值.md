# html5 表单 range 实现显示刻度值

html5新增了input="range",可以通过刻度滑动来赋值。如下可以通过拖动刻度实时显示刻度的值。注意：触发时间为oninput


```html
<!DOCTYPE html>

<html>
  <head>
    <meta content="text/html; charset=gbk" http-equiv="content-type">
    <title></title>
    <script>
      function change(){ 
      var num=document.getElementById("range"); 
      var location=document.getElementById("show"); 
      location.value=num.value; 
  } 
  </script>
  </head>
  <body>
    <form> 请输入网址：<input type="url"> <br>
      请输入数值：<input min="1" max="30" id="range" οninput="change()" type="range">
      <input id="show" type="number"> <input value="提交" type="submit"> </form>
  </body>
</html>
```


1. onchange事件与onpropertychange事件的区别：

　　onchange事件在内容改变（两次内容有可能相等）且失去焦点时触发；onpropertychange事件是实时触发，每增加或删除一个字符就会触发，通过js改变也会触发该事件，但是该事件是IE专有。

2. oninput事件与onpropertychange事件的区别：

　　oninput事件是IE之外的大多数浏览器支持的事件，在value改变时实时触发，但是通过js改变value时不会触发；onpropertychange事件是任何属性改变都会触发，而oninput却只在value改变时触发，oninput要通过addEventListener()来注册，onpropertychange注册方法与一般事件相同。

3. oninput与onpropertychange失效的情况：

oninput事件：

　　（1）当脚本中改变value时，不会触发；

　　（2）从浏览器的自动下拉提示中选取时，不会触发；

onpropertychange事件：

　　当input设置为disable=true后，不会触发。



[原文链接](https://blog.csdn.net/qq_15058425/java/article/details/52624874)