import React from "react";
import Image from "next/image";
import emptyLogo from "../../../public/illustration-empty.svg";
const EmptyInvoices = () => {
  return (
    <section className="wrapper text-center">
      <Image
        src={emptyLogo}
        alt="Empty Invoices"
        width={300}
        height={300}
        className="mx-auto mt-10 pb-4"
      />
      <h2 className="text-[24px] font-bold pb-2">There is nothing here</h2>
      <p className="text-[#888DB0] max-w-[250px] mx-auto">
        Create an invoice by clicking the <span className="font-bold">New</span>{" "}
        button and get started
      </p>
    </section>
  );
};

export default EmptyInvoices;
