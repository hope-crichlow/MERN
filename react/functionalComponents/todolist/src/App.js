import "./App.css";
import Form from "./components/Form";
import ListDisplay from "./components/ListDisplay";
import { useState } from "react";
// import ToDo from "./components/ToDo";

function App() {
	const [toDoState, setToDoState] = useState([]);
	// A FUNCTION THAT ADDS INPUT STRING TO CURRENT ARRAY OF TASKS
	// const addTaskToArray = (task) => {
	// 	setToDoState([
	// 		...toDoState,
	// 		{ task: task, completed: false, id: toDoState.length },
	// 	]);
	// };

	return (
		<fieldset>
			<legend>App.js</legend>
			<div className="container px-4">
				{/* <Form addTaskToArray={addTaskToArray} /> */}
				<Form />
				{/* <ToDo /> */}
				<ListDisplay tasks={toDoState} />
			</div>
		</fieldset>
	);
}

export default App;
