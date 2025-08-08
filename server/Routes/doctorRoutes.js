import path from 'path';
import fs from 'fs';
import express from 'express';
//import {doctors} from '../data/doctors.js';
const filePath = path.join(process.cwd(),'data','doctors.json');
const readDoctors = ()=>{
  try{
    const doctorsData = fs.readFileSync(filePath,'utf-8');
    return JSON.parse(doctorsData);
  }
  catch(err){
    console.error(`File read error, ${err.message}`)
  }
};
//console.log(`File path: {$filePath}`);
//Get Route
const doctorRoutes = express.Router();
doctorRoutes.get('/', (req, res) =>{
  try{
    const doctors = readDoctors();
    
    res.status(200).send({status: 200, message: 'success', data: doctors})
    }
  catch(error){
    console.log(error.message);
}});

// Post Route

const writeDoctors = ((data) =>{
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    });
doctorRoutes.post('/post', (req, res) =>{
  try{
    const doctors = readDoctors();
    const body = req.body;
  const {name, specialty, experience, location, image, description} = body;
    if(!name || !specialty || !experience || ! location || !image || !description){
      return res.status(400).send({status: 400, message: 'All fields are required'});
    }
    const newDoctor = {id: doctors.length + 1, ...body};
    doctors.push(newDoctor);

    writeDoctors(doctors)
   return res.status(201).send({status: 201, message: 'Doctor added successfully', data: newDoctor})
  }
  catch(error){
   console.log(error.message);
   return res.status(500).send({
      status: 500,
      message: 'Internal Server Erro'})
  }
});

// Get by :id

doctorRoutes.get('/:id', (req, res)=>{
  try{
  const doctorId = parseInt(req.params.id);
  const doctors = readDoctors();
 const match_D_Id = doctors.find((fDoc)=> fDoc.id === doctorId);
  if(!match_D_Id){
   return res.status(404).send({status: 404, message: "Doctor not found",});
  }
     return res.status(200).send({status: 200, data: match_D_Id})
  }
  catch(error){
    console.error(error.message);
    return res.status(500).send({status: 500, message: 'Internal server error'})
  }
});

// Delete Doctor Route by :id

doctorRoutes.delete('/deleteDoctor/:id', (req, res) =>{
  try{
  const doctorId = parseInt(req.params.id);
  const doctors = readDoctors();
  const doctorIndex = doctors.findIndex(doc => doc.id === doctorId);
  if(doctorIndex === -1 ){
    return res.status(404).send({status: 404, message: 'Doctor not found'})
  };
  const deleteDoctor = doctors.splice(doctorIndex, 1)[0];
  writeDoctors(doctors);
  res.status(200).send({status: 200, message: 'Doctor deleted successfully', data: deleteDoctor});
  }
  catch(error)  {
    console.error(error.message);
    return res.status(500).send({status: 500, message: 'Internal server error'});
  }
});
doctorRoutes.put('/put', (req, res)=>{
try{
const doctorId = req.params.id;
const doctors = readDoctors();
const doctorIndex = doctors.findIndex(docObj => docObj === doctorId);
if(doctorIndex === -1) {
  return res.status(404).send({status: 404, message: 'Doctor not found'});
}
const updatedDoctor = {...req.body, id: doctorId};
writeDoctors(doctors);
return res.status(200).send({status: 200, message: 'Doctor updated successfully', data: updatedDoctor});

}
catch(err){
  console.log(err.message);
  return res.status(500).send({status: 500, message: 'Internal server error'});

}
});

// Put

doctorRoutes.put('/updateDoctor/:id', (req, res)=>{
  try {
    const doctorId = parseInt(req.params.id);
    const doctors = readDoctors();
    const doctorIndex = doctors.findIndex(docInd => docInd.id === doctorId);
    if(doctorIndex === -1){
      return res.status(404).send({status: 404, message: 'Doctor not found'});
    }
    const updatedDoctor = {...req.body, id: doctorId};
    doctors[doctorIndex] = updatedDoctor;
    writeDoctors(doctors);
    res.status(200).send({status: 200, message: 'Doctor updated successfully ', data: updatedDoctor})
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({status: 500, message: 'Internal server error'});
  }
});

// Patch

doctorRoutes.patch('/patchDoctor/:id', (req, res) => {
  try{
    const doctorId = Number(req.params.id);
    const body = req.body;
    console.log(body)
    const doctors = readDoctors();
    const doctorIndex = doctors.findIndex(doc => doc.id === doctorId);
    if(doctorIndex === -1) {
     return res.status(404).send({status: 404, message: 'Doctor not found'});
    }
    const existingDoctor = doctors[doctorIndex];
    const updatedFields = {...existingDoctor, ...body, id: doctorId};
    doctors[doctorIndex] = updatedFields;
    writeDoctors(doctors);
    //console.log(doctors);
    res.status(200).send({status: 200, message: 'Doctor updated successfully ', data: doctors[doctorIndex]})
  }
  catch(err){
    console.log(err.message);
    return res.status(500).send({status: 500, message: 'Internal server error '});
  }
});
// Validate Ids

/*doctorRoutes.get('/validateIds', (req, res) => {
  try {
    const doctors = readDoctors();

    const existingIds = doctors.map(doc => doc.id).sort((a, b) => a - b);

    const missingIds = [];
    const maxId = Math.max(...existingIds);

    for (let i = 1; i <= maxId; i++) {
      if (!existingIds.includes(i)) {
        missingIds.push(i);
      }
    }

    res.status(200).send({
      status: 200,
      existingIds,
      missingIds
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send({ status: 500, message: 'Internal server error' });
  }
}); */

export default doctorRoutes;









