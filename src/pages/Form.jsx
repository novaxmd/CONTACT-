import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("messages").insert([data]);
    if (!error) {
      alert("Message sent successfully!");
      setData({ name: "", phone: "", email: "", message: "" });
    } else {
      alert("Failed to send message: " + error.message);
    }
  };

  return (
    <form onSubmit={submit} className="form-container">
      <input
        type="text"
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <textarea
        placeholder="Your Message"
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
  }
