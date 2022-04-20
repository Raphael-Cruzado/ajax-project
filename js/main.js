// create DOM tree for ingredients, once user completes ingredients prompt
// submit button creates an index for the current ingredient list

var $form = document.querySelector('form');
var $recipeTitle = document.querySelector('.recipe-title');
var $imageURL = document.querySelector('#url-input');
var $imageDisplay = document.querySelector('#photo-display');

$form.addEventListener('input', function (e) {
  $imageDisplay.src = $imageURL.value;
});

$form.addEventListener('submit', function (e) {
  if ($imageURL.getAttribute('placeholder') === 'Place photo URL here') {
    $imageDisplay.src = 'images/placeholder.jpg';
  } else {
    $imageDisplay.src = $imageURL.value;
  }
});

// <div class="ingredients">
//   <ul>
//     <li>
//       1 cups Barley
//       <i class="fas fa-utensils"></i>
//     </li>
//     <li>
//       3 tbsp Kosher Salt
//       <i class="fas fa-utensils"></i>
//     </li>
//     <li>
//       11 liters water
//       <i class="fas fa-utensils"></i>
//     </li>
//   </ul>
//   <div>
//     <button id="submit-btn">Let's Cook!</button>
//   </div>
// </div>

var $uList = document.querySelector('ul');
var $listItem = document.querySelector('li');
var $amount = document.querySelector('#amount');
var $dropDown = document.querySelector('select');
var $ingredient = document.querySelector('#ingredient');
var $ingList = document.querySelector('.ingredient-list');

$ingList.addEventListener('keyup', function (e) {
  e.preventDefault();
  var newObj = {};

  newObj.listItem = $amount.value + $dropDown.value + $ingredient.value;

  if (e.code === 13) {
    $uList.appendChild(createIngredient(newObj));
  }
});

function createIngredient(entry) {
  var icon = document.createElement('i');
  var listItem = document.createElement('li');

  listItem.innerText = entry.listItem;
  $listItem.appendChild(document.createTextNode(listItem));

  icon.setAttribute('class', 'fas fa-utensils');
  $listItem.appendChild(icon);

  $uList.appendChild($listItem);
  return listItem;
}
