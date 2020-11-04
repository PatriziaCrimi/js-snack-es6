/* ASSIGNMENT
A partire da un array di oggetti,
creare una copia dell'array
e aggiungere ai singoli elementi dell'array una nuova proprietà "position"
che contiene una lettera casuale.
Usiamo arrow function, map e...
Utilizzare nuova sintassi di JS ES6.
*/

$(document).ready(function () {
  // Creating an array of objects
  let movies_list = [
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

  /*
  // --------------------- SOLUTION 1 - FOREACH & FOR-IN ---------------------

  // Creating a copy of the movies array and adding the new property and value
  let movies_copy = [];

  // Scanning the original movies array to copy it element by element
  movies_list.forEach((movie, index) => {
    // Scanning every object from the original array to copy its properties and values (one by one)
    let single_movie_copy = {};
    for (let key in movie) {
      // Creating the current property : value
      single_movie_copy[key] = movie[key];
    }
    movies_copy.push(single_movie_copy);
  });

  // Scanning the copy of the movies array to add the new property and value
  movies_copy.forEach((movie, index) => {
    // Generating random letter (with function)
    let random_letter = getRndCharacter();
    console.log(`Random letter: ${random_letter}`);
    // Adding "position : random letter" to every object (key : value)
    movie.position = random_letter;
  });
  */

  // --------------------- SOLUTION 2 - MAP & REST ---------------------

  // Creating the new array (with map)
  const movies_copy = movies_list.map((movie) => {
    const single_movie_copy = {
      ...movie,
      position: getRndCharacter(),
    };
    return single_movie_copy;
  });

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
