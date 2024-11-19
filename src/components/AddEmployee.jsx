import React, { useState } from "react";
import EmployeeServices from "../service/EmployeeServices";

const AddEmployee = () => {

 const [Employee, setEmployee] = useState({
  id:"",
  firstName:"",
  lastName:"",
  emailId:""
 });

 const handleChange = (e) =>{
  const value = e.target.value;
  setEmployee({...Employee,[e.target.name]:value}); 
 }

 const saveEmployee = (e) =>{
  e.preventDefault();
  EmployeeServices.saveEmployee(Employee).then((reponse)=>{
    console.log(reponse);
    

  }).catch((error)=>{
    console.error(error)
    
  })
 }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      {/* add employee box */}
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>

        {/* forms */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="" className="block text-gray-600 text-sm font-normal" >
            First Name
          </label>
          <input type="text" className="h-10 border mt-2 px-2 py-2 " name="firstName" value={Employee.firstName} onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="" className="block text-gray-600 text-sm font-normal rounded-s">
            Last Name
          </label>
          <input type="text" className="h-10 border mt-2 px-2 py-2 " name="lastName" value={Employee.lastName} onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label htmlFor="" className="block text-gray-600 text-sm font-normal rounded-s">
            Email
          </label>
          <input type="email" className="h-10 border mt-2 px-2 py-2 rounded-s " name="emailId" value={Employee.emailId} onChange={(e)=>handleChange(e)}/>
        </div>

        {/* button */}

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
        <button onClick={saveEmployee} className="rounded text-white bg-green-400 font-semibold py-2 px-6 hover:bg-green-700">Save</button>
        <button className="rounded text-white bg-red-400 font-semibold py-2 px-6 hover:bg-red-700">Clear</button>
        </div>

      </div>
    </div>
  );
};

export default AddEmployee;
