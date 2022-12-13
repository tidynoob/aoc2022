import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

// const dirTree = (dirName, parent = null) => {
//   return {
//     name: dirName,
//     parent,
//     children: [],
//   };
// };

// const file = (fileName, size) => {
//   return {
//     name: fileName,
//     size,
//   };
// };

const getName = (line) => {
  const splitLine = line.split(" ");
  const dirName = splitLine[splitLine.length - 1];
  return dirName;
};

const getSize = (line) => {
  const size = line.split(" ")[0];
  return parseInt(size, 10);
};

const isDir = (line) => {
  if (line.split(" ")[0] === "dir") {
    return true;
  }
  return false;
};

// const getChildren = (tree, array) => {
//   let children = [];
//   const dirName = tree.name;
//   const dirNameString = `$ cd ${dirName}`
//   const dirNameIndex = array.indexOf(dirNameString);

//   let lastIndex = dirNameIndex + 2;
//   while (lastIndex < array.length && array[lastIndex].split(" ")[0] !== "$") {
//     lastIndex++;
//   }

//   for (let i = dirNameIndex + 2; i < lastIndex; i++) {
//     const line = array[i];
//     if (isDir(line)) {
//       const subTree = convertArrayToTree(getName(line), null, array);
//       children.push(subTree);
//     } else {
//       children.push(file(getName(line), getSize(line)));
//     }
//   }

//   return children;
// }

// const convertArrayToTree = (dirName = '/', parent = null, array) => {
//   const tree = dirTree(dirName, parent);
//   tree.children = getChildren(tree, array);
//   return tree;
// }

// const getTreeSize = (tree) => {
//   let size = 0;
//   let stack = [tree];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     for (let i = 0; i < current.children.length; i++) {
//       const child = current.children[i];
//       if (child.size) {
//         size += child.size;
//       } else {
//         stack.push(child);
//       }
//     }
//   }
//   return size;
// }

// const sumTreeSizesLessThan = (tree, size) => {
//   let sum = 0;
//   let stack = [tree];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     let currentSize = getTreeSize(current);
//     if (currentSize < size) {
//       sum += currentSize;
//     }
//     for (let i = 0; i < current.children.length; i++) {
//       const child = current.children[i];
//       if (child.children) {
//         stack.push(child);
//       }
//     }
//   }
//   return sum;
// }

const arraytoString = (array) => {
  let string = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '/') {
    string += array[i];
    } else {
      string += `${array[i]}/`;
    }
  }
  return string;
};

const sumSizesLessThan = (array, size) => {
  let dirs = [];
  let path = [];
  for (let i = 0; i < array.length; i++) {
    const line = array[i];
    if (line.includes("$ cd") && !line.includes("..")) {
      path.push(getName(line));
    } else if (line.includes("$ cd ..")) {
      path.pop();
    } else if (line.includes("$ ls")) {
      continue;
    } else if (!isDir(line)) {
      const currentSize = getSize(line);
      for (let j = 0; j < path.length; j++) {
        const pathDir = path[j];
        const pathToDir = arraytoString(path.slice(0, j + 1));

        if (!dirs.find((dir) => dir.name === pathDir && dir.path === pathToDir)) {
          const newDir = { name: pathDir, path: pathToDir, size: currentSize }
          dirs.push(newDir);
        } else {
          const index = dirs.findIndex((dir) => dir.name === pathDir && dir.path === pathToDir);
          dirs[index].size += currentSize;
        }
      }
    }
  }

  const sum = dirs.reduce((acc, dir) => {
    if (dir.size < size) {
      return acc + dir.size;
    }
    return acc;
  }, 0);

  // console.log(dirs);

  return sum;
}

const arrayToDirs = (array) => {
  let dirs = [];
  let path = [];
  for (let i = 0; i < array.length; i++) {
    const line = array[i];
    if (line.includes("$ cd") && !line.includes("..")) {
      path.push(getName(line));
    } else if (line.includes("$ cd ..")) {
      path.pop();
    } else if (line.includes("$ ls")) {
      continue;
    } else if (!isDir(line)) {
      const currentSize = getSize(line);
      for (let j = 0; j < path.length; j++) {
        const pathDir = path[j];
        const pathToDir = arraytoString(path.slice(0, j + 1));

        if (!dirs.find((dir) => dir.name === pathDir && dir.path === pathToDir)) {
          const newDir = { name: pathDir, path: pathToDir, size: currentSize }
          dirs.push(newDir);
        } else {
          const index = dirs.findIndex((dir) => dir.name === pathDir && dir.path === pathToDir);
          dirs[index].size += currentSize;
        }
      }
    }
  }

  return dirs
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const inputArray = input.split('\n');

  const sum = sumSizesLessThan(inputArray, 100000);

  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const inputArray = input.split('\n');

  const dirs = arrayToDirs(inputArray);

  const totalSpace = 70000000;
  const neededSpace = 30000000;
  const usedSpace = dirs.find((dir) => dir.name === '/').size;
  const freeSpace = totalSpace - usedSpace;
  const spaceToClear = neededSpace - freeSpace;

  const filteredDirs = dirs.filter((dir) => dir.size >= spaceToClear);
  const sortedDirs = filteredDirs.sort((a, b) => a.size - b.size);
  const clearAmount = sortedDirs[0].size;

  return clearAmount;

};

run({
  part1: {
    tests: [
      {
        input: `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
        expected: 95437,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`,
        expected: 24933642,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
