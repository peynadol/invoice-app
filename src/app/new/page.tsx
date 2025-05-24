import InvoiceForm from "@/components/invoice/invoiceForm";

export default function NewInvoicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">New Invoice</h1>
      <InvoiceForm />
    </div>
  );
}
