
const timeSet = process.argv.slice(2);
// console.log(timeSet); []

for (let time of timeSet) {

  if (!isNaN(time) && time > 0) {

    setTimeout (() => {
      process.stdout.write('#Second'+'\x07')
     }, 1000 * time);             

  }

};


//Edge Cases:
//No numbers are provided
//An input is a negative number
//An input is not a number