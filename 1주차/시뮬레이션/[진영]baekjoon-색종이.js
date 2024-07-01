const fs = require('fs');
const MAX_SIZE = 100;

const f = () => {
    const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

    const xys = input.slice(1).map(i => i.trim().split(" ").map(Number));

    let grid = Array.from(Array(MAX_SIZE), () => Array(MAX_SIZE).fill(false));

    for (let xy of xys) {
        fill(grid, xy);
    }

    console.log(getArea(grid));
}

const fill = (grid, xy) => {
    for (let i = xy[0]; i < xy[0] + 10; i ++) {
        for (let j = xy[1]; j < xy[1] + 10; j++) {
            grid[i][j] = true;
        }
    }
}

const getArea = (grid) => {
    let count = 0;

    for (let i = 0; i < MAX_SIZE; i++) {
        for (let j = 0; j < MAX_SIZE; j++) {
            if (grid[i][j]) count++;
        }
    }

    return count;
}

f();