import '../App.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import AllPatients from './AllPatients';
import MyPatients from './MyPatients';
import PatientShowPage from './PatientShowPage';
import PatientPrescriptions from './PatientPrescriptions';
import PrescriptionShowPage from './PrescriptionShowPage';
import AddPharmacy from './AddPharmacy';
import { UserContext } from '../context/User';

function App() {

  const [ patients, setPatients ] = useState([])
  const { user, loggedIn } = useContext(UserContext)

  useEffect(() => {
    fetch('/patients')
    .then(resp => resp.json())
    .then(data => setPatients(data))
  }, [user, loggedIn])

  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/patients' element={<AllPatients patients={patients} setPatients={setPatients}/>} />
        <Route path='/mypatients' element={<MyPatients patients={patients}/>} />
        <Route path='/patients/:id' element={<PatientShowPage patients={patients} setPatients={setPatients}/>}/>
        <Route path='/patients/:id/prescriptions' element={<PatientPrescriptions patients={patients} setPatients={setPatients}/>}/>
        <Route path='/patients/:patientId/prescriptions/:id' element={<PrescriptionShowPage patients={patients} setPatients={setPatients}/>}/>
        <Route path='/addpharmacy' element={<AddPharmacy />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
