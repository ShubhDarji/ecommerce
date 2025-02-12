import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !profilePic) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);

    try {
      document.getElementById("signup-btn").disabled = true; // Prevent multiple requests

      const response = await axios.post("http://localhost:5000/api/auth/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed!");
    } finally {
      document.getElementById("signup-btn").disabled = false; // Re-enable button
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} required />
        <button id="signup-btn" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
