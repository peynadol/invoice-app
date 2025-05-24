const mockInvoice = {
  id: "XM9141",
  createdAt: "2021-08-21",
  paymentDue: "2021-09-20",
  description: "Graphic Design",
  paymentTerms: 30,
  clientName: "Alex Grim",
  clientEmail: "alexgrim@mail.com",
  status: "pending",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "84 Church Way",
    city: "Bradford",
    postCode: "BD1 9PB",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Banner Design",
      quantity: 1,
      price: 156.0,
      total: 156.0,
    },
    {
      name: "Email Design",
      quantity: 2,
      price: 200.0,
      total: 400.0,
    },
  ],
  total: 556.0,
};

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import InvoiceStatusCard from "./invoiceStatusCard";
import OrderCard from "./orderCard";

const ViewInvoice = () => {
  return (
    <div>
      <Link href="/invoices" className="flex">
        <ChevronLeft />
        Go back
      </Link>
      <div>
        <InvoiceStatusCard status={mockInvoice.status} />
      </div>
      <div className="p-6 rounded-md bg-background shadow-md">
        {/* ID + Description */}
        <div className="mb-6">
          <h1 className="text-lg font-bold">#{mockInvoice.id}</h1>
          <p className="text-muted-foreground">{mockInvoice.description}</p>
        </div>

        {/* Sender Address */}
        <div className="mb-6">
          <p>{mockInvoice.senderAddress.street}</p>
          <p>{mockInvoice.senderAddress.city}</p>
          <p>{mockInvoice.senderAddress.postCode}</p>
          <p>{mockInvoice.senderAddress.country}</p>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column: Invoice + Payment Due */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Invoice Date</p>
              <p className="font-semibold">{mockInvoice.createdAt}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Payment Due</p>
              <p className="font-semibold">{mockInvoice.paymentDue}</p>
            </div>
          </div>

          {/* Right Column: Bill To */}
          <div>
            <p className="text-sm text-muted-foreground">Bill To</p>
            <p className="font-semibold">{mockInvoice.clientName}</p>
            <p>{mockInvoice.clientAddress.street}</p>
            <p>{mockInvoice.clientAddress.city}</p>
            <p>{mockInvoice.clientAddress.postCode}</p>
            <p>{mockInvoice.clientAddress.country}</p>
          </div>
        </div>

        {/* Sent To Email */}
        <p>Sent to</p>
        <p>{mockInvoice.clientEmail}</p>

        {/* Items Section */}
        <OrderCard items={mockInvoice.items} total={mockInvoice.total} />
      </div>
    </div>
  );
};

export default ViewInvoice;
