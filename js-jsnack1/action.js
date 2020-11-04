/* ASSIGNMENT
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
Utilizzare nuova sintassi di JS ES6.
*/

$(document).ready(function () {
  // Creating the racing bikes array (array of objects)
  var racing_bikes = [
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
  console.log('The array of racing bikes is: ' , racing_bikes);
  console.log('');

  // ---------------- Finding out the bike highest weight ----------------
  var lowest_weight = racing_bikes[0].weight;
  console.log(racing_bikes[0].name + ':' , lowest_weight , 'kilograms.');
  // Scanning the array of bikes to compare the weights
  for (var i = 1; i < racing_bikes.length; i++) {
    var current_weight = racing_bikes[i].weight;
    console.log(racing_bikes[i].name + ':' , current_weight, 'kilograms.');
    // Finding the lowest weight
    if (current_weight < lowest_weight) {
      lowest_weight = current_weight;
      var lowest_weight_bike = racing_bikes[i].name;
    }
  }
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
});
