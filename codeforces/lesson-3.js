// https://codeforces.com/contest/1020/problem/B

var n = 3;
var p = [2, 3, 2];

var arrP = [];

function run() {
    for (var i = 1; i <= n; i++) {
        arrP.push({value: i, isVisited: false});
    }
}

function dfs() {
    console.log(arrP)
    for (var i = 0; i < n; i++) {
        if (arrP[i].isVisited) {
            console.log(arrP[i])
        } else {
            search(arrP[i], p[i])
        }
    }
}
function search(vertax, link) {
    console.log(vertax)
    // console.log(link - 1)
    // console.log(vertax[link-1])
    if (arrP[link-1].isVisited) {
        console.log(arrP[link-1])
        return
    }
    arrP[link-1].isVisited = true;
    search(arrP[link-1], p[link-1])

}
run()
dfs()
