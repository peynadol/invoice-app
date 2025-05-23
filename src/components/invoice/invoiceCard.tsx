import React from "react";

const InvoiceCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-col">
        <p>#RT3080</p>
        <p>Due 19 Aug 2021</p>
        <p>£560.00</p>
      </div>
      <div className="flex-col">
        <p>Jensen Huang</p>
        <p>Paid</p>
      </div>
    </div>
  );
};

export default InvoiceCard;
