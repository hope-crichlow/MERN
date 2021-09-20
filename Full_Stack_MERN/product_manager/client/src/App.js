import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Main from "./views/Main";
import Details from "./components/Details";

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
						<Main />
					</Route>
					<Route exact path="/:id">
						<Details />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
