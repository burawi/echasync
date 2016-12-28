module.exports = {
    do: function (array, fn, callback) {
        function step(i) {
            if(i < array.length){
                fn(array[i],function () {
                    step( i + 1);
                })
            } else {
                callback();
            }
        }
        step(0);
    }
};
