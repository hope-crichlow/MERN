import './App.css';
import Form from './components/Form';
import ListDisplay from './components/ListDisplay';
import {useState} from "react";

function App() {
  
  const [arrState, setArrState] = useState([]);

  // A FUNCTION THAT ADDS INPUT STRING TO CURRENT ARRAY OF TASKS
  const addTaskToArray = (task) => {
    setArrState([...arrState, task]);
  }

  return (
		<fieldset>
      <legend>App.js</legend>
			<div className="App">
				<Form addTaskToArray={addTaskToArray}/>
				<ListDisplay />
			</div>
		</fieldset>
	);
}

export default App;
