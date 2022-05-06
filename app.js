import { cereals } from './cereals.js';

const cerealListEl = document.getElementById('cereals');

for (let cereal of cereals) {
    const cerealDiv = renderCereal(cereal);
    cerealListEl.append(cerealDiv);
}

// console.log(cereals);

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
