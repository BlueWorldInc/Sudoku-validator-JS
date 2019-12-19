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
    correct_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var i = 0; i < 9; i++) {
        if (a[i] != correct_array[i]) {
            return false;
        }
    }
    return true;
}