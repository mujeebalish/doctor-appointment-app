import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import doctorRoutes from './Routes/doctorRoutes.js';
//import appointmentRoutes from './routes/appointmentRoutes.js';
//app.use(express.json())
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8181;


app.get('/', (req, res)=>{
  try{
    res.status(200).send({status: 200, message: 'success', data: 'welcome to Doctor- Appointment-App backend'});
    console.log("Checking if git sees this change...");
  }
  catch(err) {
    console.error(err.message)
  }
});
app.use('/doctors', doctorRoutes);
//app.use('/post', doctorRoutes);
//app.use('/appointment', appointmentRoutes);

 app.listen(PORT, ()=>{
   console.log(`Server running on PORT${PORT}`)
 });