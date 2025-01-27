const data = Deno.readTextFileSync("day_2_data.txt");
// const data = "1,1,1,4,99,5,6,0,99";
const values = data.split(",").map((value) => {
  return Number(value);
});

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
    break;
  }
}

console.log(values[0]);
