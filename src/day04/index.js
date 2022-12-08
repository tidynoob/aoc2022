import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const splitInput = input.split("\n");
  let count = 0;
  for (let i=0; i<splitInput.length; i++) {
    // console.log(splitInput[i]);
    const string = splitInput[i];
    const splitString = string.split(",");
    const cleanedString = splitString.map((string) => {
      const rangeMin = parseInt(string.split("-")[0]);
      const rangeMax = parseInt(string.split("-")[1]);
      return {rangeMin, rangeMax};
    });
  if (cleanedString[0].rangeMin <= cleanedString[1].rangeMin && cleanedString[1].rangeMax <= cleanedString[0].rangeMax ||
      cleanedString[1].rangeMin <= cleanedString[0].rangeMin && cleanedString[0].rangeMax <= cleanedString[1].rangeMax) {
    // console.log(cleanedString[0].rangeMin, cleanedString[0].rangeMax, cleanedString[1].rangeMin, cleanedString[1].rangeMax)
    count++;
  }
  }

  return count;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const splitInput = input.split("\n");
  let count = 0;
  for (let i=0; i<splitInput.length; i++) {
    // console.log(splitInput[i]);
    const string = splitInput[i];
    const splitString = string.split(",");
    const cleanedString = splitString.map((string) => {
      const rangeMin = parseInt(string.split("-")[0]);
      const rangeMax = parseInt(string.split("-")[1]);
      return {rangeMin, rangeMax};
    });
  if (cleanedString[0].rangeMin <= cleanedString[1].rangeMax && cleanedString[1].rangeMin <= cleanedString[0].rangeMax ||
      cleanedString[1].rangeMin <= cleanedString[0].rangeMax && cleanedString[0].rangeMin <= cleanedString[1].rangeMax) {
    // console.log(cleanedString[0].rangeMin, cleanedString[0].rangeMax, cleanedString[1].rangeMin, cleanedString[1].rangeMax)
    count++;
  }
  }

  return count;
};

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
