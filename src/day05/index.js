import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const splitInput = input.split("\n");

  const grid = splitInput.splice(0, splitInput.indexOf(""));

  let stacks = {};
  grid[grid.length - 1].split("").forEach(element => {
    if (element !== " ") stacks[element] = [];
    
  });

  for (let i = grid.length - 2; i >= 0; i--) {
    const row = grid[i];
    let colCount = 1;
    for (let j = 1; j < row.length; j += 4, colCount++) {
      if (row[j] !== " ") stacks[colCount].push(row[j]);
    }
  }

  for (let i = 1; i < splitInput.length; i++) {
    const phrase = splitInput[i].split(" ");
    const howMany = parseInt(phrase[1]);
    const from = parseInt(phrase[3]);
    const to = parseInt(phrase[5]);
    for (let j = 0; j < howMany; j++) {
      stacks[to].push(stacks[from].pop());
    }
  }

  let arr = [];
  for (let i = 1; i <= Object.keys(stacks).length; i++) {
    arr.push(stacks[i][stacks[i].length - 1]);
  }

  return arr.join("");
};





const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  
  const splitInput = input.split("\n");

  const grid = splitInput.splice(0, splitInput.indexOf(""));

  let stacks = {};
  grid[grid.length - 1].split("").forEach(element => {
    if (element !== " ") stacks[element] = [];
    
  });

  for (let i = grid.length - 2; i >= 0; i--) {
    const row = grid[i];
    let colCount = 1;
    for (let j = 1; j < row.length; j += 4, colCount++) {
      if (row[j] !== " ") stacks[colCount].push(row[j]);
    }
  }

  for (let i = 1; i < splitInput.length; i++) {
    const phrase = splitInput[i].split(" ");
    const howMany = parseInt(phrase[1]);
    const from = parseInt(phrase[3]);
    const to = parseInt(phrase[5]);
    stacks[to] = [...stacks[to], ...stacks[from].splice(stacks[from].length - howMany, howMany)]
  }

  let arr = [];
  for (let i = 1; i <= Object.keys(stacks).length; i++) {
    arr.push(stacks[i][stacks[i].length - 1]);
  }

  return arr.join("");
};

run({
  part1: {
    tests: [
      {
        input: 
`    [D]    
[N] [C]    
[Z] [M] [P]
  1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "CMZ",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: 
`    [D]    
[N] [C]    
[Z] [M] [P]
  1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "MCD",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  onlyTests: false,
});
