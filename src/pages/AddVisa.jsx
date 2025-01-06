// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AddVisa = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     countryImage: "",
//     countryName: "",
//     visaType: "",
//     processingTime: "",
//     requiredDocuments: [],
//     description: "",
//     ageRestriction: "",
//     fee: "",
//     validity: "",
//     applicationMethod: "",
//   });

//   // Handle input changes for text and select inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle checkbox changes for requiredDocuments
//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData((prevState) => {
//       const newDocuments = checked
//         ? [...prevState.requiredDocuments, value]
//         : prevState.requiredDocuments.filter((doc) => doc !== value);
//       return { ...prevState, requiredDocuments: newDocuments };
//     });
//   };

//   // Handle form submission
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     // Adjust the API endpoint URL if needed (e.g., for development proxy)
//   //     const response = await axios.post(
//   //       "https://visa-navigator-server-murex.vercel.app/visas", // Replace with your API endpoint
//   //       formData
//   //     );
//   //     if (response.status === 201) {
//   //       toast.success("Visa added successfully!");
//   //       navigate("/all-visas"); // Redirect to the all-visas page
//   //     }
//   //   } catch (error) {
//   //     console.error("Error adding visa:", error);
//   //     toast.error("Failed to add visa. Please try again.");
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Retrieve the token from localStorage
//       const token = localStorage.getItem("token");
//       if (!token) {
//         toast.error("You must be logged in to add a visa.");
//         return;
//       }
  
//       // Include the token in the headers
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
  
//       // Send the POST request
//       const response = await axios.post(
//         "https://visa-navigator-server-murex.vercel.app/api/visas", // API endpoint
//         formData,
//         config
//       );
  
//       if (response.status === 201) {
//         toast.success("Visa added successfully!");
//         navigate("/all-visas");
//       }
//     } catch (error) {
//       console.error("Error adding visa:", error);
//       toast.error(error.response?.data?.message || "Failed to add visa. Please try again.");
//     }
//   };
  
  
  

//   return (
//     <div className="container mx-auto py-16">
//       <h1 className="text-3xl font-bold text-center mb-8">Add Visa</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl mx-auto bg-white p-8 rounded shadow-lg"
//       >
//         {/* Country Image */}
//         <div className="mb-4">
//           <label htmlFor="countryImage" className="block text-gray-700">
//             Country Image URL:
//           </label>
//           <input
//             type="text"
//             id="countryImage"
//             name="countryImage"
//             value={formData.countryImage}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Country Name */}
//         <div className="mb-4">
//           <label htmlFor="countryName" className="block text-gray-700">
//             Country Name:
//           </label>
//           <input
//             type="text"
//             id="countryName"
//             name="countryName"
//             value={formData.countryName}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Visa Type */}
//         <div className="mb-4">
//           <label htmlFor="visaType" className="block text-gray-700">
//             Visa Type:
//           </label>
//           <select
//             id="visaType"
//             name="visaType"
//             value={formData.visaType}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           >
//             <option value="">Select Visa Type</option>
//             <option value="Tourist Visa">Tourist Visa</option>
//             <option value="Student Visa">Student Visa</option>
//             <option value="Official Visa">Official Visa</option>
//           </select>
//         </div>

//         {/* Processing Time */}
//         <div className="mb-4">
//           <label htmlFor="processingTime" className="block text-gray-700">
//             Processing Time:
//           </label>
//           <input
//             type="text"
//             id="processingTime"
//             name="processingTime"
//             value={formData.processingTime}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Required Documents */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Required Documents:</label>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 value="Valid passport"
//                 onChange={handleCheckboxChange}
//               />
//               <span className="ml-2">Valid passport</span>
//             </label>
//           </div>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 value="Visa application form"
//                 onChange={handleCheckboxChange}
//               />
//               <span className="ml-2">Visa application form</span>
//             </label>
//           </div>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 value="Recent passport-sized photograph"
//                 onChange={handleCheckboxChange}
//               />
//               <span className="ml-2">Recent passport-sized photograph</span>
//             </label>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-gray-700">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Age Restriction */}
//         <div className="mb-4">
//           <label htmlFor="ageRestriction" className="block text-gray-700">
//             Age Restriction:
//           </label>
//           <input
//             type="number"
//             id="ageRestriction"
//             name="ageRestriction"
//             value={formData.ageRestriction}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>

