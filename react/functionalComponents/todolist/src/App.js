import './App.css';
import Form from './components/Form';
import ListDisplay from './components/ListDisplay';
import {useState} from "react";

function App() {
  
  const [arrState, setArrState] = useState([]);

  // A FUNCTION THAT ADDS INPUT STRING TO CURRENT ARRAY OF TASKS
  const addTaskToArray = (task) => {
    setArrState([...arrState, {task: task, completed: false}]);
  }

  return (
		<fieldset>
			<legend>App.js</legend>
			<div className="container px-4">
				<Form addTaskToArray={addTaskToArray} />
				<ListDisplay tasks={arrState} />
			</div>
		</fieldset>
	);
}

export default App;
