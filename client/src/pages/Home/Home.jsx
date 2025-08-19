import Navbar from '../../components/Navbar.jsx';
import {useState, useEffect} from 'react';
import doctors from '../../data/Doctors.js';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';
const Home = () => {
const doctorsArray = doctors;
const [user, setDoctorName] = useState({doctorName:'',
foundDoctor: null});
//const [dataValue, setDataValue] = useState('');
//const [doctor, setDoctor] = useState('');
//const [getDoctor, setGetDoctor] = useState('');
const onChangeHandler = (e) => {
  setDoctorName({...user, doctorName: e.target.value})
};
const doctorHandler = () => {
  doctorMatch = doctorsArray.find((docArray) => docArray.name.toLocaleLowerCase() === user.doctorName.toLocaleLowerCase() )
  setDoctorName({...user, foundDoctor : doctorMatch || 'Doctor not found'})
}

  return (
    <>
      <h1>Home Page</h1>
     <Navbar/>
     <Input type='text' vlaue='user.foundDoctor' onChange='onChangeHandler' className='' placeholder='Search Doctor'/>
     <Button onClick={doctorHandler} className='bg-red-900 text-white p-2 rounded' >Search </Button>
     {user.foundDoctor ? <h1>{user.foundDoctor}</h1> : `${user.foundDoctor} doesn't exist`}
    </>
    )};
export default Home;






