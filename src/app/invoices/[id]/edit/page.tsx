"use client";

import { useInvoiceStore } from "@/store/invoiceStore";
import InvoiceForm from "@/components/invoice/invoiceForm";
import { useParams, useRouter } from "next/navigation";

const EditInvoicePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const invoice = useInvoiceStore((state) =>
    state.invoices.find((inv) => inv.id === id)
  );

  if (!invoice) {
    return <p>Invoice not found</p>;
  }

  // flatten the invoice data to match the form structure
  const initialData = {
    billerStreetAddress: invoice.senderAddress.street,
    billerCity: invoice.senderAddress.city,
    billerPostcode: invoice.senderAddress.postCode,
    billerCountry: invoice.senderAddress.country,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientStreetAddress: invoice.clientAddress.street,
    clientCity: invoice.clientAddress.city,
    clientPostcode: invoice.clientAddress.postCode,
    clientCountry: invoice.clientAddress.country,
    invoiceDate: new Date(invoice.createdAt),
    paymentTerms: invoice.paymentTerms,
    projectDescription: invoice.description,
    items: invoice.items,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <InvoiceForm initialData={initialData} invoiceId={id} />
    </div>
  );
};

export default EditInvoicePage;
