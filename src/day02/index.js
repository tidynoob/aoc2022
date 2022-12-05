import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const map = {
    X: {
      points: 1,
      againstPoints: {
        A: 3,
        B: 0,
        C: 6
      }
    },
    Y: {
      points: 2,
      againstPoints: {
        A: 6,
        B: 3,
        C: 0
      }
    },
    Z: {
      points: 3,
      againstPoints: {
        A: 0,
        B: 6,
        C: 3
      }
    }
  };

  const splitString = input.split(/\r?\n|\r|\n/g);

  let points = 0;
  for (let i = 0; i < splitString.length; i++) {

    const line = splitString[i];
    const splitLine = line.split(" ");
    const player = splitLine[1];
    const against = splitLine[0];

    points += map[player].points + map[player].againstPoints[against];
  }

  // console.log(points);

  return points;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const map = {
    X: {
      points: 0,
      againstPoints: {
        A: 3,
        B: 1,
        C: 2
      }
    },
    Y: {
      points: 3,
      againstPoints: {
        A: 1,
        B: 2,
        C: 3
      }
    },
    Z: {
      points: 6,
      againstPoints: {
        A: 2,
        B: 3,
        C: 1
      }
    }
  };

  const splitString = input.split(/\r?\n|\r|\n/g);

  let points = 0;
  for (let i = 0; i < splitString.length; i++) {

    const line = splitString[i];
    const splitLine = line.split(" ");
    const player = splitLine[1];
    const against = splitLine[0];

    points += map[player].points + map[player].againstPoints[against];
  }

  // console.log(points);

  return points;

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: `
      //   A Y
      //   B X
      //   C Z`,
      //   expected: 15,
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
