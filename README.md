# merry.js

![merry.js version](https://img.shields.io/badge/merry.js-v1.0.0-green.svg)
![build](https://img.shields.io/wercker/ci/wercker/docs.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
![Javascript version](https://img.shields.io/badge/Javascript-es6-orange.svg)

"merry"取自海盗船黄金梅利号（Going Merry）中的merry。它是使用了ES6语法封装的一个能够解决常见问题的小型js库，或者说是工具类。

## 功能/参数
- 禁止图片拖动`imgPrevent:true/false`（默认`false`）
- 解决低版本IE不能使用`document.getElementByClassName()`的问题，（默认开启）
- 生成随机字符串`randomStr(length, dictionary)``,一共有两个参数:

  - `length`随机字符串的长度
  - `dictionary`，自定义字典，字符串类型。为空时使用默认字典：`a-zA-Z0-9+=`，共64位
- 首字母大写`capitalize(str)`
- 持续更新...

## 如何使用？
### 下载
```javascript
git clone https://github.com/simmzl/merry.js.git
```
下载即用，无需安装依赖。
### 引用
#### script 引用
```javascript
<script src="merry.min.js"></script>
```
#### import 引用
```javascript
import Merry from "merry.min.js";
```
### 正式使用
你仅需新建一个Merry实例，即可设置相关参数并使用方法。

```javascript
let my = new Merry({
    imgPrevent :true
});

// 从默认字典中生成100长度的随机字符串
my.randomStr(100);

// 从`“abcd1234”`中生成100长度的随机字符串
my.randomStr(100, "abcd1234");

// 首字母大写`capitalize(str)
my.capitalize("simmzl");
// Simmzl
```