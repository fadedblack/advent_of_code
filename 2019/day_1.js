const data = Deno.readTextFileSync("day_1_data.txt");
// const data = "100756";
let sum = 0;

data.split("\n").forEach((value) => {
  while (value > 0) {
    value = Math.floor(Number(value) / 3) - 2;
    sum += value > 0 ? value : 0;
  }
});

console.log(sum);
