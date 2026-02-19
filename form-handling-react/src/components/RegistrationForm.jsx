import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("جميع الحقول مطلوبة");
      return;
    }

    setError("");
    console.log("User Registered:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register (Controlled)</h2>

      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
