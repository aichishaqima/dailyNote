//ECMAScript通过RegExp类型来支持正则表达式。使用下面类似Perl的语法，就可以创建一个正则表达式。
//var express = / pattern / flags;
//其中的模式(pattern)部分可以是任何简答或复杂的正则表达式，可以包括字符类、限定符、分组、向前查找以及反向引用。每个正则表达式都可带有一或多个标志(flags)，用以标明正则表达式的行为。正则表达式的匹配模式支持下列3个标志。
//g：表示全局(global)模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
//i：表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写；
//m：表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
/*
 *匹配字符串中所有"at"的实例
 */
var  pattern1 = /at/g;
/*
 *匹配第一个"bat"或"cat"，不区分大小写
 */i
var  pattern2 = /[bc]at/i;
/*
 *匹配所有以"at"结尾的3个字符的组合，不区分大小写
 */
var  pattern3 = /.at/gi;





















