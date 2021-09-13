import './App.css';
import Form from './components/Form';
import ListDisplay from './components/ListDisplay';

function App() {
  return (
		<fieldset>
      <legend>App.js</legend>
			<div className="App">
				<Form />
				<ListDisplay />
			</div>
		</fieldset>
	);
}

export default App;
