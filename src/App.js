import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Josh" lastName="Remulla" age={31} hairColor='Black'></PersonCard>
      <PersonCard firstName = "Eric" lastName="Liu" age={29} hairColor='Black'></PersonCard>
      <PersonCard firstName = "Daisy" lastName="Torres" age={21} hairColor='Black'></PersonCard>
      <PersonCard firstName = "Anthony" lastName="Looby" age={26} hairColor='Brown'></PersonCard>
    </div>
  );
}

export default App;
