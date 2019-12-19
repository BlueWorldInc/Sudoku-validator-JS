function validSolution(board) {

    for (var i = 0; i < 9; i++) {
        var actual = [];
        for (var j = 0; j < 9; j++) {

            if (board[i][j] <= 0 || board[i][j] > 9) {
                return false;
            } else {
                actual.push(board[i][j]);
            }

        }
        if (!isArrayCorrect(actual)) {
            return false;

        }
    }

    for (var i = 0; i < 9; i++) {
        var actual = [];
        for (var j = 0; j < 9; j++) {

            if (board[j][i] <= 0 || board[j][i] > 9) {
                return false;
            } else {

                actual.push(board[j][i]);


            }
        } if (!isArrayCorrect(actual)) {
            return false;
        }

    }

    for (var x = 0; x < 3; x++) {
        for (var z = 0; z < 3; z++) {
            var actual = [];
            for (var i = 0 + 3 * x; i < 3 + 3 * x; i++) {
                for (var j = 0 + 3 * z; j < 3 + 3 * z; j++) {
                    //console.log('x : ' + x + ' z :' + z + ' i : ' + i + ' j : ' + j);
                    //console.log(a[i][j]);
                    actual.push(board[i][j]);
                }
            }
            if (!isArrayCorrect(actual)) {
                return false;
            }
        }

    }
    return true;
}

function isArrayCorrect(a) {
    a.sort();
    //console.log(a);
    correct_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var i = 0; i < 9; i++) {
        if (a[i] != correct_array[i]) {
            return false;
        }
    }
    return true;
}


// var a =   ([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//             [6, 7, 2, 1, 9, 5, 3, 4, 8],
//             [1, 9, 8, 3, 4, 2, 5, 6, 7],
//             [8, 5, 9, 7, 6, 1, 4, 2, 3],
//             [4, 2, 6, 8, 5, 3, 7, 9, 1],
//             [7, 1, 3, 9, 2, 4, 8, 5, 6],
//             [9, 6, 1, 5, 3, 7, 2, 8, 4],
//             [2, 8, 7, 4, 1, 9, 6, 3, 5],
//             [3, 4, 5, 2, 8, 6, 1, 7, 9]])

// //console.log(a[8][6]);

// for (var x = 0; x < 3; x++) {
//     for (var z = 0; z < 3; z++) {
//         for (var i = 0 + 3 * x; i < 3 + 3 * x; i++) {
//             for (var j = 0 + 3 * z; j < 3 + 3 * z; j++) {
//                 console.log('x : ' + x + ' z :' + z + ' i : ' + i + ' j : ' + j);
//                 console.log(a[i][j]);
//             }
//         }
//     }
// }