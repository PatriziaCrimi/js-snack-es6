/* ASSIGNMENT
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore
utilizzando destructuring e template literal.
Utilizzare nuova sintassi di JS ES6.
*/

$(document).ready(function() {
  // Creating the racing bikes array (array of objects)
  const min_weight = 3;
  const max_weight = 10;
  let racing_bikes = [
    {
      'name' : 'Alchemy Atlas',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'ARC8 Escapee',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Argon 18',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Basso Diamante',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'BH Ultralight',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Bmc Teammachine',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
    {
      'name' : 'Emme4 Superlight',
      'weight' : getRandomNumber(min_weight, max_weight), // Kilograms
    },
  ]
  console.log('The array of racing bikes is:' , racing_bikes, '\n\n');

  // ---------------- Finding out the bike lowest weight ----------------

  // Assigning the first bike as the lightest bike
  let lightest_bike = racing_bikes[0];

  // Scanning the array of bikes to compare the weights (with "forEach")
  racing_bikes.forEach((bike) => {
    // Checking for the lightest bike
    if(bike.weight < lightest_bike.weight) {
      lightest_bike = bike;
    }
  });

  // Check if there are multiple bikes sharing the lowest weight
  let same_weight_bikes = [];
  // Scanning the array of bikes to look for same lowest weight bikes
  racing_bikes.forEach((bike) => {
    if (bike.weight === lightest_bike.weight) {
      same_weight_bikes.push(bike);
    }
  });

  // Printing on screen the results (with template literal)
  if (same_weight_bikes.length > 1) {
    // If the array of same weight bikes has more than one element, there are more bikes sharing the same lowest weight
    console.log(
    `
    There are more bikes sharing the lowest weight of ${lightest_bike.weight} kilograms.
    `
    );
    // Printing the lowest weight on screen HTML
    $('#results > p').text(
    `
    There are more bikes sharing the lowest weight of ${lightest_bike.weight} kilograms. They are:
    `
    );
    // Printing the names of the bikes sharing the lowest weight
    console.log(
    `
    They are:
    `
    );
    // Scanning the array of the same weight bikes to print their names
    same_weight_bikes.forEach((bike) => {
      console.log(
        `       "${bike.name}"`
      );
      $('#results').append(
      `
      <p>"${bike.name}"</p>
      `
      );
    });
  } else {
    // If the array of same weight bikes has only one element, there is only one bike with that lowest weight
    // Destructuring the object "lightest_bike" to access and store its name and weight
    const {name, weight} = lightest_bike;
    console.log(
    `
    The bike with the lowest weight is "${name}" weighing ${weight} kilograms.
    `
    );
    // Printing on screen HTML
    $('#results > p').text(
    `
    The bike with the lowest weight is "${name}" weighing ${weight} kilograms.
    `
    );
  }
});


// ------------------------------ FUNCTIONS ------------------------------

// Generating random number
function getRandomNumber(min, max) {
  let multiplier = 10; // rounding to one figure
  return Math.round((Math.random() * (max - min + 1) + min) * multiplier) / multiplier;
}
