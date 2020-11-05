import React from "react";
import "./SupplierItem.css";

const SupplierItem = ({ code, name, telephone }) => {
  return (
    <div className="supplierItem">
      <h4>{code}</h4>
      <h4>{name}</h4>
      <h4>{telephone}</h4>
    </div>
  );
};

export default SupplierItem;
