import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/style.css'
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
