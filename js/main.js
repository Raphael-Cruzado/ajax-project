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

// get Recipe Title to append to page after user clicks away or presses enter
// get URL to post something on the picture placeholder
// create DOM tree for ingredients, once user completes ingredients prompt
// submit button creates an index for the current ingredient list

var $form = document.querySelector('form');
var $recipeTitle = document.querySelector('.recipe-title');
var $photoURL = document.querySelector('.url-input');
var $photoDisplay = document.querySelector('img');

$photoURL.addEventListener('input', function (e) {
  $photoDisplay.src = $photoURL.value;
});

$form.addEventListener('submit', function (e) {
});

// appends but page keeps on reloading
$form.addEventListener('keyup', function (e) {
  e.preventDefault();
  var recipeTitle = document.createElement('h1');
  if (e.code === 'Enter') {
    recipeTitle.innerHTML = $recipeTitle.value;
    $recipeTitle.parentNode.replaceChild(recipeTitle, $recipeTitle);
  }
});
