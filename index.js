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
  const task = formData.get("task");
  const level = formData.get("level");
  console.log("task", { task, level, selectedDate: selectedDate });
}
