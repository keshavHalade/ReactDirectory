import React from 'react';
import { bgScreen } from '../assets/img';

function AppHome() {

    const user = localStorage.getItem("authToken");
        const parsedUser = JSON.parse(user);    
      const styles = {
        backgroundImage: `url(${bgScreen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      };

  return (
    <div style={styles} className='d-flex flex-column min-vh-100 '>
        <div className='bg-dark bg-opacity-50 p-5 rounded'>
        <h1 className="text-center mb-4">Welcome {parsedUser.username} to learn</h1>
        <h6 className="text-center mb-4 fs-4">This is a simple app showcasing React Router usage and demos.</h6>
        <button className='btn btn-success'>Start Learning</button>
        </div>
    </div>
  );
}

export default AppHome;
