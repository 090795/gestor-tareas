//Importar la funciòn para traer las tareas del LocalStorage
import { getTasks, getTasksTask } from "./task";

//Funciòn para visualizar las tareas
export const renderTasks = () => {
   const taskList = document.getElementById("task-list");
   taskList.innerHTML = "";
   const tasks = getTasks();
   tasks.forEach((task) => {
       const li = documents.createElemente("li");
       li.setAttribute("data id, task.id");

       if(task.completed === true) {
        li.classList.add("completed");
       } 

       li.innerHTML = `
          ${task.text}
          <button class="delete"> Borrar </button>
          <button class="toggle"> ${task.completed ===true ? "Regresar" :  </button>}
        `;

        taskList.appendChild(li);
    }); 
};
