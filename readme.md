# Installation

```
npm i echasync
```

# Usage

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

`forEachAsync.do(array,fn(next,element,index,array),callback)`
