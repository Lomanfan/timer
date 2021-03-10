
const timeSet = process.argv.slice(2);

for (let time of timeSet) {
  if (!isNaN(time) && time > 0) {
    setTimeout (() => {
      process.stdout.write('#Second'+'\x07')
     }, 1000 * time);             //1 second = 1000 millisecond
  }
};

process.stdout.write('\n');



// timer = function (timeSet) {
// if (timeSet > 0) {
//     setTimeout (() => {
//       process.stdout.write('\x07');
//     }, timeSet);
//   }
// };

// Example usage:
// node timer1.js 10 3 5 15 9 
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

// Confirm that our script can handle some common edge cases.
// For this app, we can think of at least these three:
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.