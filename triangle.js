
console.log(tri(10));
function tri(n) {
    var block = '*';
    var space = ' ';

    for(var i = 1; i <= n; i++) {
        var blockStr = '',
            spaceStr = '',
            string = '';

        for(var t = 0; t < (n - i); t++) {
            spaceStr += space;
        }

        for(var j = 0; j < i; j++) {
            blockStr += block + space;
        }

        string += (spaceStr + blockStr);
        console.log(string);
    }
}
