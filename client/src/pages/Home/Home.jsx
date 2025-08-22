import Navbar from '../../components/Navbar.jsx';
import {useState, useEffect} from 'react';
import doctors from '../../data/Doctors.js';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';
const Home = () => {
const doctorsArray = doctors;
const [user, setUser] = useState('');
const [userData, setUserData] = useState('');
//const [dataValue, setDataValue] = useState('');
//const [doctor, setDoctor] = useState('');
//const [getDoctor, setGetDoctor] = useState('');
const onChangeHandler = (e) => {
  setUser(e.target.value);
  console.log(e.target.value);

};
const doctorHandler = () => {
  // doctorMatch = doctorsArray.find((docArray) => docArray.name.toLocaleLowerCase() === user.doctorName.toLocaleLowerCase() )
  // setDoctorName({...user, foundDoctor : doctorMatch || 'Doctor not found'});

}

  return (
    <>
      <H1>Home page</H1>
     <Navbar/>
     <Input type='text' vlaue={user} onChange={onChangeHandler} placeholder='Search Doctor'/>
     <Button onClick={doctorHandler} >Search </Button>

     {user.foundDoctor && <H1>{user.foundDoctor}</H1>}
    </>
    )};
export default Home;






