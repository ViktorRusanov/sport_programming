/* https://www.codewars.com/kata/find-the-smallest/train/javascript
You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another place in the number.

    Doing so, find the smallest number you can get.

    #Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

    1) the smallest number you got
2) the index i of the digit d you took, i as small as possible
3) the index j (as small as possible) where you insert this digit d to have the smallest number.
    Example:

smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

smallest(209917) --> [29917, 0, 1] or ...

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
index `i` in [29917, 0, 1].
29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

smallest(1000000) --> [1, 0, 6] or ...
*/
// function testing(n, res) {
//     Test.assertSimilar(smallest(n), res);
// }
// Test.describe("Basic tests",function() {
//     Test.it("smallest",function() {
//         testing(261235, [126235, 2, 0]);
//         testing(209917, [29917, 0, 1]);
//         testing(285365, [238565, 3, 1]);
//         testing(269045, [26945, 3, 0]);
//         testing(296837, [239687, 4, 1]);
//     })})


function smallest(n) {
    const arr = n.toString().split('').map(s => Number(s));
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    if (min === 0) {
        console.log([[...arr.slice(0, index),...arr.slice(index + 1, arr.length)].join(''), index, 0])
    }
    console.log(arr)
    console.log(min)
    console.log(index)
}

smallest(209917);
