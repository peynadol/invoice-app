"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/lib/schemas/invoiceSchema";
import { z } from "zod";
import InvoiceFormItemList from "./invoiceFormItemList";
import { useInvoiceStore } from "@/store/invoiceStore";
import { toast } from "sonner";
import { useState } from "react";
import NewInvoiceFooter from "./newInvoiceFooter";

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

type Props = {
  initialData?: InvoiceFormValues;
  invoiceId?: string;
};

const InvoiceForm = ({ initialData, invoiceId }: Props) => {
  const updateInvoice = useInvoiceStore((state) => state.updateInvoice);
  const addInvoice = useInvoiceStore((state) => state.addInvoice);
  const [formAction, setFormAction] = useState<"draft" | "pending">("pending");

  const methods = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: initialData || {
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      client: {
        name: "",
        email: "",
      },
      description: "",
      invoiceDate: new Date(),
      paymentTerms: 30,
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
    const itemsWithTotal = data.items.map((item) => ({
      ...item,
      total: item.quantity * item.price,
    }));

    const total = itemsWithTotal.reduce((acc, item) => acc + item.total, 0);

    const paymentDue = new Date(data.invoiceDate);
    paymentDue.setDate(paymentDue.getDate() + data.paymentTerms);

    const finalData = {
      ...data,
      items: itemsWithTotal,
      total,
      status: formAction,
      paymentDue,
    };

    if (initialData && invoiceId) {
      updateInvoice(invoiceId, finalData);
      toast.success("Invoice updated successfully!");
    } else {
      addInvoice(finalData);
      toast.success("Invoice created successfully!");
    }

    const updatedInvoices = useInvoiceStore.getState().invoices;
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    window.history.back();
    console.log(finalData);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          setFormAction("pending");
          handleSubmit(onSubmit)(e);
        }}
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
            {...register("senderAddress.street")}
            placeholder="Street Address"
            className="w-full border rounded-md px-4 py-2"
          />
          {errors.senderAddress?.street && (
            <p className="text-red-500 text-sm">
              {errors.senderAddress.street.message}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("senderAddress.city")}
              placeholder="City"
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              {...register("senderAddress.postCode")}
              placeholder="Post Code"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <input
            {...register("senderAddress.country")}
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
            {...register("client.name")}
            placeholder="Client's Name"
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            {...register("client.email")}
            placeholder="Client's Email"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            {...register("clientAddress.street")}
            placeholder="Street Address"
            className="w-full border rounded-md px-4 py-2"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("clientAddress.city")}
              placeholder="City"
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              {...register("clientAddress.postCode")}
              placeholder="Post Code"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <input
            {...register("clientAddress.country")}
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
            {...register("description")}
            placeholder="Project Description"
            className="w-full border rounded-md px-4 py-2"
          />
        </div>

        {/* --- ITEM LIST --- */}
        <InvoiceFormItemList />

        {/* --- FOOTER --- */}
        <NewInvoiceFooter
          onDiscard={() => {
            if (initialData) {
              window.history.back();
            } else {
              reset();
            }
          }}
          onSaveDraft={() => {
            setFormAction("draft");
            document.querySelector("form")?.requestSubmit();
          }}
          isSubmitting={methods.formState.isSubmitting}
        />
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
