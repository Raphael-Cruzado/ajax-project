/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (e) {
  this.localStorage.setItem('ingredient-storage', JSON.stringify(data));
});

var currentDataJSON = localStorage.getItem('ingredient-storage');
if (currentDataJSON !== null) {
  data = JSON.parse(currentDataJSON);
}
