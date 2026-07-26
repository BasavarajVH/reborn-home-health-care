import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Appointments from "./admin/Appointments";
import Patients from "./admin/Patients";
import Settings from "./admin/Settings";
import AdminLayout from "./admin/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Login */}

        <Route path="/admin/login" element={<Login />} />

        {/* Redirect /admin */}

        <Route
          path="/admin"
          element={<Navigate to="/admin/login" replace />}
        />

        {/* Admin */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Unknown */}

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
