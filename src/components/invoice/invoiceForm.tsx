"use client";
// TODO: resolve error when submitting. think i need to 're-nest' the form structure

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/lib/schemas/invoiceSchema";
import { z } from "zod";
import InvoiceFormItemList from "./invoiceFormItemList";
import { useInvoiceStore } from "@/store/invoiceStore";
import { toast } from "sonner";

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

type Props = {
  initialData?: InvoiceFormValues;
  invoiceId?: string;
};

const InvoiceForm = ({ initialData, invoiceId }: Props) => {
  const updateInvoice = useInvoiceStore((state) => state.updateInvoice);

  const methods = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: initialData || {
      billerStreetAddress: "",
      billerCity: "",
      billerPostcode: "",
      billerCountry: "",
      clientName: "",
      clientEmail: "",
      clientStreetAddress: "",
      clientCity: "",
      clientPostcode: "",
      clientCountry: "",
      invoiceDate: new Date(),
      paymentTerms: 30,
      projectDescription: "",
      items: [{ name: "", quantity: 1, price: 0 }],
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: InvoiceFormValues) => {
    if (initialData && invoiceId) {
      updateInvoice(invoiceId, data);
      toast.success("Invoice updated successfully!", { duration: 2000 });
    } else {
      console.log("New Invoice Data:", data);
    }

    const updatedInvoices = useInvoiceStore.getState().invoices;
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow space-y-10"
      >
        <h1 className="text-2xl font-bold text-[#0C0E16]">
          {initialData ? `Edit #${invoiceId}` : "New Invoice"}
        </h1>

        {/* --- BILL FROM --- */}
        <div className="space-y-6">
          <h2 className="text-[#7C5DFA] text-sm font-bold tracking-wide uppercase">
            Bill From
          </h2>

          <input
            {...register("billerStreetAddress")}
            placeholder="Street Address"
            className="w-full border rounded-md px-4 py-2"
          />
          {errors.billerStreetAddress && (
            <p className="text-red-500 text-sm">
              {errors.billerStreetAddress.message}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("billerCity")}
              placeholder="City"
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              {...register("billerPostcode")}
              placeholder="Post Code"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <input
            {...register("billerCountry")}
            placeholder="Country"
            className="w-full border rounded-md px-4 py-2"
          />
        </div>

        {/* --- BILL TO --- */}
        <div className="space-y-6">
          <h2 className="text-[#7C5DFA] text-sm font-bold tracking-wide uppercase">
            Bill To
          </h2>

          <input
            {...register("clientName")}
            placeholder="Client's Name"
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            {...register("clientEmail")}
            placeholder="Client's Email"
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            {...register("clientStreetAddress")}
            placeholder="Street Address"
            className="w-full border rounded-md px-4 py-2"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("clientCity")}
              placeholder="City"
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              {...register("clientPostcode")}
              placeholder="Post Code"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <input
            {...register("clientCountry")}
            placeholder="Country"
            className="w-full border rounded-md px-4 py-2"
          />
        </div>

        {/* --- INVOICE DETAILS --- */}
        <div className="space-y-6">
          <input
            type="date"
            {...register("invoiceDate")}
            className="w-full border rounded-md px-4 py-2"
          />

          <select
            {...register("paymentTerms", { valueAsNumber: true })}
            className="w-full border rounded-md px-4 py-2"
          >
            <option value="">Select Terms</option>
            <option value={1}>Net 1 Day</option>
            <option value={7}>Net 7 Days</option>
            <option value={14}>Net 14 Days</option>
            <option value={30}>Net 30 Days</option>
          </select>

          <input
            {...register("projectDescription")}
            placeholder="Project Description"
            className="w-full border rounded-md px-4 py-2"
          />
        </div>

        {/* --- ITEM LIST --- */}
        <InvoiceFormItemList />

        {/* --- FOOTER --- */}
        <div className="flex justify-end gap-4 pt-8">
          <button
            type="button"
            onClick={() => {
              if (initialData) {
                window.history.back();
              } else {
                reset();
              }
            }}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-[#7C5DFA] text-white rounded-md hover:bg-[#9277FF] text-sm font-semibold"
          >
            {initialData ? "Save Changes" : "Create Invoice"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
