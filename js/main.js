var $form = document.querySelector('form');
var $imageURL = document.querySelector('#url-input');
var $imageDisplay = document.querySelector('#photo-display');

$form.addEventListener('input', function (e) {
  if ($imageURL.value !== '') {
    $imageDisplay.src = $imageURL.value;
  } else {
    $imageDisplay.src = 'images/placeholder.jpg';
  }

});

var $uList = document.querySelector('ul');
var $listItem = document.querySelector('li');
var $amount = document.querySelector('#amount');
var $dropDown = document.querySelector('select');
var $ingredient = document.querySelector('#ingredient');
var $addBtn = document.querySelector('#add-ing');
var $icon = document.querySelector('i');
var $recipeTitle = document.querySelector('.recipe-title');

// submit button creates an index for the current ingredient list

var newObj = {};

$form.addEventListener('submit', function (e) {
  e.preventDefault();
});

$addBtn.addEventListener('click', function (e) {
  newObj.listItem = $amount.value + ' ' + $dropDown.value + ' ' + $ingredient.value;
  // console.log(newObj);
  $uList.appendChild(createIngredient(newObj));
});

$uList.addEventListener('click', function (e) {
  if (e.target.className === 'fas fa-utensils' && e.path[1].innerText !== '') {
    e.path[1].remove();
  }
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
