import React, { useEffect, useState } from "react";
import SupplierItem from "./productItem/SupplierItem";
import "./SupplierList.css";
import axios from "../axios/axios";

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/api/suppliers");

      setSuppliers(req.data);
    }

    fetchData();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    async function fetchData() {
      const req = await axios.get(`/api/suppliers/search?name=${searchInput}`);

      setSuppliers(req.data);
    }

    fetchData();
  };

  return (
    <div className="supplierList">
      <div className="supplierList__suppliers">
        {suppliers.map((supplier) => (
          <SupplierItem
            key={supplier.id}
            code={supplier.code}
            name={supplier.name}
            telephone={supplier.telephone}
          />
        ))}
      </div>

      <div className="supplierList__search">
        <form className="supplierList__input">
          <input
            className="supplierList__inputField"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search key phrase"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="supplierList__inputButton"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupplierList;
