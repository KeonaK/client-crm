const dateDisplayEl = document.getElementById("dashboardDate");
const timeDisplayEl = document.getElementById("dashboardTime");

const DateTime = luxon.DateTime;

function todaysDate() {
  let today = DateTime.now().toFormat("MMMM dd, yyyy");
  dateDisplayEl.textContent = today;
}

todaysDate();

function currentTime() {
  const dt = DateTime.local();
  let time = dt.toLocaleString(DateTime.TIME_SIMPLE);
  timeDisplayEl.textContent = time;
}

currentTime();
