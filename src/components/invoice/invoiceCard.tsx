import React from "react";

const InvoiceCard = ({ invoice, onClick }) => {
  return (
    <div className="flex justify-between cursor-pointer" onClick={onClick}>
      <div className="flex-col">
        <p>{invoice.id}</p>
        <p>Due {invoice.paymentDue}</p>
        <p>£ {invoice.total.toFixed(2)}</p>
      </div>
      <div className="flex-col">
        <p>{invoice.clientName}</p>
        <p className="capitalize">{invoice.status}</p>
      </div>
    </div>
  );
};

export default InvoiceCard;
