import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function List() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()

  const goToEmployee=(empObj)=>{
    //navigate to employee
    navigate("/Employee",{state:empObj})
  }
   const goToEditEmployee = (empObj) => {
     //navigate to employee
     navigate("/EditEmployee", { state: empObj });
   };
   const deleteEmpById = async (id) => {
     let res = await axios.delete(
       `https://two4eg106d12-miniproject.onrender.com/employee-api/employee/${id}`,
     );
     if (res.status === 200)
       //get latest emp data
       getEmps();
   };

  //get all emps
    async function getEmps() {
      let res = await fetch("https://two4eg106d12-miniproject.onrender.com/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
//get all emps on component loading
useEffect(()=>{
  getEmps();
},[]);


  return (
    <div className="min-h-screen bg-purple-50 p-6">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Employees List
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white rounded-2xl shadow-md p-5 border-t-4 border-purple-500 hover:shadow-xl hover:-translate-y-1 transition"
          >

            {/* Info */}
            <p className="text-purple-700 font-semibold text-lg">
              {empObj.firstName}
            </p>

            <p className="text-gray-600 text-sm">{empObj.email}</p>

            {/* Buttons */}
            <div className="flex justify-between mt-5 gap-2">

              <button
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded-lg text-sm transition"
                onClick={() => goToEmployee(empObj)}
              >
                View
              </button>

              <button
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-lg text-sm transition"
                onClick={() => goToEditEmployee(empObj)}
              >
                Edit
              </button>

              <button
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg text-sm transition"
                onClick={() => deleteEmpById(empObj._id)}
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default List;
