import './App.css';
import Routes from './Components/Routes';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
