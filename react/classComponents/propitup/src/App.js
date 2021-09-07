import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
    <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
    </div>
  );
}

export default App;
