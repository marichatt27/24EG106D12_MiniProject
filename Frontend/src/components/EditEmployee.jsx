
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import axios from 'axios';



function EditEmployee() {
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  const {
      register,
      handleSubmit,
      formState:{errors},
      setValue,
    } = useForm();
    //get empObj from navigate Hook
    const { state }=useLocation();

    useEffect(()=>{
        setValue("firstName",state.firstName);
        setValue("lastName", state.lastName);
        setValue("email", state.email);
        setValue("mobile", state.mobile);
        setValue("designation", state.designation);
        setValue("company", state.company);
    },);

    const navigate=useNavigate()
    const saveModifiedEmp=async (modifiedEmp) =>
    {
      try {
        //console.log(modifiedEmp);
        const res = await axios.put(
          `https://two4eg106d12-miniproject.onrender.com/employee/${state._id}`,modifiedEmp,
        );
        if (res.status === 200) {
          //navigate to list of emp
          navigate("/List");
        }
         else {
          let errorRes = await res.json();
          console.log("error responce is ", errorRes);
          throw new Error(errorRes.reason);
        }
      }
      catch (err) {
        console.log("err in catch", err);
        //deal with err
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
     console.log(error);

     if (loading) {
       return <p className="text-center text-4xl">Loading....</p>;
     }
     if (error) {
       return <p className="text-red-500 text-center text-3xl">{error}</p>;
     }

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border-t-4 border-purple-600">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Edit Employee
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(saveModifiedEmp)} className="space-y-4">

          <input
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Mobile Number"
            {...register("mobile")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Designation"
            {...register("designation")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Company Name"
            {...register("company")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition font-semibold"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};
    


export default EditEmployee
