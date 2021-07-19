const a = Number(process.argv[2]);
let i = 3;
let sum = a;

while (Number(process.argv[i])) {
  sum += Number(process.argv[i]);
  i++;
}

console.log(sum);
