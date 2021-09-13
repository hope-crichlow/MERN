import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Main from "./components/Main";
import Planets from "./views/Planets";
import People from "./views/People";
import Error from "./views/Error";

function App() {
	return (
		<div>
			<Main />
			<BrowserRouter>
				<Form />
				<Switch>
					<Route path="/planets/:id">
						<Planets />
					</Route>
					<Route path="/people/:id">
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
