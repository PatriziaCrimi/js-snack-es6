/* ASSIGNMENT
Creare un array di nomi
e chiedere all'utente due numeri.
Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.
Usiamo i nuovi metodi degli array forEach o filter.
Utilizzare nuova sintassi di JS ES6.
*/

$(document).ready(function () {
  // Creating an array of names
  let names_list = ['William', 'Robert', 'Anne', 'Christian', 'Josephine', 'Karleen', 'Astrid', 'Clark', 'Judith'];
  // Printing in console
  console.log('The array containing the names is: ', names_list)

  // Entering first number
  let first_num = parseInt(prompt('Please enter the first number.'));
  // Checking if first number is valid (with function)
  first_num = validNumber(first_num, names_list.length);
  // Entering second number
  let second_num = parseInt(prompt('Now enter the second number.'));
  // Checking if second number is valid (with function)
  second_num = validNumber(second_num, names_list.length);
  // Checking if the two numbers are different
  while (second_num === first_num) {
    second_num = parseInt(prompt('ERROR. You cannot enter two equal figures. Please enter a number ranging from 1 to ' + names_list.length + ' and different from ' + first_num + '.'));
    second_num = validNumber(second_num, names_list.length);
  }
  // Print in console (template literal converts numbers into strings)
  console.log(
  `
  The two numbers entered by the user are: ${first_num} and ${second_num}.
  `
  );

  // Checking highest and lowest number
  let highest_num;
  let lowest_num;
  if (first_num > second_num) {
    highest_num = first_num;
    lowest_num = second_num -1;
  } else {
    highest_num = second_num;
    lowest_num = first_num -1;
  }

  // Creating the new array containing the names included in the user's numbers range
  let names_final_array = [];


  // ------------------------- SOLUTION 1 - FOREACH -------------------------

  // Scanning the whole array of names (with forEach)
  names_list.forEach((name, index) => {
    // Checking for the names included in the range given by the user
    if (index >= lowest_num && index < highest_num) {
      names_final_array.push(name);
    }
  });
  // Print in console
  console.log('The new array containing the names included in the user\'s numbers range is: ', names_final_array);
  // Print results on screen HTML
  $('#results > p:last-child').text(names_final_array.join(', '));


  // ------------------------- SOLUTION 2 - FILTER -------------------------

  const names_list_filtered = names_list.filter((name, index) => {
    return index >= lowest_num && index < highest_num;
  });
  // Print in console (with template literal)
  console.log(
  `
  The filtered array containing the names included in the user's numbers range is: ${names_list_filtered.join(', ')}.
  `
  );
});

// ---------------------------- FUNCTIONS ----------------------------

// Checking valid input when entering the numbers
function validNumber(num, maxNum) {
  while (isNaN(num) || num <= 0 || num > maxNum) {
    num = parseInt(prompt('ERROR. The value you entered is not valid. Please enter a number ranging from 1 to ' + maxNum + '.'));
  };
  return num;
}
