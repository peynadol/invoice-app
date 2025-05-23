import React from 'react';
import InvoiceFilter from './invoiceFilter';
import AddNewInvoice from './addNewInvoiceButton';
import EmptyInvoices from './emptyInvoices';

const InvoiceToolbar = ({ count, selected, toggleStatus }) => {
  return (
    <div className='flex justify-between'>
      <div>
        <h1>Invoices</h1>
        <p>{count}invoices</p>
      </div>
      <div className='flex'>
        <InvoiceFilter selected={selected} toggleStatus={toggleStatus} />
        <AddNewInvoice />
      </div>
    </div>
  );
};

export default InvoiceToolbar;
