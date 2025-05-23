import React from "react";
import InvoiceFilter from "./invoiceFilter";
import AddNewInvoice from "./addNewInvoice";
import EmptyInvoices from "./emptyInvoices";

const InvoiceToolbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1>Invoices</h1>
          <p>7 invoices</p>
        </div>
        <div className="flex">
          <InvoiceFilter />
          <AddNewInvoice />
        </div>
      </div>
      <EmptyInvoices />
    </div>
  );
};

export default InvoiceToolbar;
