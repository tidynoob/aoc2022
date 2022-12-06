import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const splitInput = input.split("\n");
  
  const cleanedInput = splitInput.map((string) => {
    return string.trim();
  });
  // console.log(cleanedInput);
  let values = 0;
  let string = "";
  let firstHalf = "";
  let secondHalf = "";

  for (let i = 0; i < cleanedInput.length; i++) {
    string = cleanedInput[i];
    // console.log(string, string.length);
    firstHalf = string.slice(0, Math.floor(string.length / 2));
    // console.log(firstHalf, firstHalf.length);
    secondHalf = string.slice(Math.floor(string.length / 2));
    // console.log(secondHalf);
    for (let j = 0; j < firstHalf.length; j++) {
        const char = firstHalf[j];
        if (secondHalf.includes(char)) {
          // console.log(char);
          const upperCase = char.toUpperCase();
          const upperCaseCheck = upperCase === char;
          if (upperCaseCheck) {
            values += upperCase.charCodeAt(0) - 64 + 26;
          } else {
            values += upperCase.charCodeAt(0) - 64;
          }
          break;
        }
      }
  }
  return values
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const splitInput = input.split("\n");
  const cleanedInput = splitInput.map((string) => {
    return string.trim();
  });

  let groupArray = [];
  let array = [];
  for (let i = 0; i < cleanedInput.length; i++) {
    const string = cleanedInput[i];
    if (i % 3 === 0) {
      if (array.length > 0) groupArray.push(array);
      array = [];
      array.push(string);
    } else {
      array.push(string);
    }
  };
  if (array.length > 0) groupArray.push(array);
  let values = 0;
  for (let i = 0; i < groupArray.length; i++) {
    for (let j = 0; j < groupArray[i][0].length; j++) {
      const char = groupArray[i][0][j];
      if (groupArray[i][1].includes(char) && groupArray[i][2].includes(char)) {
          const upperCase = char.toUpperCase();
          const upperCaseCheck = upperCase === char;
          if (upperCaseCheck) {
            values += upperCase.charCodeAt(0) - 64 + 26;
          } else {
            values += upperCase.charCodeAt(0) - 64;
          }
          break;
      }
    }
  }

  return values;
};

run({
  part1: {
    tests: [
      // {
      //   input: `vJrwpWtwJgWrhcsFMMfFFhFp
      //           jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
      //           PmmdzqPrVvPwwTWBwg
      //           wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      //           ttgJtRGJQctTZtZT
      //           CrZsJsPPZsGzwwsLwLmpwMDw`,
      //   expected: 157,
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
