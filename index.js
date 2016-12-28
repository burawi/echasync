module.exports = {
    do: function (array, fn, callback) {
        function step(i) {
            if(i < array.length){
                fn(function () {
                    step( i + 1);
                }, array[i], i, array);
            } else {
                callback();
            }
        }
        step(0);
    }
};
