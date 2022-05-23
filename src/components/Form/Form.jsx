import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
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

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
