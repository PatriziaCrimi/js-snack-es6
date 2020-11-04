/* ASSIGNMENT
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore
utilizzando destructuring e template literal.
Utilizzare nuova sintassi di JS ES6.
*/

$(document).ready(function () {
  // Creating the racing bikes array (array of objects)
  let racing_bikes = [
    {
      'name' : 'Alchemy Atlas',
      'weight' : 8, //Kilograms
    },
    {
      'name' : 'ARC8 Escapee',
      'weight' : 7, //Kilograms
    },
    {
      'name' : 'Argon 18',
      'weight' : 7.8, //Kilograms
    },
    {
      'name' : 'Basso Diamante',
      'weight' : 10, //Kilograms
    },
    {
      'name' : 'BH Ultralight',
      'weight' : 6.9, //Kilograms
    },
    {
      'name' : 'Bmc Teammachine',
      'weight' : 9.5, //Kilograms
    },
    {
      'name' : 'Emme4 Superlight',
      'weight' : 6.8, //Kilograms
    },
  ]
  console.log(
  `
  The array of racing bikes is: ${racing_bikes}
  `
  );

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

  // Printing in console the results (with template literal)
  const {name, weight} = lightest_bike;
  console.log(
  `
  The bike with the lowest weight is "${name}" weighing ${weight} kilograms.
  `
  );

  // Printing on screen the results (with template literal)
  // TO BE DONE

  // VECCHIO CODICE ESERCIZIO SENZA ES6 DA INTEGRARE AL NUOVO (SE NECESSARIO)

  /*
  for (let i = 1; i < racing_bikes.length; i++) {
    var {weight} = racing_bikes[i]
    let current_weight = weight;

    // Finding the lowest weight
    if (current_weight < lowest_weight) {
      lowest_weight = current_weight;
      // var lowest_weight_bike = racing_bikes[i].name;
      var {name} = racing_bikes[i];
    }
  }
  */

  /*
  console.log('');
  // Check for same weight bikes (only if their weight is the lowest weight)
  var same_weight_bikes = [];
  // Scanning the array of bikes to look for same lowest weight bikes
  for (i = 0; i < racing_bikes.length; i++) {
    if (lowest_weight === racing_bikes[i].weight) {
      same_weight_bikes.push(racing_bikes[i].name);
    }
  }
  // Printing on screen the results
  if (same_weight_bikes.length > 1) {
    // If the array of same weight bikes has more than one element, there are more bikes sharing the same lowest weight
    console.log('There are more bikes sharing the lowest weight of', lowest_weight ,'. They are:' , same_weight_bikes);
  } else {
    // If the array of same weight bikes has only one element, there is only one bike with that lowest weight
    console.log('The bike with the lowest weight is: ' + lowest_weight_bike + ' weighing' , lowest_weight, 'kilograms.');
  }
  */

});
