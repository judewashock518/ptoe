import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <body className="bg">
    <div className="header"><h1>The Periodic Table of Elements</h1></div>
    <table>
        <tr>
          <td className="alkalai-metals"></td>
          <td>Alkalai metals</td>
          <td className="transition-metals"></td>
          <td>Transition metals</td>
        </tr>
        <tr>
          <td className="alkaline-earth-metals"></td>
          <td>Alkaline earth metals</td>
          <td className="metalloids"></td>
          <td>Metalloids</td>
        </tr>
        <tr>
          <td className="polyatomic-nonmetals"></td>
          <td>Polyatomic nonmetals</td>
          <td className="diatomic-nonmetals"></td>
          <td>Diatomic nonmetals</td>
        </tr>
        <tr>
            <td className="unknown-properties"></td>
            <td>Unknown properties</td>
            <td className="lanthanides"></td>
            <td>Lanthanides</td>
        </tr>
        <tr>
            <td className="actinides"></td>
            <td>Actinides</td>
            <td className="noble-gases"></td>
            <td>Noble gases</td>
        </tr>
        <tr>
            <td className="post-transition-metals"></td>
            <td>Post-transition metals</td>
        </tr>
    </table>
    </body>
  );
};

export default HomePage;



// const HomePage = () => {
//   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
//   // The "token" value is the JWT token that you will send in the header of any request requiring authentication
//   //TODO: Add an AddCars Page to add a car for a logged in user's garage
//   const [user, token] = useAuth();
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>The Periodic Table of Elements</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };
