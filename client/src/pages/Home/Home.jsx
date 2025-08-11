import Navbar from '../../components/Navbar.jsx';
import {useState} from 'react';
const Home = () => {
const [inputValue, setInputValue] = useState({value: null, showData: false});
const onChangeHandle = (e) => {
  setInputValue({...inputValue,[e.target.name] : e.target.value});
}
const handleBtn = () =>{
  setInputValue({...inputValue, showData : true});

}
  return (
    <>
      <h1>Home Page</h1>
     <Navbar/>

  <input type="text" name='name' value={inputValue.value} onChange={onChangeHandle} placeholder='Enter Name'/>
  <button type='button' onClick={handleBtn}>Click me</button>
  {inputValue.showData && <h1>{inputValue.value}</h1>}





    </>
    )
};
export default Home;