import { create } from "zustand";
import invoicesData from "../data/data.json";

export type Invoice = (typeof invoicesData)[number];

type InvoiceStore = {
  invoices: Invoice[];
  deleteInvoice: (id: string) => void;
};

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: invoicesData,

  deleteInvoice: (id: string) =>
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
    })),
}));
