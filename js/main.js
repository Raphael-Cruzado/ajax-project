var $form = document.querySelector('form');
var $imageURL = document.querySelector('#url-input');
var $imageDisplay = document.querySelector('.photo-display');

$form.addEventListener('input', function (e) {
  if ($imageURL.value === '') {
    $imageDisplay.src = 'images/placeholder.jpg';
  } else {
    $imageDisplay.src = $imageURL.value;

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
var $listNodes = document.querySelectorAll('li');

var newObj = {};
var dataEntries = data.entries;

// var data = {
//   view: 'entry-form',
//   entries: [],
//   editing: null,
//   nextEntryId: 1
// };

// verify that new entries are saved onto local storage

$form.addEventListener('submit', function (e) {
  e.preventDefault();

  var listNodes = e.path[7].$form.childNodes[3].lastElementChild.firstElementChild.childNodes;
  var arrayList = Array.prototype.slice.call(listNodes);

  newObj.entryId = data.nextEntryId;
  newObj.title = $recipeTitle.value;
  newObj.url = $imageURL.value;
  delete data.entries.listItem;
  newObj.ingredients = [];
  for (let i = 1; i < arrayList.length; i++) {
    newObj.ingredients.push(arrayList[i].innerText);
  }
  newObj.entryId = data.nextEntryId++;
  dataEntries.push(newObj);

  console.log(dataEntries.length - 1);

  if ($imageURL.value === '') {
    $imageDisplay.src = 'images/placeholder.jpg';
  } else {
    $imageDisplay.src = $imageURL.value;
  }

  for (let i = 0; i < arrayList.length; i++) {
    arrayList[i].remove();
  }
  $form.reset();
});

$addBtn.addEventListener('click', function (e) {
  newObj.listItem = $amount.value + ' ' + $dropDown.value + ' ' + $ingredient.value;
  // console.log(newObj);
  $uList.appendChild(createIngredient(newObj));
});

// when user deletes list, it doesn't get added to dataEntries, handle that later **
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

// <div class="row">
//   <ul class="entries-list">
//     <li class="column-half">
//       <h5>Lasagna</h5>
//       <img class="photo-entries" src="images/placeholder.jpg" alt="image-placeholder">
//         <i class="fas fa-utensils"></i>
//     </li>
//     <li class="column-half">
//       <h5>Lasagna</h5>
//       <img class="photo-entries" src="images/placeholder.jpg" alt="image-placeholder">
//         <i class="fas fa-utensils move-top"></i>
//     </li>
//     <li class="column-half" >
//       <h5>Lasagna</h5>
//       <img class="photo-entries" src="images/placeholder.jpg" alt="image-placeholder">
//         <i class="fas fa-utensils"></i>
//     </li>
//     <li class="column-half">
//       <h5>Lasagna</h5>
//       <img class="photo-entries" src="images/placeholder.jpg" alt="image-placeholder">
//         <i class="fas fa-utensils"></i>
//     </li>
//   </ul>
