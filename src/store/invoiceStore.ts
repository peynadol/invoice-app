import { create } from "zustand";
import invoicesData from "../data/data.json";

function generateInvoiceId(): string {
  const letters = Array.from({ length: 2 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join("");

  const numbers = Math.floor(1000 + Math.random() * 9000);

  return `${letters}${numbers}`;
}

export type Invoice = (typeof invoicesData)[number];

type InvoiceStore = {
  invoices: Invoice[];
  deleteInvoice: (id: string) => void;
  addInvoice: (invoice: Omit<Invoice, "id">) => void;
};

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: invoicesData,

  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
    })),

  addInvoice: (invoice) =>
    set((state) => ({
      invoices: [
        ...state.invoices,
        {
          ...invoice,
          id: generateInvoiceId(),
        },
      ],
    })),
}));
