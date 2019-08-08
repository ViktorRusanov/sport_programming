// const h = 3;
// const m = 3;
// const n = 3;
// const stack = [];
// const level = [];
// const row = [];
//
// const jam = [
//     [
//         ['1', '.', '.'],
//         ['0', '0', '.'],
//         ['.', '.', '.']
//     ],
//     [
//         ['0', '0', '0'],
//         ['.', '.', '0'],
//         ['.', '0', '0']
//     ],
//     [
//         ['0', '0', '0'],
//         ['0', '.', '.'],
//         ['0', '.', '2']
//     ],
// ];
//
// const point = {
//     value: 0,
//     n: 0,
//     m: 0,
//     h: 0
// };
//
// let countSteps = 0;
// for (let i = 0; i < jam.length; i++) {
//     let curLevel = jam[i];
//     let nextLevel = jam[i + 1];
//     for (let j = 0; j < curLevel.length; j++) {
//         let curRow = level[j];
//         let nextRow = level[j];
//         for (let k = 0; k < curRow.length; k++) {
//             if (curRow[k] === '1') {
//                // nextRow
//             }
//             console.log(row[k]);
//         }
//     }
// }

const str = '(1+2)*(3+4)';

// let labyrinth = [
//     [0, 0, 0, -1],
//     [0, -1, 0, -1],
//     [-1, 0, 0, 0],
//     ['*', -1, -1, 0],
//     [0, -1, -1, 0],
//     [0, 0, -1, 0],
//     [0, 0, -1, 0],
//     [0, 0, 0, 0],
// ];
// const m = 3;
// const n = 7;
// let queue = [];
// let point = {
//     i: 0,
//     j: 0,
//     value: 1,
// };
// let finish = false;
//
// function checkNext(value) {
//     return value === 0 || value === '*';
// }
//
// function search(current) {
//     const {i, j, value} = current;
//     const labValue = labyrinth[i][j];
//
//     if (labValue === '*') {
//         console.log(value);
//         finish = true;
//         return;
//     }
//
//     labyrinth[i][j] = value;
//     if (i < n && checkNext(labyrinth[i + 1][j])) {
//         queue.push({
//             i: i + 1,
//             j,
//             value: value + 1
//         });
//     }
//     if (i > 0 && checkNext(labyrinth[i - 1][j])) {
//         queue.push({
//             i: i - 1,
//             j,
//             value: value + 1
//         });
//     }
//     if (j < m && checkNext(labyrinth[i][j + 1])) {
//         queue.push({
//             i,
//             j: j + 1,
//             value: value + 1
//         });
//     }
//     if (j > 0 && checkNext(labyrinth[i][j - 1])) {
//         queue.push({
//             i,
//             j: j - 1,
//             value: value + 1
//         });
//     }
// }
//
// function lee() {
//     queue.push(point);
//     while (queue.length > 0 && !finish) {
//         // console.log(queue)
//         const current = queue.shift();
//         // console.log(current);
//         console.log(labyrinth);
//         search(current);
//     }
//     console.log('break')
// }
//
// lee()

