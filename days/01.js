import { readFileSync } from "node:fs";

const elves = readFileSync("./days/01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline

function mostCalories() {
    const kcals = elves.map((elf) => {
        const kcals = elf.split('\n').map(Number);
        return kcals.reduce((previous, current) => previous + current, 0);
    });

    const sortArray = kcals.sort(function(b, a) {
      return a - b;
    })

    const topThree = sortArray.slice(0, 3);

    let sum = 0;
    for (const nums of topThree) {
      sum += nums;
    }

    console.log(`Most calories:`, Math.max(...kcals));
    console.log(`Top three:`, sum);
}

mostCalories();