//         {/* Fee */}
//         <div className="mb-4">
//           <label htmlFor="fee" className="block text-gray-700">
//             Fee:
//           </label>
//           <input
//             type="number"
//             id="fee"
//             name="fee"
//             value={formData.fee}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Validity */}
//         <div className="mb-4">
//           <label htmlFor="validity" className="block text-gray-700">
//             Validity:
//           </label>
//           <input
//             type="text"
//             id="validity"
//             name="validity"
//             value={formData.validity}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Application Method */}
//         <div className="mb-4">
//           <label htmlFor="applicationMethod" className="block text-gray-700">
//             Application Method:
//           </label>
//           <input
//             type="text"
//             id="applicationMethod"
//             name="applicationMethod"
//             value={formData.applicationMethod}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded w-full"
//         >
//           Add Visa
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddVisa;


// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AddVisa = () => {
//   const [visaData, setVisaData] = useState({
//     countryImage: "",
//     countryName: "",
//     visaType: "",
//     processingTime: "",
//     requiredDocuments: [],
//     description: "",
//     ageRestriction: "",
//     fee: "",
//     validity: "",
//     applicationMethod: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Example token retrieval (Update as needed)
//   const userToken = localStorage.getItem("authToken");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVisaData({ ...visaData, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setVisaData({
//         ...visaData,
//         requiredDocuments: [...visaData.requiredDocuments, value],
//       });
//     } else {
//       setVisaData({
//         ...visaData,
//         requiredDocuments: visaData.requiredDocuments.filter((doc) => doc !== value),
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "https://visa-navigator-server-murex.vercel.app/api/visas",
//         visaData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${userToken}`, // Include token in the Authorization header
//           },
//         }
//       );
//       if (response.status === 201) {
//         toast.success("Visa added successfully!");
//         setVisaData({
//           countryImage: "",
//           countryName: "",
//           visaType: "",
//           processingTime: "",
//           requiredDocuments: [],
//           description: "",
//           ageRestriction: "",
//           fee: "",
//           validity: "",
//           applicationMethod: "",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Error adding visa. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-8 p-4 border rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">Add Visa</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Country Image URL</label>
//           <input
//             type="text"
//             name="countryImage"
//             value={visaData.countryImage}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Country Name</label>
//           <input
//             type="text"
//             name="countryName"
//             value={visaData.countryName}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Visa Type</label>
//           <select
//             name="visaType"
//             value={visaData.visaType}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           >
//             <option value="">Select Visa Type</option>
//             <option value="Tourist Visa">Tourist Visa</option>
//             <option value="Student Visa">Student Visa</option>
//             <option value="Official Visa">Official Visa</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Processing Time</label>
//           <input
//             type="text"
//             name="processingTime"
//             value={visaData.processingTime}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Required Documents</label>
//           <div className="flex flex-wrap gap-4">
//             {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map(
//               (doc, idx) => (
//                 <div key={idx}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       value={doc}
//                       onChange={handleCheckboxChange}
//                       checked={visaData.requiredDocuments.includes(doc)}
//                     />
//                     <span className="ml-2">{doc}</span>
//                   </label>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={visaData.description}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Age Restriction</label>
//           <input
//             type="number"
//             name="ageRestriction"
//             value={visaData.ageRestriction}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Fee</label>
//           <input
//             type="number"
//             name="fee"
//             value={visaData.fee}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Validity</label>
//           <input
//             type="text"
//             name="validity"
//             value={visaData.validity}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Application Method</label>
//           <input
//             type="text"
//             name="applicationMethod"
//             value={visaData.applicationMethod}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Add Visa"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddVisa;


// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AddVisa = () => {
//   const [visaData, setVisaData] = useState({
//     countryImage: "",
//     countryName: "",
//     visaType: "",
//     processingTime: "",
//     requiredDocuments: [],
//     description: "",
//     ageRestriction: "",
//     fee: "",
//     validity: "",
//     applicationMethod: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Example token retrieval (Update as needed)
//   const userToken = localStorage.getItem("authToken");
//   console.log('token is:',userToken);
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVisaData({ ...visaData, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setVisaData({
//         ...visaData,
//         requiredDocuments: [...visaData.requiredDocuments, value],
//       });
//     } else {
//       setVisaData({
//         ...visaData,
//         requiredDocuments: visaData.requiredDocuments.filter((doc) => doc !== value),
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if the user token exists
//     if (!userToken) {
//       toast.error("Authentication required. Please log in.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "https://visa-navigator-server-murex.vercel.app/api/visas",
//         visaData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${userToken}`, // Include token in the Authorization header
//           },
//         }
//       );

//       if (response.status === 201) {
//         toast.success("Visa added successfully!");
//         setVisaData({
//           countryImage: "",
//           countryName: "",
//           visaType: "",
//           processingTime: "",
//           requiredDocuments: [],
//           description: "",
//           ageRestriction: "",
//           fee: "",
//           validity: "",
//           applicationMethod: "",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Error adding visa. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-8 p-4 border rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">Add Visa</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Country Image URL</label>
//           <input
//             type="text"
//             name="countryImage"
//             value={visaData.countryImage}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Country Name</label>
//           <input
//             type="text"
//             name="countryName"
//             value={visaData.countryName}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Visa Type</label>
//           <select
//             name="visaType"
//             value={visaData.visaType}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           >
//             <option value="">Select Visa Type</option>
//             <option value="Tourist Visa">Tourist Visa</option>
//             <option value="Student Visa">Student Visa</option>
//             <option value="Official Visa">Official Visa</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Processing Time</label>
//           <input
//             type="text"
//             name="processingTime"
//             value={visaData.processingTime}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Required Documents</label>
//           <div className="flex flex-wrap gap-4">
//             {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map(
//               (doc, idx) => (
//                 <div key={idx}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       value={doc}
//                       onChange={handleCheckboxChange}
//                       checked={visaData.requiredDocuments.includes(doc)}
//                     />
//                     <span className="ml-2">{doc}</span>
//                   </label>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={visaData.description}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Age Restriction</label>
//           <input
//             type="number"
//             name="ageRestriction"
//             value={visaData.ageRestriction}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Fee</label>
//           <input
//             type="number"
//             name="fee"
//             value={visaData.fee}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Validity</label>
//           <input
//             type="text"
//             name="validity"
//             value={visaData.validity}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Application Method</label>
//           <input
//             type="text"
//             name="applicationMethod"
//             value={visaData.applicationMethod}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Add Visa"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddVisa;

import { useState,useEffect  } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const AddVisa = () => {
  const [visaData, setVisaData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
    userEmail: "", // To associate visa with logged-in user
  });

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setVisaData((prevData) => ({ ...prevData, userEmail: user.email }));
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisaData({ ...visaData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setVisaData({
        ...visaData,
        requiredDocuments: [...visaData.requiredDocuments, value],
      });
    } else {
      setVisaData({
        ...visaData,
        requiredDocuments: visaData.requiredDocuments.filter((doc) => doc !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please log in to add a visa.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://visa-navigator-server-murex.vercel.app/api/visas", // Backend endpoint for adding visa
        visaData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Visa added successfully!");
        setVisaData({
          countryImage: "",
          countryName: "",
          visaType: "",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: "",
          fee: "",
          validity: "",
          applicationMethod: "",
          userEmail: user.email, // Reset with logged-in user email
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Error adding visa. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm lg:max-w-lg mx-auto my-8 p-4 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Visa</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Country Image URL</label>
          <input
            type="text"
            name="countryImage"
            value={visaData.countryImage}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country Name</label>
          <input
            type="text"
            name="countryName"
            value={visaData.countryName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Visa Type</label>
          <select
            name="visaType"
            value={visaData.visaType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Official Visa">Official Visa</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={visaData.processingTime}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Required Documents</label>
          <div className="flex flex-wrap gap-4">
            {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map(
              (doc, idx) => (
                <div key={idx}>
                  <label>
                    <input
                      type="checkbox"
                      value={doc}
                      onChange={handleCheckboxChange}
                      checked={visaData.requiredDocuments.includes(doc)}
                    />
                    <span className="ml-2">{doc}</span>
                  </label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={visaData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age Restriction</label>
          <input
            type="number"
            name="ageRestriction"
            value={visaData.ageRestriction}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            value={visaData.fee}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Validity</label>
          <input
            type="text"
            name="validity"
            value={visaData.validity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            value={visaData.applicationMethod}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Visa"}
        </button>
      </form>
    </div>
  );
};

export default AddVisa;

