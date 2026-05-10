import React from "react";
import { useLocation } from "react-router";

function Employee() {
  const { state } = useLocation();

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg border-t-4 border-purple-600 p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Employee Profile
        </h1>

        {/* Profile Card */}
        <div className="space-y-3 text-center">

          <p className="text-xl font-semibold text-gray-800">
            {state.firstName} {state.lastName}
          </p>

          <p className="text-gray-600">
            📧 {state.email}
          </p>

          <p className="text-gray-600">
            📱 {state.mobile}
          </p>

          <p className="text-gray-600">
            💼 {state.designation}
          </p>

          <p className="text-gray-600">
            🏢 {state.company}
          </p>

        </div>

      </div>
    </div>
  );
}

export default Employee;