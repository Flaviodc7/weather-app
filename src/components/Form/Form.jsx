import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <input
        aria-label="location"
        type="text"
        className="input form-control"
        placeholder="Buscar una ubicación"
        required
      />
      <button type="submit" className="button">
          Buscar
      </button>
    </form>
  );
};

export default Form;
