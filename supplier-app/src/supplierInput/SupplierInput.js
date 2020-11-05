import React, { useState } from "react";
import axios from "../axios/axios";
import { useHistory } from "react-router-dom";
import "./SupplierInput.css";

const SupplierInput = () => {
  const history = useHistory();
  const [codeInput, setCodeInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [telephoneInput, setTelephoneInput] = useState("");

  const addSupplier = () => {
    const newSupplier = {
      code: codeInput,
      name: nameInput,
      telephone: telephoneInput,
    };

    async function postData() {
      try {
        await axios.post("/api/suppliers", newSupplier);
        alert("Supplier posted successfully");
        history.goBack();
      } catch (error) {
        alert("Something went wrong", error);
      }
    }

    postData();
  };

  return (
    <div className="supplierInput">
      <div className="supplierInput__container">
        <h1>Place supplier details</h1>
        <form>
          <h5>Code</h5>
          <input
            value={codeInput}
            type="text"
            onChange={(e) => setCodeInput(e.target.value)}
          />
          <h5>Name</h5>
          <input
            value={nameInput}
            type="text"
            onChange={(e) => setNameInput(e.target.value)}
          />
          <h5>Telephone</h5>
          <input
            value={telephoneInput}
            type="text"
            onChange={(e) => setTelephoneInput(e.target.value)}
          />
          <button
            onClick={addSupplier}
            type="submit"
            className="supplierInput__btn"
          >
            Add Supplier
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupplierInput;
