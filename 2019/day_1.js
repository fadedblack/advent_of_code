const data = Deno.readTextFileSync("day_1_data.txt");

let sum = 0;

data.split("\n").forEach((value) => {
  sum += Math.floor(Number(value) / 3) - 2;
});

console.log(sum);
