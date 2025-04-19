// my-app/src/Form.jsx
import { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", formData);
      alert("User added: ID " + res.data.id);
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
