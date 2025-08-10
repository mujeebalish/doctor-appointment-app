import Navbar from '../../components/Navbar.jsx';
import {useState} from 'react';
const Home = () => {
  const [formData, setFormData] = useState({inputValue: '', showData: false});
 // const [finalValue, setFinalValue] = useState();
  const handleChange = (e) =>{
    setFormData({...formData, inputValue: e.target.value,
      
    })
  }
  const handleSubmit = () =>{
    setFormData ({...formData, showData : true});
    
  };
  
  return (
    <>
      <h1>Home Page</h1>
     <Navbar/>
<div>
      <h2>Simple Form</h2>
<input type="text" value={formData.inputValue} onChange={handleChange}/>
    <button onClick={handleSubmit}>
  Click me </button>
    </div>
    {formData.showData && <h1>{formData.inputValue}</h1>}
    <p></p>
    <p></p>
    </>
    )
};
export default Home;