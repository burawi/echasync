**_Watch [this video](https://www.youtube.com/watch?v=GjZGnrdnMyg) to see an example_**

# Installation

```
npm install echasync
```

# Usage

**_This is wrote following the [OADS Standards](https://github.com/ODNA/OADS)._**

```javascript
echasync.do([loopedArray],operation(next(),element,#index,[loopedArray]),callback())
```

Loops through an array asynchronously.
- [loopedArray]: The array you want loop through.
- operation(): The function you want to run for each element in the array.
    - next(): When you call to this function, you move to the next element.
    - element: The value of the element being handled.
    - #index: The index of the element being handled.
    - [loopedArray]: The array you are looping through.
- callback(): The function to run when all the elements are been handled.

Eg:

```javascript
var echasync = require('echasync');
var files = ['1.txt','2.txt','3.txt','4.txt','5.txt'];
var contents = [];
echasync.do(files,function (next,filename,index,files) {
    fs.readFile(filename,function(err,data){
        if(!err) {
            contents.push(data);
            next();
        }
    });
},function () {
    console.log(contents);
});
```
