const calendar = new VanillaCalendar({
  selector: "#myCalendar",
  onSelect: (data, elem) => {
    selectedDate = new Date(data.date).toISOString().split("T")[0];
    //alert(`Vous avez sélectionné le ${selectedDate}`);
  },
  months: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ],
  shortWeekday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
});

let selectedDate = {};

const taskForm = document.querySelector("#task-form");
taskForm.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const formData = new FormData(taskForm);
  const title = formData.get("title");
  const task = formData.get("task");
  const level = formData.get("level");
  const newTask = { title, task, level, selectedDate: selectedDate };
  console.log("newTask", newTask);
  savePlanning(newTask);
}

function savePlanning(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = [...tasks, task];
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
