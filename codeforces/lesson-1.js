var n = 7;
var s = "ABACABA";

var map = {};

for (var i = 0; i < n - 1; i++) {
    var d = s[i] + s[i+1];
    map[d] === undefined ? map[d] = 1 : map[d]++;
}
var max = 0;
var ans = "";
Object.keys(map).map(function(key) {
    if (map[key] > max ) {
        ans = key;
        max = map[key];
    }
});
console.log(map)
console.log(ans)
