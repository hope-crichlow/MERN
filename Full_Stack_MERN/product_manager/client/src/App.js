import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form";

function App() {
	axios
		.get("http://localhost:8000/api/product/test")
		.then((res) => console.log(res))
		.then((err) => console.log(err));

	return (
		<div className="App">
			<h1>Hello Sunshine</h1>
			<BrowserRouter>
        <Form />
        <Switch>
          <Route exact path="/">
            
          </Route>
        </Switch>
      </BrowserRouter>
		</div>
	);
}

export default App;
