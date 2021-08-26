let dateDisplayEl = document.getElementById("dashboardDate");

function todaysDate() {
  let DateTime = luxon.DateTime;
  let today = DateTime.now().toFormat("MMMM dd, yyyy");
  dateDisplayEl.textContent = today;
}

todaysDate();
