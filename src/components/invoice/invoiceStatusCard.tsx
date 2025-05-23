import React from "react";

const InvoiceStatusCard = ({ status }) => {
  return (
    <div className="flex justify-between">
      <p>Status</p>
      <p className="capitalize">{status}</p>
    </div>
  );
};

export default InvoiceStatusCard;
