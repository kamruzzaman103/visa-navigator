
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddVisa from "./pages/AddVisa";
import AllVisas from "./pages/AllVisas";
import VisaDetails from "./pages/VisaDetails";
import ApplyVisaModal from "./components/ApplyVisaModal";
import MyVisaApplications from "./pages/MyVisaApplications";
import ForgotPassword from './components/ForgotPassword';
import NotFound from "./pages/NotFound";
import MyAddedVisas from "./pages/MyAddedVisas";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <div>Protected Page</div>
              </PrivateRoute>
            }
          />

          <Route path="/add-visa" element={<PrivateRoute><AddVisa /></PrivateRoute>} />
          <Route path="/all-visas" element={<AllVisas />} />
          <Route path="/visa-details/:id" element={<PrivateRoute><VisaDetails /></PrivateRoute>} />
          <Route path="/my-visa-applications" element={<PrivateRoute><MyVisaApplications /></PrivateRoute>} />
          <Route path="/my-added-visas" element={<PrivateRoute><MyAddedVisas /></PrivateRoute>} />
          <Route path="/apply-visa-modal" element={<ApplyVisaModal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
