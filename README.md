<br>
<p align="center"><strong>svg-path-length</strong></p>

<div align="center">

[![npm](https://img.shields.io/npm/v/svg-path-length.svg?colorB=brightgreen)](https://www.npmjs.com/package/svg-path-length)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/svg-path-length.svg)](https://github.com/ux-ui-pro/svg-path-length)
[![NPM Downloads](https://img.shields.io/npm/dm/svg-path-length.svg?style=flat)](https://www.npmjs.org/package/svg-path-length)

</div>

<p align="center">This class is designed to measure the path length within an SVG and automatically update that length when the size of the SVG element changes.</p>
<br>

&#10148; **Install**

```
yarn add svg-path-length
```

<br>

&#10148; **Import**

```javascript
import SVGPathLength from 'svg-path-length';
```
<br>

&#10148; **Usage**

```javascript
const svgPathLength = new SVGPathLength({
  svg: '.svg',
  path: '.path',
});

svgPathLength.init((length) => {
  console.log(length);
});
```
<br>

&#10148; **License**

svg-path-length is released under MIT license.
