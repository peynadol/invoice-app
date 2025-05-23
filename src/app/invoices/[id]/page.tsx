// app/invoices/[id]/page.tsx
import invoices from "../../../data/data.json";
import ViewInvoice from "@/components/invoice/ViewInvoice";
import ViewInvoiceFooter from "@/components/invoice/ViewInvoiceFooter";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default function InvoiceDetailPage({ params }: Params) {
  const invoice = invoices.find((inv) => inv.id === params.id);

  if (!invoice) return notFound();

  return (
    <div className="space-y-6">
      <ViewInvoice invoice={invoice} />
      <ViewInvoiceFooter />
    </div>
  );
}
