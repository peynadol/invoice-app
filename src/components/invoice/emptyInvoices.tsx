import React from "react";
import Image from "next/image";
import emptyLogo from "../../../public/illustration-empty.svg";
const EmptyInvoices = () => {
  return (
    <div>
      <Image
        src={emptyLogo}
        alt="Empty Invoices"
        width={300}
        height={300}
        className="mx-auto mt-10"
      />
      <h2>There is nothing here</h2>
      <p>Create an invoice by clicking the New button and get started</p>
    </div>
  );
};

export default EmptyInvoices;
