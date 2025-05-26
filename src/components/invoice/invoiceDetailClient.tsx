"use client";

import { useInvoiceStore } from "@/store/invoiceStore";
import { notFound, useRouter } from "next/navigation";
import ViewInvoice from "@/components/invoice/viewInvoice";
import ViewInvoiceFooter from "@/components/invoice/viewInvoiceFooter";
import { use, useEffect } from "react";

type Props = {
  id: string;
};

const InvoiceDetailClient = ({ id }: Props) => {
  const router = useRouter();
  const invoice = useInvoiceStore((state) =>
    state.invoices.find((inv) => inv.id === id)
  );

  useEffect(() => {
    if (!invoice) {
      router.push("/invoices");
    }
  }, [invoice, router]);

  if (!invoice) return null;

  return (
    <div className="space-y-6">
      <ViewInvoice invoice={invoice} />
      <ViewInvoiceFooter invoiceId={invoice.id} status={invoice.status} />
    </div>
  );
};

export default InvoiceDetailClient;
