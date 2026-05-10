import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";
import { useCounterStore } from "../store/CounterStore";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();
let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  console.log("Home")
  const {counter,changeCounter}=useContext(counterContextObj)
  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch("https://two4eg106d12-miniproject.onrender.com/employee-api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj)
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-purple-50 p-6">

      {/* COUNTERS SECTION */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

        <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-purple-600">
          <h1 className="text-xl font-semibold text-purple-700">
            Counter: {counter}
          </h1>
          <button
            onClick={changeCounter}
            className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Change
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-indigo-500">
          <h1 className="text-xl font-semibold text-indigo-600">
            New Counter: {newCounter}
          </h1>
          <button
            onClick={incrementCounter}
            className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            +
          </button>
        </div>

      </div>

      {/* FORM CARD */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-600">

        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create New Employee
        </h1>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">

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

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Add Employee
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreateEmp;
