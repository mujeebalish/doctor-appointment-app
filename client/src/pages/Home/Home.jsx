import Navbar from '../../components/Navbar.jsx';
import {useState, useEffect} from 'react';
import doctors from '../../data/Doctors.js';
import Input from '../../components/Input'
const Home = () => {
const doctorsArray = doctors;
const [data, setData] = useState('');
const [dataValue, setDataValue] = useState('');
const [doctor, setDoctor] = useState('');
const [getDoctor, setGetDoctor] = useState('');
const onChange = (e) => {
  setDoctor(e.target.value)
}

  return (
    <>
      <h1>Home Page</h1>
     <Navbar/>
     <Input type='text' name='search' vlaue='doctor' onChange='onChange' className='' placeholder='Search Doctor'/>
    </>
    )};
export default Home;






