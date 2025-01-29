const data = Deno.readTextFileSync("day_3_data.txt");
// const data = `R75,D30,R83,U83,L12,D49,R71,U7,L72
// U62,R66,U55,R34,D71,R55,D58,R83`;
// const data = `R8,U5,L5,D3
// U7,R6,D4,L4`;

let x = 0;
let y = 0;

const splitByN = data.split("\n");

const firstLine = [];
const secondLine = [];

splitByN[0].split(",").forEach((val) => {
  if (val.startsWith("R")) {
    x += Number(val.slice(1));
  }
  if (val.startsWith("L")) {
    x -= Number(val.slice(1));
  }
  if (val.startsWith("U")) {
    y += Number(val.slice(1));
  }
  if (val.startsWith("D")) {
    y -= Number(val.slice(1));
  }

  firstLine.push([x, y]);
});

x = 0;
y = 0;

splitByN[1].split(",").forEach((val) => {
  if (val.startsWith("R")) {
    x += Number(val.slice(1));
  }
  if (val.startsWith("L")) {
    x -= Number(val.slice(1));
  }
  if (val.startsWith("U")) {
    y += Number(val.slice(1));
  }
  if (val.startsWith("D")) {
    y -= Number(val.slice(1));
  }

  secondLine.push([x, y]);
});

// console.log(`SecondLine:${secondLine} FirstLine:${firstLine}`);

const intersection = [];

const lieInBetween = (valToCheck, rear1, rear2) => {
  const min = Math.min(rear1, rear2);
  const max = Math.max(rear1, rear2);

  return min <= valToCheck && valToCheck <= max;
};

const fn1 = (outerIndex, innerIndex) => {
  return (
    lieInBetween(
      firstLine[outerIndex][1],
      secondLine[innerIndex][1],
      secondLine[innerIndex + 1][1]
    ) &&
    lieInBetween(
      secondLine[innerIndex][0],
      firstLine[outerIndex][0],
      firstLine[outerIndex + 1][0]
    )
  );
};

const fn2 = (outerIndex, innerIndex) => {
  return (
    lieInBetween(
      firstLine[outerIndex][0],
      secondLine[innerIndex][0],
      secondLine[innerIndex + 1][0]
    ) &&
    lieInBetween(
      secondLine[innerIndex][1],
      firstLine[outerIndex][1],
      firstLine[outerIndex + 1][1]
    )
  );
};

for (let outerIndex = 0; outerIndex < firstLine.length - 1; outerIndex += 1) {
  for (
    let innerIndex = 0;
    innerIndex < secondLine.length - 1;
    innerIndex += 1
  ) {
    if (fn1(outerIndex, innerIndex)) {
      intersection.push([secondLine[innerIndex][0], firstLine[outerIndex][1]]);
    }
    if (fn2(outerIndex, innerIndex)) {
      intersection.push([secondLine[innerIndex][1], firstLine[outerIndex][0]]);
    }
  }
}

const sums = intersection.map(([x, y]) => {
  return Math.abs(x) + Math.abs(y);
});

// console.log(
//   `array1: ${firstLine.join("\n")}\n array2: ${secondLine.join("\n")}`
// );
// // console.log(`intersection: ${intersection.join("\n")}`);
console.log(`sums: ${sums}`);

console.log(`Manhatten: ${Math.min(...sums)}`);

//
