const data = Deno.readTextFileSync("day_2_data.txt");
// const data = "1,1,1,4,99,5,6,0,99";
const oldValues = data.split(",").map((value) => {
  return Number(value);
});

// console.log(values);

const fn = (oldValues, i, j) => {
  const values = [...oldValues];
  values[1] = i;
  values[2] = j;
  for (let index = 0; index < values.length; index += 4) {
    if (values[index] === 1) {
      const index1 = values[index + 1];
      const index2 = values[index + 2];
      const index3 = values[index + 3];

      values[index3] = values[index1] + values[index2];
      continue;
    }

    if (values[index] === 2) {
      const index1 = values[index + 1];
      const index2 = values[index + 2];
      const index3 = values[index + 3];

      values[index3] = values[index1] * values[index2];
      continue;
    }

    if (values[index] === 99) {
      return values;
    }
  }

  return values[0];
};

const fn1 = (codes) => {
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < 100; j += 1) {
      if (fn(codes, i, j) === 19690720) {
        return 100 * i + j;
      }
      console.log(i, j);
    }
  }

  return -1;
};

// console.log(i, j);
console.log(fn1(oldValues));
