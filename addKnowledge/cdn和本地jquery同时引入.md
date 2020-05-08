项目中一般同时引入cdn和本地文件

```html

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.js"></script>
<script>
    window.jQuery||document.write('<script src="js/jquery.js"><\/script>');
</script>





```






