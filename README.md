# es6-fastclick

> 基于 fastclick 的es6版本 修复了众多bug

## 引用方法

- 推荐作为依赖使用

  - `npm install es6-fastclick --save`

## 起步

##### 1、最简单的例子

``` js
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      if (!(typeof FastClick === 'undefined')) {
        FastClick.attach(document.body);
      }
    }, false);
  }
```
