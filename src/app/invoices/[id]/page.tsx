import invoices from "../../../data/data.json";
import ViewInvoice from "@/components/invoice/ViewInvoice";
import ViewInvoiceFooter from "@/components/invoice/ViewInvoiceFooter";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default async function InvoiceDetailPage({ params }: Params) {
  const awaitedParams = await params;
  const invoice = invoices.find((inv) => inv.id === awaitedParams.id);

  if (!invoice) return notFound();

  return (
    <div className="space-y-6">
      <ViewInvoice invoice={invoice} />
      <ViewInvoiceFooter />
    </div>
  );
}
