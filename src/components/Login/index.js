import React from "react";
import "./Login.css";
import { FaCheckCircle  } from "react-icons/fa";

function Connect(){
    return(
        
        <div className="content">
    <div className="info">
        <input type="text" placeholder="Nom.."></input>
        <input type="text" placeholder="Prénom.."></input>
       <input type="text" placeholder="Numéro de téléphone.."></input>
        <input type="email" placeholder="Adress email.."></input>
        <input type="password" placeholder="mot de passe.."></input>
        
        <btn className="button" > <FaCheckCircle size="1.5em"/> </btn>
    </div>
        </div>
    )
}
export default Connect;
