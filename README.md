# Common Spreadsheet Format utilities
[![Build Status](https://travis-ci.org/eunikitin/csf-utils.svg?branch=master)](https://travis-ci.org/eunikitin/csf-utils)
[![Coverage Status](https://coveralls.io/repos/github/eunikitin/csf-utils/badge.svg?branch=master)](https://coveralls.io/github/eunikitin/csf-utils?branch=master)
[![dependencies Status](https://david-dm.org/eunikitin/csf-utils/status.svg)](https://david-dm.org/eunikitin/csf-utils)
[![devDependencies Status](https://david-dm.org/eunikitin/csf-utils/dev-status.svg)](https://david-dm.org/eunikitin/csf-utils?type=dev)

Contains:
* [excel-column-name](https://www.npmjs.com/package/excel-column-name)
* [excel-cell-parser](https://www.npmjs.com/package/excel-cell-parser)
* [csf-convert](https://www.npmjs.com/package/csf-convert)

## Install
```npm install csf-utils```

## API
#### parseCell(cell)
##### cell
**Required**
Type: string | object
```js
var csfUtils = require('csf-utils');

csfUtils.parseCell('A1'); // { row: 1, column: 1 } 
csfUtils.parseCell({ row: 1, column: 1 }); // A1
```

#### columnName.intToExcelCol(column)
##### column
**Required**
Type: number
```js
var csfUtils = require('csf-utils');

csfUtils.columnName.intToExcelCol(1); // 'A' 
```

#### columnName.excelColToInt(column)
##### column
**Required**
Type: string
```js
var csfUtils = require('csf-utils');

csfUtils.columnName.excelColToInt('A'); // 1 
```

#### convert.sheetToAoa(data)
##### data
**Required**
Type: object
```js
var convert = require('csf-convert');

var sheetData = {
  A1: { t: 's', v: 'A1' },
  C1: { t: 's', v: 'C1' },
  D1: { t: 's', v: 'D1' },
  E1: { t: 's', v: 'E1' },
  A2: { t: 's', v: 'A2' },
  B2: { t: 's', v: 'B2' },
  C2: { t: 's', v: 'C2' },
  E2: { t: 's', v: 'E2' },
  '!ref': 'A1:E2',
};

var aoa = convert(sheetData);
/* result:
[
  [
    { t: 's', v: 'A1' },
    undefined,
    { t: 's', v: 'C1' },
    { t: 's', v: 'D1' },
    { t: 's', v: 'E1' } ],
  [
    { t: 's', v: 'A2' },
    { t: 's', v: 'B2' },
    { t: 's', v: 'C2' },
    undefined,
    { t: 's', v: 'E2' }
  ]
]
 */
```
