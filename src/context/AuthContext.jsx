// import  { createContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import app from "../firebase.config";


// const auth = getAuth(app);

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Observe user state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const logout = () => signOut(auth);

//   return (
//     <AuthContext.Provider value={{ user, loading, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// import { createContext, useContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import app from "../firebase.config"; // Firebase app configuration

// // Initialize Firebase Auth
// const auth = getAuth(app);

// // Create AuthContext
// const AuthContext = createContext();

// // AuthProvider component to wrap the app
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Observe user state and update context
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   // Logout function
//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, logout }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export  {useAuth };
// export default AuthProvider;


// import { createContext, useContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth"; // Assuming Firebase
// import { auth } from "../firebase.config"; // Your Firebase setup file

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(undefined); // Use undefined to track initial state
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user || null); // Set user or null for unauthenticated state
//       setLoading(false); // Loading is done
//     });

//     return () => unsubscribe(); // Cleanup the listener on unmount
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth, loginWithGoogle, logout } from '../firebase.config';
// import { onAuthStateChanged } from 'firebase/auth';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading]=useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user,loading, loginWithGoogle, logout}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import { createContext, useContext, useEffect, useState } from 'react';
import { auth, loginWithGoogle, logout } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Show the spinner while the authentication state is loading
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading h-full size-24 loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
