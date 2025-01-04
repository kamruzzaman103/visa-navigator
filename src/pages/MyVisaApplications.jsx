import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import VisaApplicationCard from "../components/VisaApplicationCard";

const MyVisaApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const fetchMyApplications = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/visa-applications?email=${user.email}`);
          setApplications(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
          toast.error("Failed to fetch your applications. Please try again.");
        }
      };
      fetchMyApplications();
    }
  }, [user, navigate]);

  const handleCancel = async (applicationId) => {
    try {
      await axios.delete(`http://localhost:5000/api/visa-applications/${applicationId}`);
      setApplications((prevApps) => prevApps.filter((app) => app._id !== applicationId));
      toast.success("Application cancelled successfully!");
    } catch (error) {
      toast.error("Failed to cancel application. Please try again.");
    }
  };

  const filteredApplications = Array.isArray(applications)
    ? applications.filter((app) => {
        // const visaType = app.visaType?.toLowerCase() || ""; // Safely handle undefined
        const country= app.country?.toLowerCase() || ""; // Safely handle undefined
        return (
          // visaType.includes(searchTerm.toLowerCase()) ||
          country.includes(searchTerm.toLowerCase())
        );
      })
    : [];

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-8">My Visa Applications</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by visa type or country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredApplications.length === 0 ? (
          <p className="text-center col-span-full">No applications found.</p>
        ) : (
          filteredApplications.map((application) => (
            <VisaApplicationCard
              key={application._id}
              application={application}
              onCancel={() => handleCancel(application._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyVisaApplications;