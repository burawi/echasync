# Installation

```
npm i foreach-async
```

# Usage

```javascript
var forEachAsync = require('foreach-async');
var files = ['1.txt','2.txt','3.txt','4.txt','5.txt'];
var contents = [];
forEachAsync.do(files,function (filename,next) {
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

`forEachAsync.do(array,fn(element,next),callback)`
