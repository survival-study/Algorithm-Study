function solution(brown, yellow) {
    let whole = brown + yellow;
    let n = 0;
    let m = 0;
    
    for (let i = 3; i <= whole / 3; i++) {
        for (let j = 3; j <= i; j++) {
            if ( 2 * (i + j) - 4 === brown && (i - 2) * (j - 2) === yellow) {
                return [i, j];
            }
        }
    }
    return -1;
}