const form = document.getElementById('entryForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const entry = e.target.entry.value;
  const category = form.category.value;
  alert("Diary entry saved: " + entry);
  alert(`Timestamp: ${e.timeStamp}`);
  e.preventDefault();
});

const entriesContainer = document.getElementById('entriesContainer');
fetch("/")
  .then(res => res.json())
  .then(entries => {
    entries.forEach(addEntryToPage);
  });