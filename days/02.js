import { readFileSync } from "node:fs";

const lines = readFileSync("./days/02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split(" ")); // Parse each line into a number

const moves = {
    rock: 1,
    paper: 2,
    scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors
}

function score(enemyMove, ourMove) {
    if (enemyMove === ourMove) {
      return ourMove + 3;
    }
    if (
      (enemyMove === moves.rock && ourMove === moves.paper) ||
      (enemyMove === moves.paper && ourMove === moves.scissors) ||
      (enemyMove === moves.scissors && ourMove === moves.rock)
    ) {
      // we win
      return ourMove + 6;
    }
    // we lose
    return ourMove;
}

const solution = {
  A: {
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  }
}

function part1() {
  const outcomes = lines.map((line) => {
    const enemyMove = mapInput[line[0]];
    const ourMove = mapInput[line[1]];
    return score(enemyMove, ourMove);
  });
  console.log(`Part One:`, outcomes.reduce((a, b) => a + b, 0));
}



function part2() {
  const outcomes = lines.map((line) => {
    const enemyMove = mapInput[line[0]];
    const ourMove = solution[line[0]][line[1]];
    return score(enemyMove, ourMove);
  });
  console.log(`Part Two:`, outcomes.reduce((a, b) => a + b, 0));
}

part1();
part2();