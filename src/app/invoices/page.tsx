"use client";
import invoices from "../../data/data.json";
import InvoiceCard from "@/components/invoice/invoiceCard";
import InvoiceToolbar from "@/components/invoice/invoiceToolbar";
import EmptyInvoices from "@/components/invoice/emptyInvoices";
import { useRouter } from "next/navigation";

const InvoiceListPage = () => {
  const router = useRouter();

  if (!invoices.length) return <EmptyInvoices />;

  const viewInvoiceClickHandler = (id: string) => {
    router.push(`/invoices/${id}`);
  };

  return (
    <div className="space-y-4">
      <InvoiceToolbar count={invoices.length} />
      {invoices.map((invoice) => (
        <InvoiceCard
          key={invoice.id}
          invoice={invoice}
          onClick={() => viewInvoiceClickHandler(invoice.id)}
        />
      ))}
    </div>
  );
};

export default InvoiceListPage;
