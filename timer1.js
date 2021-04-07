
const timeSet = process.argv.slice(2)

let numTime = [];

timeSet.forEach((time) => {
  numTime.push(Number(time));
});

numTime.sort(function (a, b) { return a - b; });

console.log(numTime);

let total = 0;

for (let i = 0; i < numTime.length; i++) {

  total += i > 0 ? numTime[i] : 0;

  setTimeout(() => {
    process.stdout.write(`${numTime[i]} Seconds` + '\x07')
  }, 1000 * (total + numTime[i]));

};
