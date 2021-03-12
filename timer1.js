
const timeSet = process.argv.slice(2);

for (let time of timeSet) {
  if (!isNaN(time) && time > 0) {
    setTimeout (() => {
      process.stdout.write('#Second'+'\x07')
     }, 1000 * time);             
  }
};

process.stdout.write('\n');
