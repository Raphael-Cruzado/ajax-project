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
var $amount = document.querySelector('#amount');
var $dropDown = document.querySelector('select');
var $ingredient = document.querySelector('#ingredient');
var $addBtn = document.querySelector('#add-ing');
var $recipeTitle = document.querySelector('.recipe-title');
var $entriesUl = document.querySelector('.entries-list');
var $viewForm = document.querySelector("[data-view='entry-form']");
var $viewEntries = document.querySelector("[data-view='entries']");
var $photoEntries = document.querySelector('.photo-entries');

var dataEntries = data.entries;

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  var newObj = {};
  var listNodes = e.path[7].$form.childNodes[3].lastElementChild.firstElementChild.childNodes;
  var arrayList = Array.prototype.slice.call(listNodes);

  newObj.entryId = data.nextEntryId;
  newObj.title = $recipeTitle.value;
  newObj.url = $imageURL.value;
  newObj.ingredients = [];
  for (let i = 1; i < arrayList.length; i++) {
    newObj.ingredients.push(arrayList[i].innerText);
  }
  newObj.entryId = data.nextEntryId++;
  dataEntries.push(newObj);

  $entriesUl.prepend(addEntry(newObj));
  console.log(addEntry(newObj));

  $form.reset();

  if ($imageURL.value === '') {
    $imageDisplay.src = 'images/placeholder.jpg';
  } else {
    $imageDisplay.src = $imageURL.value;
  }

  for (let i = 0; i < arrayList.length; i++) {
    arrayList[i].remove();
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

function addEntry(entry) {
  var entryLi = document.createElement('li');
  var entryHeading = document.createElement('h4');
  var headingText = document.createTextNode(entry.title);
  var entryImg = document.createElement('img');
  var icon = document.createElement('i');

  entryLi.setAttribute('class', 'column-half');

  entryHeading.style.marginBottom = '5px';
  entryHeading.setAttribute('class', 'no wrap');
  entryHeading.appendChild(headingText);
  entryLi.appendChild(entryHeading);

  entryImg.setAttribute('class', 'photo-entries');
  entryImg.setAttribute('src', entry.url);
  entryImg.setAttribute('alt', 'image-placeholder');
  entryLi.appendChild(entryImg);

  icon.setAttribute('class', 'fas fa-utensils');
  entryLi.appendChild(icon);

  return entryLi;
}

window.addEventListener('DOMContentLoaded', function (e) {
  for (let i = 0; i < dataEntries.length; i++) {
    var newEntry = addEntry(dataEntries[i]);
    $entriesUl.prepend(newEntry);
  }
});

var $navBar = document.querySelector('#heading');
$navBar.addEventListener('click', function (e) {
  if ($viewEntries.className === 'hidden') {
    $viewForm.className = 'hidden';
    $viewEntries.className = '';
  } else {
    $viewForm.className = '';
    $viewEntries.className = 'hidden';
  }
});

var $submitBtn = document.querySelector('#submit-btn');
$submitBtn.addEventListener('click', function (e) {
  if ($imageURL.value === '') {
    $imageDisplay.src = 'images/placeholder-image-square.jpg';
  } else {
    $viewForm.className = 'hidden';
    $viewEntries.className = '';
  }
});

$addBtn.addEventListener('click', function (entry) {
  entry.listItem = $amount.value + ' ' + $dropDown.value + ' ' + $ingredient.value;
  $uList.appendChild(createIngredient(entry));
});

// when user deletes a list and adds another entry, the after inputs doesn't get added to dataEntries, handle that later **
$uList.addEventListener('click', function (e) {
  if (e.target.className === 'fas fa-utensils' && e.path[1].innerText !== '') {
    e.path[1].remove();
  }
});

// create view page
// during entries page, when user clicks image takes them to viewing page.
