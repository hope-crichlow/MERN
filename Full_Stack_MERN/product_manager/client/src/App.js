import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Main from "./views/Main";

function App() {
	axios
		.get("http://localhost:8000/api/product/test")
		.then((res) => console.log(res))
		.then((err) => console.log(err));

	return (
		<div className="App">
			<h1>Product Manager</h1>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
