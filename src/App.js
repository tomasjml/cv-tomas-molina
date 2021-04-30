import './App.css';
import HeaderIdentification from './components/header-identification/HeaderIdentification';

function App() {
  const [name, dedication] = ["José Tomás Molina López", "Systems and Computing Engineer"]
  return (
    <div className="App">
      <div className="paper">
        <HeaderIdentification name={name} dedication={dedication}/>
      </div>
    </div>
  );
}

export default App;
