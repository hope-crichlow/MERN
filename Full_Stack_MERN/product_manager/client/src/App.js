import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Main from "./views/Main";
import Details from "./components/Details";
import Edit from "./views/Edit";

function App() {
	axios
		.get("http://localhost:8000/api/product/test")
		.then((res) => console.log(res))
		.then((err) => console.log(err));

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<h1>Product Manager</h1>
						<Main />
					</Route>
					<Route exact path="/:id">
						<Details />
					</Route>
					<Route exact path="/:id/edit">
						<Edit />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
