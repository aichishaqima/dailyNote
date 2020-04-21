# HTML DOM readyState属性

### 定义和用法
readyState属性返回当前文档的状态(载入中......)。
该属性返回以下值：
- uninitialized 还未开始载入
- loading 载入中
- interactive 已加载，文档与用户可以开始交互
- complete 载入完成

### 语法
document.readyState

### 浏览器支持
所有主要浏览器都支持readyState属性

### 实例
返回当前文档的载入状态
```html
<html>
<body>

loading status:
<script>
document.write(document.readyState);
</script>

</body>
</html>
```




[原文链接](https://www.runoob.com/jsref/prop-doc-readystate.html)


> 他在车厢里很有礼貌地问坐在旁边的女士：“我抽烟妨碍你吗？”“不，你就像在家里一样好了。”他只能将烟盒重新放回衣袋，叹口气道：“照样不能抽。”


