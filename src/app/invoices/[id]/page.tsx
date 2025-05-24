import InvoiceDetailClient from "@/components/invoice/invoiceDetailClient";

type Params = {
  params: {
    id: string;
  };
};

export default async function InvoiceDetailPage({ params }: Params) {
  const awaitedParams = await params;
  return <InvoiceDetailClient id={awaitedParams.id} />;
}
