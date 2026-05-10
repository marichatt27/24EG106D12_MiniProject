function Home() {
  return (
    <div className="min-h-screen bg-purple-50 p-6">

      {/* Header Section */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-purple-700">
          Employee Management System
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          A simple and efficient way to manage employee records
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-700">
            Add Employees
          </h2>
          <p className="text-gray-600 mt-2">
            Create and store employee data quickly and easily.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-indigo-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600">
            Manage Records
          </h2>
          <p className="text-gray-600 mt-2">
            Edit, update, and maintain employee details.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-400 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-600">
            View Employees
          </h2>
          <p className="text-gray-600 mt-2">
            Access all employee records in one place.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;