import express from 'express';
import {doctors} from '../data/doctors.js';

const doctorRoutes = express.Router();

doctorRoutes.get('/', (req, res) =>{
  try{
  const body = req.body;
    if(!body){
      const error = new Error('path is important');
    }
    res.status(200).send({status: 200, message: 'success', data: doctors})
  }
  catch(error){
    console.log(error.mesaage);
  }
});
export default doctorRoutes;