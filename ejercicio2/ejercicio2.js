'use strict'
let ages = [15, 50, 45];
ages.splice(0,"20");
alert(ages["20"]);
for (let i = 0; i < ages.length; i++) {
  if (ages[i] > 25) {
    alert(ages[i]);
  }
}