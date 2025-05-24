import React from "react";
import StatusPill from "./statusPill";
import formatDate from "@/utils/formaDate";

const InvoiceCard = ({ invoice, onClick }) => {
  const formattedDueDate = formatDate(invoice.paymentDue);
  return (
    <div
      className="flex justify-between items-center p-4 cursor-pointer bg-white rounded-lg shadow-sm mx-4"
      onClick={onClick}
    >
      {/* Left side */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">
          <span className="text-[#7E88C3]">#</span>
          {invoice.id}
        </p>
        <p className="text-[#7E88C3] font-semibold text-sm">
          Due {formattedDueDate}
        </p>
        <p className="font-bold">
          £
          {invoice.total.toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-end gap-2 text-right">
        <p className="text-sm text-[#7E88C3] font-semibold">
          {invoice.clientName}
        </p>
        {/* Status pill*/}
        <StatusPill status={invoice.status} />
      </div>
    </div>
  );
};

export default InvoiceCard;
