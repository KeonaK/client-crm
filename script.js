const dateDisplayEl = document.getElementById("dashboardDate");
const timeDisplayEl = document.getElementById("dashboardTime");

const btnEl = document.getElementById("btn");

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
    priority: document.getElementById("priority").value,
    date: document.getElementById("date").value,
    taskCreated: document.getElementById("taskCreated").value,
    status: document.getElementById("status").value,
  };

  tasks.push(task); //add the new task to our tasks object
  document.querySelector("form").reset(); //clears the form for the next task

  //turns object into a string to add it to local storage
  localStorage.setItem("taskList", JSON.stringify(tasks));
};

btnEl.addEventListener("click", addTask);
