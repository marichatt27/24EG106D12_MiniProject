import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-purple-50">

      {/* Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Page Content */}
      <main className="flex-1 px-4 py-8 md:px-10">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default RootLayout;