// let labyrinth = [
//     [
//         ['.', '.', '.', '.'],
//         ['0', '0', '0', '.'],
//         ['*', '.', '.', '.'],
//     ],
//     [
//         ['0', '0', '0', '0'],
//         ['.', '0', '0', '0'],
//         ['.', '0', '.', '0'],
//     ],
//     [
//         ['0', '0', '0', '0'],
//         ['0', '0', '.', '0'],
//         ['.', '0', '.', '0'],
//     ],
//     [
//         ['0', '0', '0', '0'],
//         ['0', '.', '.', '0'],
//         ['.', '.', '0', '0'],
//     ]
// ];
// const m = 2; //n - j
// const n = 3; //h - k
// const h = 3; //m - i
// let queue = [];
// let point = {
//     i: 0,
//     j: 0,
//     k: 0,
//     value: 1,
// };
// let finish = false;
//
// function checkNext(value) {
//     return value === '.' || value === '*';
// }
//
// function search(current) {
//     const {i, j, k, value} = current;
//     const labValue = labyrinth[i][j][k];
//
//     if (labValue === '*') {
//         console.log(value  - 1);
//         finish = true;
//         return;
//     }
//
//     labyrinth[i][j][k] = value;
//
//     if (i < n && checkNext(labyrinth[i + 1][j][k])) {
//         queue.push({
//             i: i + 1,
//             j,
//             k,
//             value: value + 1
//         });
//     }
//     if (i > 0 && checkNext(labyrinth[i - 1][j][k])) {
//         queue.push({
//             i: i - 1,
//             j,
//             k,
//             value: value + 1
//         });
//     }
//     if (j < m && checkNext(labyrinth[i][j + 1][k])) {
//         queue.push({
//             i,
//             j: j + 1,
//             k,
//             value: value + 1
//         });
//     }
//     if (j > 0 && checkNext(labyrinth[i][j - 1][k])) {
//         queue.push({
//             i,
//             j: j - 1,
//             k,
//             value: value + 1
//         });
//     }
//
//     if (k < h && checkNext(labyrinth[i][j][k + 1])) {
//         queue.push({
//             i,
//             j,
//             k: k + 1,
//             value: value + 1
//         });
//     }
//     if (k > 0 && checkNext(labyrinth[i][j][k - 1])) {
//         queue.push({
//             i,
//             j,
//             k: k - 1,
//             value: value + 1
//         });
//     }
//
// }
//
// function lee() {
//     queue.push(point);
//     while (queue.length > 0 && !finish) {
//         const current = queue.shift();
//         search(current);
//     }
//     console.log('break')
// }
//
// lee()

let labyrinth = [
    [
        ['.', '.', '.', '.'],
        ['0', '0', '0', '.'],
        ['*', '.', '.', '.'],
    ],
    [
        ['0', '0', '0', '0'],
        ['.', '0', '0', '0'],
        ['.', '0', '.', '0'],
    ],
    [
        ['0', '0', '0', '0'],
        ['0', '0', '.', '0'],
        ['.', '0', '.', '0'],
    ],
    [
        ['0', '0', '0', '0'],
        ['0', '.', '.', '0'],
        ['.', '.', '0', '0'],
    ]
];
// console.log(labyrinth[0][0][0])
// console.log(labyrinth[1][0][0])
// console.log(labyrinth[0][1][0])
// console.log(labyrinth[0][2][0])
const m = 2; //n - j
const n = 3; //h - k
const h = 3; //m - i
let queue = [];
let point = {
    i: 0,
    j: 0,
    k: 0,
    value: 1,
};
let finish = false;

function checkNext(value) {
    return value === '.' || value === '*';
}

function search(current) {
    const {i, j, k, value} = current;
    const labValue = labyrinth[i][j][k];

    if (labValue === '*') {
        console.log(value  - 1);
        finish = true;
        return;
    }

    labyrinth[i][j][k] = value;

    if (i < n && checkNext(labyrinth[i + 1][j][k])) {
        queue.push({
            i: i + 1,
            j,
            k,
            value: value + 1
        });
    }
    if (i > 0 && checkNext(labyrinth[i - 1][j][k])) {
        queue.push({
            i: i - 1,
            j,
            k,
            value: value + 1
        });
    }
    if (j < m && checkNext(labyrinth[i][j + 1][k])) {
        queue.push({
            i,
            j: j + 1,
            k,
            value: value + 1
        });
    }
    if (j > 0 && checkNext(labyrinth[i][j - 1][k])) {
        queue.push({
            i,
            j: j - 1,
            k,
            value: value + 1
        });
    }

    if (k < h && checkNext(labyrinth[i][j][k + 1])) {
        queue.push({
            i,
            j,
            k: k + 1,
            value: value + 1
        });
    }
    if (k > 0 && checkNext(labyrinth[i][j][k - 1])) {
        queue.push({
            i,
            j,
            k: k - 1,
            value: value + 1
        });
    }

}

function lee() {
    queue.push(point);
    while (queue.length > 0 && !finish) {
        const current = queue.shift();
        search(current);
    }
    console.log('break')
}

lee()
