import axios from "axios";

function App() {

  axios.get("http://localhost:8000/api/product/test")
    .then(res => console.log(res))
    .then(err => console.log(err));

  return (
    <div className="App">
      <h1>Hello Sunshine</h1>
    </div>
  );
}

export default App;
