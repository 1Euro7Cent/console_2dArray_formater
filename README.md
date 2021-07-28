## Install
```
npm i console_2darray_formater
```

## Import
```js
const format = require('console_2darray_formater')
```

## Use
```js
// first arg is the array to format
// second arg is if the formated array should have commas

//it returns a STRING!
console.log(format([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 'a', 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
], true));

// it is only tested and meant to be used as 2d array formater

/* Expected output:
[0,0,0,0,0,0,0,0,0]
[0,0,0,0,0,0,0,0,0]
[0,0,0,0,0,0,0,0,0]
[0,0,0,0,2,0,0,0,0]
[0,0,0,0,0,0,0,0,0]
[0,0,0,6,0,0,0,0,0]
[0,0,0,0,0,a,0,0,0]
[0,0,0,0,0,0,0,0,0]
[0,0,0,0,0,0,0,0,0]
*/
``` 