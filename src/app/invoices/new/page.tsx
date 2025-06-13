import { GoBackBar } from "@/components/invoice/goBackBar";
import InvoiceForm from "@/components/invoice/invoiceForm";
import NewInvoiceFooter from "@/components/invoice/newInvoiceFooter";

export default function NewInvoicePage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <GoBackBar />
        <InvoiceForm />
      </div>
    </>
  );
}
