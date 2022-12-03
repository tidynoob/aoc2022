import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const splitString = input.split(/\r?\n|\r|\n/g);
  const numbers = splitString.map((x) => parseInt(x, 10));
  let arrays = [];
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!numbers[i]) {
      arrays.push(array);
      // console.log(array);
      array = [];
    } else {
      array.push(numbers[i]);
    }

  }

  if (array.length > 0) {
    arrays.push(array);
  }


  let sums = arrays.map(array => {
    return array.reduce((a, b) => a + b, 0);
  })

  return Math.max(...sums);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const splitString = input.split(/\r?\n|\r|\n/g);
  const numbers = splitString.map((x) => parseInt(x, 10));
  let arrays = [];
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!numbers[i]) {
      arrays.push(array);
      // console.log(array);
      array = [];
    } else {
      array.push(numbers[i]);
    }

  }

  if (array.length > 0) {
    arrays.push(array);
  }


  let sums = arrays.map(array => {
    return array.reduce((a, b) => a + b, 0);
  })

  let sorted = sums.sort((a, b) => b - a);


  return sorted[0] + sorted[1] + sorted[2];
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
