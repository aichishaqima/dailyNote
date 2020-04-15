# box-sizing
在 CSS 盒子模型的默认定义里，你对一个元素所设置的`width`与`height`只会应用到这个元素的内容区。如果这个元素有任何的`border`或`padding`，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。
```css
box-sizing: content-box;
width: 100%;
```
```css
box-sizing: content-box;
width: 100%;
border: solid #5B6DCD 10px;
padding: 5px;
```
```css
box-sizing: border-box;
width: 100%;
border: solid #5B6DCD 10px;
padding: 5px;
```

box-sizing属性可以被用来调整这些表现
- `content-box`时默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `border-box`告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去（border+padding）的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

高版本的chrome浏览器默认的box-sizing模式就是content-box，可以通过设置，改为border-box。

