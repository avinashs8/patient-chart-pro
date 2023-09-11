import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
