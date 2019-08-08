/*
https://www.codewars.com/kata/matrix-rotation/train/javascript
Given a matrix represented as a list of string, such as

###.....
..###...
....###.
.....###
.....###
....###.
..###...
###.....
write a function

rotateClockwise(matrix)

that return its 90° clockwise rotation, for our example:

#......#
#......#
##....##
.#....#.
.##..##.
..####..
..####..
...##...
/!\ You must return a rotated copy of matrix! (matrix must be the same before and after calling your function)
Note that the matrix isn't necessarily a square, though it's always a rectangle!
Please also note that the equality m == rotateClockwise(rotateClockwise(rotateClockwise(rotateClockwise(m)))); (360° clockwise rotation), is not always true because rotateClockwise(['']) => [] and rotateClockwise(['','','']) => [] (empty lines information is lost)
 */

function rotateClockwise(matrix) {
    if (matrix.length === 0) return matrix;
    if (matrix.length === 1) {

    }
    const resultArr = [];
    const splitedArr = [];
    for (let i = 0; i < matrix.length; i++) {
        const rowArr = matrix[i].split('');
        splitedArr.push(rowArr);
        resultArr.push([])

    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < splitedArr.length; j++) {
            resultArr[j][i] = splitedArr[i][j];

        }

    }
    for (let i = 0; i < resultArr.length; i++) {
        resultArr[i] = resultArr[i].join('')

    }

    return resultArr
}

let examplePattern = [
    "###.....",
    "..###...",
    "....###.",
    ".....###",
    ".....###",
    "....###.",
    "..###...",
    "###.....",
]

console.log(rotateClockwise((examplePattern)));
