import Navbar from '../../components/Navbar.jsx';
import {useState, useEffect} from 'react';
import doctors from '../../data/Doctors.js';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';
const Home = () => {
const doctorsArray = doctors;
const [user, setUserData] = useState('');
const [result, setResult] = useState(false);
{/*//const [doctor, setDoctor] = useState('');
//const [getDoctor, setGetDoctor] = useState('');*/}
const onChangeHandler = (e) => {
  setUserData(e.target.value)
  
};
const doctorHandler = () => {
  
  setResult(true)
  const foundDoctor = doctorsArray.find(docName => docName.name.toLocaleLowerCase() === user.toLocaleLowerCase())
};

  return (
    <>
      
     <Navbar/>
     <Input type='text' value={user} onChange={onChangeHandler} className='' placeholder='Search Doctor'/>
     <Button onClick={doctorHandler} className='bg-red-900 text-white p-2 rounded' >Search </Button>
     {result &&  <H1>{user || 'Insert Doctor Name' }</H1>}
    </>
    )};
export default Home;



