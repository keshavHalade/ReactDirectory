import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import UserDasboard from "./components/Dashboard/UserDasboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalData, setLocalData } from "./utils/LocalStorage";
import AdminForm from "./components/Reusable/AdminForm";
//john.doe@example.com
function App() {
  const [user, setUser] = useState(null);
  const [authData, setAuthData] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);

  useEffect(() => {
    setLocalData()
    setAuthData(getLocalData());
  }, []);

  const handleUserLogin = (Uemail, Upassword) => {
    if (Uemail === "admin@example.com" && Upassword === "admin") {
      console.log("Admin In");
      setUser("admin");
    } else if (authData) {
      console.log(authData);
      let LoggedUser = authData.find(
        (user) => user.email === Uemail && user.password === Upassword
      );
      if (LoggedUser) {
        console.log("LoggedUser", LoggedUser.email);
        console.log("LoggedUser", LoggedUser.password);
        console.log(LoggedUser);
        console.log(LoggedUser.role);
        setLoggedUserData(LoggedUser);
        setUser(LoggedUser.role);
        return;
      } else {
        alert("Invalid Credentials");
        return;
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleUserLogin={handleUserLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <UserDasboard data={loggedUserData}/>
      )}
    </>
  );
}

export default App;
