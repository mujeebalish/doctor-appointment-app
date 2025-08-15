import Navbar from '../../components/Navbar.jsx';
import {useState, useEffect} from 'react';
const Home = () => {
const [data, setData] = useState('');
const [dataValue, setDataValue] = useState('');
const [renderTest, setRenderTest] = useState('');
useEffect(() => {
  setRenderTest()
  console.log(`Data value`)
},);
const onChangeHandle = (e) =>{
setData(e.target.value);
};
const onChangeRender = (e) =>{
setRenderTest(e.target.value);
};
const clickBtn = () =>{
setDataValue(data);
}
  return (
    <>
      <h1>Home Page</h1>
     <Navbar/>

  <input type="text" value={data} onChange={onChangeHandle} placeholder='Enter Name'/>
  <input type="text" value={renderTest} onChange={onChangeRender} placeholder='Enter Value'/>
  <button onClick={clickBtn}>Get value</button>
  <button onClick={RenderBtn}>Render Test</button>
  {dataValue && <h1>{dataValue}</h1>}
    </>
    )};
export default Home;




