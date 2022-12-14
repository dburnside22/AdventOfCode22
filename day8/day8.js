import { input, testInput } from "./input.js";

const part1 = (dataSource) => {
  console.log("Welcome To Day 8");
  const splitInput = dataSource
    .split("\n")
    .map((line) => line.split("").map(Number));

  // Go ahead and get the edge
  let visableTrees = (splitInput.length + splitInput[0].length) * 2 - 4;
  let possiblyVisableTrees = [];

  const processPossibleTrees = (trees) => {
    trees.forEach((tree) => {
      let treeIsHiddenOnTop = false;
      let treeIsHiddenOnBottom = false;
      let treeIsHiddenOnRight = false;
      let treeIsHiddenOnLeft = false;
      let visableFromEdge = false;

      for (let t = 0; t < tree[0]; t++) {
        const top = splitInput[t][tree[1]];
        if (top >= tree[2]) {
          treeIsHiddenOnTop = true;
        }
        if (!treeIsHiddenOnTop && t == tree[0] - 1) {
          visableFromEdge = true;
        }
      }
      if (!visableFromEdge) {
        for (let b = tree[0] + 1; b < splitInput.length; b++) {
          const bottom = splitInput[b][tree[1]];
          if (bottom >= tree[2]) {
            treeIsHiddenOnBottom = true;
          }
          if (!treeIsHiddenOnBottom && b == splitInput.length - 1) {
            visableFromEdge = true;
          }
        }
      }

      if (!visableFromEdge) {
        for (let r = tree[1] + 1; r < splitInput[0].length; r++) {
          const right = splitInput[tree[0]][r];
          if (right >= tree[2]) {
            treeIsHiddenOnRight = true;
          }
          if (!treeIsHiddenOnRight && r == splitInput[0].length - 1) {
            visableFromEdge = true;
          }
        }
      }

      if (!visableFromEdge) {
        for (let l = 0; l < tree[1]; l++) {
          const left = splitInput[tree[0]][l];
          if (left >= tree[2]) {
            treeIsHiddenOnLeft = true;
          }
          if (!treeIsHiddenOnLeft && l == tree[1] - 1) {
            visableFromEdge = true;
          }
        }
      }

      if (visableFromEdge) {
        visableTrees++;
      }
    });
  };

  for (let column = 1; column < splitInput.length - 1; column++) {
    for (let row = 1; row < splitInput[column].length - 1; row++) {
      const topNeighborTree = splitInput[column - 1][row];
      const rightNeighborTree = splitInput[column][row + 1];
      const bottomNeighborTree = splitInput[column + 1][row];
      const leftNeighborTree = splitInput[column][row - 1];
      const tree = splitInput[column][row];

      if (
        tree > topNeighborTree ||
        tree > rightNeighborTree ||
        tree > bottomNeighborTree ||
        tree > leftNeighborTree
      ) {
        possiblyVisableTrees.push([column, row, tree]);
      }
    }
  }
  processPossibleTrees(possiblyVisableTrees);
  console.log(visableTrees);
};

// part1(testInput);
// part1(input);

// 6689 to high
// the right number 1816
const part2 = (dataSource) => {
  console.log("Welcome To Day 8: part 2");
  const splitInput = dataSource
    .split("\n")
    .map((line) => line.split("").map(Number));

  let possiblyVisableTrees = [];
  let currentHighestScore = 0;

  const getScenicScore = (t, r, b, l, tree) => {
    const score = t * r * b * l;
    if (score > currentHighestScore) {
      currentHighestScore = score;
    }
  };

  const processPossibleTrees = (trees) => {
    trees.forEach((tree) => {
      let treeIsHiddenOnTop = false;
      let treesToTheTop = 0;
      let treeIsHiddenOnBottom = false;
      let treesToTheBottom = 0;
      let treeIsHiddenOnRight = false;
      let treesToTheRight = 0;
      let treeIsHiddenOnLeft = false;
      let treesToTheLeft = 0;

      for (let t = tree[0] - 1; t >= 0; t--) {
        const top = splitInput[t][tree[1]];
        if (!treeIsHiddenOnTop) {
          if (top >= tree[2]) {
            treeIsHiddenOnTop = true;
            treesToTheTop++;
          } else {
            treesToTheTop++;
          }
        }
      }

      for (let b = tree[0] + 1; b < splitInput.length; b++) {
        const bottom = splitInput[b][tree[1]];
        if (!treeIsHiddenOnBottom) {
          if (bottom >= tree[2]) {
            treeIsHiddenOnBottom = true;
            treesToTheBottom++;
          } else {
            treesToTheBottom++;
          }
        }
      }

      for (let r = tree[1] + 1; r < splitInput[0].length; r++) {
        const right = splitInput[tree[0]][r];
        if (!treeIsHiddenOnRight) {
          if (right >= tree[2]) {
            treeIsHiddenOnRight = true;
            treesToTheRight++;
          } else {
            treesToTheRight++;
          }
        }
      }

      for (let l = tree[1] - 1; l >= 0; l--) {
        const left = splitInput[tree[0]][l];
        if (!treeIsHiddenOnLeft) {
          if (left >= tree[2]) {
            treeIsHiddenOnLeft = true;
            treesToTheLeft++;
          } else {
            treesToTheLeft++;
          }
        }
      }
      getScenicScore(
        treesToTheTop,
        treesToTheRight,
        treesToTheBottom,
        treesToTheLeft,
        tree
      );
    });
  };

  for (let column = 1; column < splitInput.length - 1; column++) {
    for (let row = 1; row < splitInput[column].length - 1; row++) {
      const topNeighborTree = splitInput[column - 1][row];
      const rightNeighborTree = splitInput[column][row + 1];
      const bottomNeighborTree = splitInput[column + 1][row];
      const leftNeighborTree = splitInput[column][row - 1];
      const tree = splitInput[column][row];

      if (
        tree > topNeighborTree ||
        tree > rightNeighborTree ||
        tree > bottomNeighborTree ||
        tree > leftNeighborTree
      ) {
        possiblyVisableTrees.push([column, row, tree]);
      }
    }
  }
  processPossibleTrees(possiblyVisableTrees);
  console.log(currentHighestScore);
};

// part2(testInput);
part2(input);
