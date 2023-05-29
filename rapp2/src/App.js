import './App.css';
import MainP from './fronts/Main';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from './fronts/Menu';
function App() {
  return (<Router><div className='main_container'>
    <Routes>
          
          <Route exact path='/' element={<MainP />} />
          <Route exact path='/menu' element={<Menu />} />
</Routes>
</div>
</Router>
  );
}

export default App;
