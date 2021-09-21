const dateDisplayEl = document.getElementById("dashboardDate");
const timeDisplayEl = document.getElementById("dashboardTime");
const form = document.getElementById("form");

const btnEl = document.getElementById("#btnEl");

const DateTime = luxon.DateTime;

//display the current date and time
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

//submitting the form

let tasks = [];

const addTask = (event) => {
  event.preventDefault(); // prevents the form from submitting and reloading the page
  let task = {
    id: Date.now(),
    priority: document.getElementById("priority").value.trim(),
    date: document.getElementById("date").value.trim(),
    taskCreated: document.getElementById("taskCreated").value.trim(),
    status: document.getElementById("status").value.trim(),
  };

  tasks.push(task); //add the new task to our tasks object
  console.log({ tasks });

  //turns object into a string to add it to local storage
  window.localStorage.setItem("taskList", JSON.stringify(tasks));
};

form.addEventListener("submit", addTask);
