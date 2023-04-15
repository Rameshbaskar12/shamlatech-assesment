import './App.css';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div style={{ maxWidth: '60rem', margin: '4rem auto'}}>
      <GlobalProvider>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/add' element={<AddEmployee/>} />
          <Route path='/edit/:id' element={<EditEmployee/>} />
        </Routes>
      </GlobalProvider>    
    </div>
  );
}

export default App;