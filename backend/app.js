import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Student } from './models/student.model.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); 

app.post('/signup', async (req, res) => {
  
    const {name, email, password, confirmPassword } = req.body;
  console.log('Received signup data:', {name, email, password, confirmPassword });

  const student = await Student.find({email})
  if(!student) res.status(400).json({message: "Student aleardy exist"});
  const createStudent = await Student.create({name,email,password,confirmPassword});
  
  const studentCreated = await Student.find({_id: createStudent._id}).select("-password -confirmPassword");
  if(!studentCreated) res.status(400).json({message: "some error occured"});

    res.status(201).json({message: "student created", data: studentCreated, success: true})
    

  res.status(200).json({ message: 'Signup data received successfully!' });
});



app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Received login data:', { email, password }); 
  
  
    res.status(200).json({ message: 'Login data received successfully!' });
  });

  
  app.post('/mentorsignup', (req, res) => {
    const { name, email, qualification, category, password, description } = req.body;
    console.log('Received mentor signup data:', { name, email, qualification, category, password, description });
  
    res.status(200).json({ message: 'Signup data received successfully!' });
  });

export default app
