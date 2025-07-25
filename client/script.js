const form = document.getElementById('entryForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const entry = e.target.entry.value;
  const category = form.category.value;
  alert("Diary entry saved: " + entry);
});

const entriesContainer = document.getElementById('entriesContainer');
