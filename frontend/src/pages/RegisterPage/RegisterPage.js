import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./RegisterPage.css"
const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    is_student: false,
    is_teacher: false,
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
  
    <div className="">
      <form className="register-form" onSubmit={handleSubmit}>
        <label style={{"margin":"10px"}}>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label style={{"margin":"10px"}}>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label style={{"margin":"10px"}}>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label style={{"margin":"10px"}}>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label style={{"margin":"10px"}}>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <p className="note" style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <label style={{"margin":"10px"}}>
          Teacher Checkbox:
          <input
            type="checkbox"
            name="is_teacher"
            value={formData.is_teacher}
            onChange={handleInputChange}
          />
        </label>
        <label style={{"margin":"10px"}}>
          Student Checkbox:
          <input
            type="checkbox"
            name="is_student"
            value={formData.is_student}
            onChange={handleInputChange}
          />
        </label>
        <button className="register">Register!</button>
      </form>
    </div>
   
  );
};

export default RegisterPage;
