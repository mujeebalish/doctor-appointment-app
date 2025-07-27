import express from 'express';
import {doctors} from '../data/doctors.js';

//Get Route
const doctorRoutes = express.Router();
doctorRoutes.get('/', (req, res) =>{
  try{
    
    res.status(200).send({status: 200, message: 'success', data: doctors})
    
    }
    
    
  
  catch(error){
    console.log(error.message);
  
}});


// Post Route
doctorRoutes.post('/post', (req, res) =>{
  try{
    const body = req.body;
  const {name, specialty, experience, location, image, description} = body;
    if(!name || !specialty || !experience || ! location || !image || !description){
      throw new Error('All fields are required');
    }
    const newDoctor = {...body, id: doctors.length + 1};
    doctors.push(newDoctor);
    res.status(201).send({status: 201, message: 'success', data: doctors})
  }
  catch(error){
    console.log(error.message);
  }
});

// Get by :id
doctorRoutes.get('/:id', (req, res)=>{
  try{
  const doctorId = parseInt(req.params.id);
 const match_D_Id = doctors.find((fDoc)=> fDoc.id === doctorId);
  if(!match_D_Id){
   return res.status(404).send({status: 404, message: "Doctor not found", data: doctors});
  }
      res.status(200)
      .send({statu: 200, message: "doctor added", data: doctors})
    
  
  }
  catch(error){
    console.error(error.message)
  }
});
export default doctorRoutes;