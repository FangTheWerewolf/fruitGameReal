// Grab the input box and the suggestions list
let inputBox = document.getElementById('fruit');
let suggestionList = document.querySelector('.suggestions ul');

// Here’s a list of all the fruits we’re going to use
let fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 
'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 
'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 
'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 
'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 
'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 
'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 
'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 
'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 
'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 
'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to find fruits based on what you type
function findFruits(typedText) {
  let matches = [];
  let lowerCaseText = typedText.toLowerCase();

  // Go through each fruit to see if it matches
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase().indexOf(lowerCaseText) !== -1) { 
      matches.push(fruits[i]);
    }
  }

  return matches;
}

// Function to run when the user types something
inputBox.onkeyup = function() {
  let foundFruits = findFruits(inputBox.value); // Find fruits through this

  // Clear the old suggestions
  suggestionList.innerHTML = '';

  // If the user typed something, show suggestions
  if (inputBox.value !== '') {
    for (let i = 0; i < foundFruits.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = foundFruits[i];
      suggestionList.appendChild(listItem); // Add each matching fruit to the list
    }
    suggestionList.parentElement.style.display = 'block'; // Show the suggestions
  } else {
    suggestionList.parentElement.style.display = 'none'; // Hide the suggestions if nothing is typed
  }
};

// Function to use the clicked suggestion
suggestionList.onclick = function(event) {
  if (event.target.tagName === 'LI') {
    inputBox.value = event.target.textContent;
    suggestionList.innerHTML = '';
    suggestionList.parentElement.style.display = 'none'; // Hide the suggestions list
  }
};
