# merry.js

![merry.js version](https://img.shields.io/badge/merry.js-v1.0.0-green.svg)
![build](https://img.shields.io/wercker/ci/wercker/docs.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
![Javascript version](https://img.shields.io/badge/Javascript-es6-orange.svg)

"merry"取自海盗船黄金梅利号（Going Merry）中的merry。它是使用了ES6语法封装的一个能够解决常见问题的小型js库。

## 功能/参数
- 禁止图片拖动`imgPrevent:true/false`（默认false）
- 解决低版本IE不能使用document.getElementByClassName()的问题，（默认开启）；
- 生成随机字符串
- 持续更新...

## 如何使用？

### 引用
```
<script src="merry.js"></script>
```
### 正式使用
你仅需新建一个Merry实例，并设置相关参数即可生效！
```
let myMerry = new Merry({
    //imgPrevent :true
});

```