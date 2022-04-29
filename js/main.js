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

  entryLi.setAttribute('class', 'row-view');

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
  } else if ($viewPage.className === 'container-view') {
    $viewPage.className = 'container-view hidden';
    $viewEntries.className = '';
    $viewForm.className = 'hidden';
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

var $viewTitle = document.querySelector('.recipe-view');
var $ingView = document.querySelector('.ingredients-view');
var $imgView = document.querySelector('.img-view');
var nutrFacts = document.querySelector('.nutrition-facts');
var $viewPage = document.querySelector('.container-view');
var $entryPage = document.querySelector('.container-entries');

$entriesUl.addEventListener('click', function (e) {
  console.log(e);
  console.log(e.path[0]);
  console.log(e.path[0].className);
  var entry = {};

  if (e.path[0].className === 'photo-entries') {
    $viewPage.className = 'container-view';
    $entryPage.className = 'container-entries hidden';
  } else {
    $viewPage.className = 'container-view hidden';
    $entryPage.className = 'container-entries';
  }
});

// fix entry view page (center it)
// start creating the function
// fix the local storage when u delete something and it doesn't log it in

// ENTRY DOM TREE
// <div class="container-view" style="margin-top: 6rem; max-width: 73rem;">
//   <div class="row-view">
//     <h1>Recipe Title</h3>
//     <img class="photo-display" src="images/placeholder.jpg" alt="image-placeholder">
//       <h2 style="font-size: xx-large; margin-bottom: -1rem">Ingredients:</h2>
//       <ul>
//         <li>5 grams cracker</li>
//         <li>10 lbs beef</li>
//       </ul>
//   </div>
//   <div class="row-view">
//     <h4 style="font-size: xx-large; margin-bottom: -1rem">Nutrition Facts</h4>
//     <ul>
//       <li>Carbohydrates: 5g</li>
//       <li>Trans Fat: 10g</li>
//     </ul>
//   </div>
// </div>

function createView(entry) {
  var imgView = document.createElement('img');
  var titleView = document.createElement('h1');
}
