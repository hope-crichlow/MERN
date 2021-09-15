import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Planets from "./views/Planets";
import People from "./views/People";
import Error from "./views/Error";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Form />
				<Switch>
					<Route path="/planets/:planet_id">
						<Planets />
					</Route>
					<Route path="/people/:person_id">
						<People />
					</Route>
					<Route path="/error">
						<Error />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
