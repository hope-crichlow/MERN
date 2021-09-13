import { useState } from "react";
// import ToDo from "./components/ToDo";
// import Form from "./Form";

const ListDisplay = (props) => {
	const [toDoState, setToDoState] = useState([]);
	const { tasks } = props;

	console.log("sssss", tasks);
	console.log("00000", toDoState);

	// // A FUNCTION THAT ADDS INPUT STRING TO CURRENT ARRAY OF TASKS
	// const addTaskToArray = (task) => {
	// 	setToDoState([...toDoState, { task: task, completed: false }]);
	// };

	// const changeStatus = (e) => {
	// 	setToDoState(tasks);
	// 	console.log("taaaask", e.target.value);

	// 	// console.log("taaaask", toDoState);
	// 	var currentList = [...toDoState];
	// 	console.log("taaaask", currentList);
	// 	// var index = e.target.value;
	// 	// var thisTask = currentList[index];
	// 	// console.log("taaaask", thisTask);
	// 	// if (thisTask.completed === false) {
	// 	// 	thisTask.completed = true;
	// 	// } else {
	// 	// 	thisTask.completed = false;
	// 	// }
	// 	setToDoState(currentList);
	// };

	// const toDoList = tasks.map((task, i) => {
	// 	return (
	// 		<li key={i} id={i} className="list-group-item form-check">
	// 			<p className={task.completed ? "line-through" : "none"}>
	// 				<label className="form-check-label">{task.task}</label>

	// 				<input
	// 					className="form-check-input"
	// 					type="checkbox"
	// 					defaultChecked={task.completed}
	// 					onChange={changeStatus}
	// 					value={task.id}
	// 				/>
	// 			</p>
	// 		</li>
	// 	);
	// });

	return (
		<div>
			<fieldset>
				<legend>ListDisplay.jsx</legend>
				{/* <Form addTaskToArray={addTaskToArray} /> */}
				<ul className="list-group list-group-flush">
                    {/* {toDoList} */}
                {

                }
                </ul>
			</fieldset>
		</div>
	);
};

export default ListDisplay;
