import Form from './Form';
import axios from 'axios';
import { useNavigate, Routes, Route } from 'react-router-dom'
import Display from './Display';
import { useEffect, useState } from 'react';

const Main = () => {
   let navigate = useNavigate()
   const [form, setForm] = useState({
    firstname:"",
    surname:"",
    phone:"",
    email:"",
    age:""
   })

   const [list, setList] = useState([]);
   useEffect(() => {
    getDetails();
   }, []);

   const handleChange = (e) => {
    setForm({
      ...form,
       [e.target.name]:e.target.value,
    });
   };

   const handleSubmit = async (e) => {
   e.preventDefault();
   if(form.firstname === "" || form.surname === "" || form.phone === "" || form.email === "" || form.age === "") {
    return  alert ("Fill all the inputs")
   }else{
    try{
      const saveDetails = await axios.post(
        "http://localhost:3007/save_details",
          form,
      );
      getDetails();
      navigate('/display')
      setForm({
        name: "",
        surname: "",
        phone: "",
        email: "",
        age: ""
      })
      return saveDetails;
      
    } catch (error) {
      console.log("error", error);
    }
  }
    
  };
  const getDetails = async () => {
    await axios
      .get("http://localhost:3007/get_details")
      .then((response) => {
        const data = response.data;
        setList(data);
      })
      .catch(() => {
      });
    };

    const deleteApplicant = async (id) => {
      console.log('id', id)
      let res = await axios.delete(`http://localhost:3007/delete_applicant/${id}`);
      getDetails();
      return res.data
     };


  

  return (

    <div>
      <Routes>
        <Route path="/" exact  element={<Form handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/display" element={<Display list={list} getDetails={getDetails} deleteApplicant={deleteApplicant} />} />
      </Routes>
    </div>

  );
}

export default Main;