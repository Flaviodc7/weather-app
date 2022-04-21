import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        aria-label="location"
        type="text"
        className="input form-control"
        placeholder="Buscar una ubicación"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="button" onClick={onSubmit}>
        BUSCAR
      </button>
    </form>
  );
};

export default Form;
