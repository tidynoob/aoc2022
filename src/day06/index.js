import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const checkDuplicates = (array) => {
  const unique = [...new Set(array)];
  return unique.length === array.length;
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  
  const inputArray =input.split('');

  let startQueue = [];
  let int = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (startQueue.length < 4) {
      startQueue.push(inputArray[i]);
    } else if (!checkDuplicates(startQueue)) {
      startQueue.shift();
      startQueue.push(inputArray[i]);
    } else {
      int = i;
      break;
    }

    }

  return int;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const inputArray =input.split('');

  // let distinctArray = [];
  // let int = 0;
  // for (let i = 0; i < inputArray.length; i++) {
  //   if (distinctArray.length === 14) {
  //     int = i;
  //     break;
  //   }
  //   if (!distinctArray.includes(inputArray[i])) {
  //     distinctArray.push(inputArray[i]);
  //   }
  // }

  let startQueue = [];
  let int = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (startQueue.length < 14) {
      startQueue.push(inputArray[i]);
    } else if (!checkDuplicates(startQueue)) {
      startQueue.shift();
      startQueue.push(inputArray[i]);
    } else {
      int = i;
      break;
    }

    }

  return int;
};

run({
  part1: {
    tests: [
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 10,
      },
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 29,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
