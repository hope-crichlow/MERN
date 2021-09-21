import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Main from "./views/Main";
import Dashboard from "./views/Dashboard";
import New from "./views/New";
import Edit from "./views/Edit";

function App() {
	axios
		.get("http://localhost:8000/api/author/test")
		.then((res) => console.log(res))
		.then((err) => console.log(err));

	return (
		<div className="App">
			<BrowserRouter>
				<h1>Favorite Authors</h1>
				<Main />
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route exact path="/new">
						<New />
					</Route>
					<Route exact path="/:id">
						<Edit />
					</Route>
					<Route exact path="/edit/:id"></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
