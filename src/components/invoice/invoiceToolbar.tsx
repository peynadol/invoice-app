import React from "react";
import InvoiceFilter from "./invoiceFilter";
import AddNewInvoice from "./addNewInvoiceButton";
import EmptyInvoices from "./emptyInvoices";

const InvoiceToolbar = ({ count, selected, toggleStatus }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-2xl font-bold">Invoices</h1>
        <p className="text-sm font-semibold text-[#888DB0]">{count} invoices</p>
      </div>
      <div className="flex">
        <InvoiceFilter selected={selected} toggleStatus={toggleStatus} />
        <AddNewInvoice />
      </div>
    </div>
  );
};

export default InvoiceToolbar;
