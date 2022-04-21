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
var $addBtn = document.querySelector('#add-ing');

var newObj = {};

$form.addEventListener('submit', function (e) {
  e.preventDefault();
});

$addBtn.addEventListener('click', function (e) {
  newObj.listItem = $amount.value + ' ' + $dropDown.value + ' ' + $ingredient.value;
  console.log(newObj);
  $uList.appendChild(createIngredient(newObj));
});

function createIngredient(entry) {
  var listItem = document.createElement('li');
  var listText = document.createTextNode(entry.listItem);
  var icon = document.createElement('i');

  listItem.setAttribute('data-entry-id', entry.entryId);

  listItem.appendChild(listText);

  icon.setAttribute('class', 'fas fa-utensils');
  listItem.appendChild(icon);

  return listItem;
}
