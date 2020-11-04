/* ASSIGNMENT
A partire da un array di oggetti,
creare una copia dell'array
e aggiungere ai singoli elementi dell'array una nuova proprietà "position"
che contiene una lettera casuale.
Utilizzare nuova sintassi di JS ES6.
*/

$(document).ready(function () {
  // Creating an array of objects
  var movies_list = [
    {
      'title' : 'Fight Club',
      'director' : 'David Fincher',
      'year': '1999',
    },
    {
      'title' : 'Inception',
      'director' : 'Christopher Nolan',
      'year': '2010',
    },
    {
      'title' : 'Shutter Island',
      'director' : 'Martin Scorsese',
      'year': '2010',
    },
    {
      'title' : 'Into The Wild',
      'director' : 'Sean Penn',
      'year': '2007',
    },
    {
      'title' : 'Vanilla Sky',
      'director' : 'Cameron Crowe',
      'year': '2001',
    },
    {
      'title' : 'Devil\'s Advocate',
      'director' : 'Taylor Hackford',
      'year': '1997',
    },
    {
      'title' : 'Eternal Sunshine of the Spotless Mind',
      'director' : 'Michel Gondry',
      'year': '2004',
    },
    {
      'title' : 'Number 23',
      'director' : 'Joel Schumacher',
      'year': '2007',
    },
  ];
  console.log('The array of movies is:' , movies_list , '\n\n');

  // Creating a copy of the movies array and adding the new property and value
  var movies_copy = [];

  // --------------------- SOLUTION 1 - FOR-IN ---------------------

  // Scanning the original movies array to copy it element by element
  for (let i = 0; i < movies_list.length; i++) {
    // Scanning every object from the original array to copy its properties and values (one by one)
    var single_movie_copy = {};
    for (var key in movies_list[i]) {
      // Creating the current property : value
      single_movie_copy[key] = movies_list[i][key];
    }
    movies_copy.push(single_movie_copy);
  }

  // Scanning the copy of the movies array to add the new property and value
  for (let i = 0; i < movies_copy.length; i++) {
    // Generating random letter (with function)
    var random_letter = getRndCharacter();
    console.log('Random letter: ' + random_letter);
    // Adding "position : random letter" to every object (key : value)
    movies_copy[i].position = random_letter;
  }

  /*
  // ------------ SOLUTION 2 - ADDING EACH PROPERTY : VALUE one by one ------------
  // Scanning the original movies array to copy it element by element
  for (let i = 0; i < movies_list.length; i++) {
    // Generating random letter
    var random_letter = getRndCharacter();
    console.log('Random letter: ' + random_letter);
    // Copying each object from the original array to its copy (one by one)
    var single_movie_copy = {
      // *** DOT NOTATION ***
      title : movies_list[i].title,
      director : movies_list[i].director,
      year : movies_list[i].year,
      position : random_letter,

      // *** SQUARE BRACKETS NOTATION ***
      // title : movies_list[i]['title'],
      // director : movies_list[i]['director'],
      // year : movies_list[i]['year'],
      // position : random_letter,
    }
    movies_copy.push(single_movie_copy);
  }
  */

  console.log('\n\n The original movies array is unchanged:', movies_list , '\n\n');
  console.log('The copy of the movies array updated with the new property \'position\' and its values is: ' , movies_copy);
});

// ------------------------------- FUNCTIONS -------------------------------

// Generating random letter
function getRndCharacter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // *** SOLUTION 1 - optimized ***
  return alphabet[Math.floor(Math.random() * alphabet.length)];
  /*
  // *** SOLUTION 2 - charAt ***
  var index = Math.floor(Math.random() * alphabet.length);
  return alphabet.charAt(index);
  */
}
