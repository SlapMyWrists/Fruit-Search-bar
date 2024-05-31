const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionsList = document.querySelector('#suggestions-list');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('input', function () {
  const inputValue = input.value.trim().toLowerCase();
  const results = search(inputValue);
  showSuggestions(results);
});

function search(str) {
  if(!str){
	return []
  }
  return fruit.filter(fruit => fruit.toLowerCase().includes(str));
}

function showSuggestions(results) {
  suggestionsList.innerHTML = '';
  if (results.length) {
	suggestions.style.display ='block';
    results.forEach(fruit => {
      const li = document.createElement('li');
      li.textContent = fruit;
      suggestions.appendChild(li);
    });
  } else {
	suggestions.style.display = 'none';
  }
}

function useSuggestion(e) {
  const selectedFruit = e.target.textContent;
  input.value = selectedFruit;
  suggestions.style.display = 'none';
}

suggestions.addEventListener('click', useSuggestion);
