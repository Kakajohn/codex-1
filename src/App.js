import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/contact" element={<Contact/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
