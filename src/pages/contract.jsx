import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.message) newErrors.message = "Message required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}
      />
      {errors.email && <p>{errors.email}</p>}

      <textarea
        placeholder="Message"
        onChange={(e) => setForm({...form, message: e.target.value})}
      />
      {errors.message && <p>{errors.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
