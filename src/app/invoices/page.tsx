'use client';
import invoices from '../../data/data.json';
import InvoiceCard from '@/components/invoice/invoiceCard';
import InvoiceToolbar from '@/components/invoice/invoiceToolbar';
import EmptyInvoices from '@/components/invoice/emptyInvoices';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const InvoiceListPage = () => {
  const router = useRouter();
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(invoice.status)
  );

  if (!invoices.length) return <EmptyInvoices />;

  const viewInvoiceClickHandler = (id: string) => {
    router.push(`/invoices/${id}`);
  };

  return (
    <div className='space-y-4'>
      <InvoiceToolbar
        count={invoices.length}
        selected={selectedStatuses}
        toggleStatus={toggleStatus}
      />
      {filteredInvoices.map((invoice) => (
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
