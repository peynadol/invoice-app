import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import InvoiceStatusCard from "./invoiceStatusCard";
import OrderCard from "./orderCard";
import PageContainer from "@/components/layout/PageContainer";
import formatDate from "../../utils/formaDate";
const ViewInvoice = ({ invoice }) => {
  const createdAt = formatDate(invoice.createdAt);
  const paymentDue = formatDate(invoice.paymentDue);

  return (
    <PageContainer>
      {/* Go back link */}
      <Link
        href="/invoices"
        className="flex items-center gap-2 text-sm font-bold text-primary mb-6 mt-4 hover:underline"
      >
        <ChevronLeft size={18} color="#7D5DFA" />
        Go back
      </Link>

      {/* Status card section */}
      <div>
        <InvoiceStatusCard status={invoice.status} />
      </div>

      {/* Main invoice details */}
      <div className="bg-white p-6 rounded-md shadow-md space-y-6">
        {/* Top section: ID, desc, sender */}
        <div>
          <h1 className="text-lg font-bold text-primary mb-1">
            <span className="text-muted-foreground">#</span>
            {invoice.id}
          </h1>
          <p className="text-muted-foreground mb-4">{invoice.description}</p>
          <div className="text-sm text-muted-foreground leading-6">
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </div>
        </div>

        {/* Two-column section with flex layout */}
        <div className="flex justify-between gap-4 w-full">
          {/* Left: Invoice Date + Payment Due */}
          <div className="flex flex-col gap-6 w-1/2">
            <div>
              <p className="text-[12px] text-muted-foreground">Invoice Date</p>
              <p className="font-bold text-[14px]">{createdAt}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground">Payment Due</p>
              <p className="font-bold text-[14px]">{paymentDue}</p>
            </div>
          </div>

          {/* Right: Bill To */}
          <div className="flex flex-col gap-1 w-1/2 text-right">
            <p className="text-[12px] text-muted-foreground">Bill To</p>
            <p className="font-bold text-[14px]">{invoice.clientName}</p>
            <p className="text-[12px] text-muted-foreground leading-5">
              {invoice.clientAddress.street}
              <br />
              {invoice.clientAddress.city}
              <br />
              {invoice.clientAddress.postCode}
              <br />
              {invoice.clientAddress.country}
            </p>
          </div>
        </div>

        {/* Email address */}
        <div>
          <p className="text-[12px] text-muted-foreground mb-1">Sent to</p>
          <p className="font-bold text-[14px]">{invoice.clientEmail}</p>
        </div>

        {/* Items list */}
        <OrderCard items={invoice.items} total={invoice.total} />
      </div>
    </PageContainer>
  );
};

export default ViewInvoice;
