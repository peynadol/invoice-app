"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/lib/schemas/invoiceSchema";
import { z } from "zod";
import InvoiceFormItemList from "./invoiceFormItemList";

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

const InvoiceForm = () => {
  const methods = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      invoiceDate: new Date(),
      items: [{ name: "", quantity: 1, price: 0 }],
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: InvoiceFormValues) => {
    console.log("Invoice submitted:", data);
    console.log(errors);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="space-y-6"
      >
        <h1 className="text-2xl font-bold">New Invoice</h1>

        <h2 className="text-lg font-semibold text-purple-600">Bill From</h2>

        <div>
          <label>Street Address</label>
          <input {...register("billerStreetAddress")} />
          {errors.billerStreetAddress && (
            <p>{errors.billerStreetAddress.message}</p>
          )}
        </div>

        <div>
          <label>City</label>
          <input {...register("billerCity")} />
          {errors.billerCity && <p>{errors.billerCity.message}</p>}
        </div>

        <div>
          <label>Post Code</label>
          <input {...register("billerPostcode")} />
          {errors.billerPostcode && <p>{errors.billerPostcode.message}</p>}
        </div>

        <div>
          <label>Country</label>
          <input {...register("billerCountry")} />
          {errors.billerCountry && <p>{errors.billerCountry.message}</p>}
        </div>

        <h2 className="text-lg font-semibold text-purple-600">Bill To</h2>

        <div>
          <label>Client's Name</label>
          <input {...register("clientName")} />
          {errors.clientName && <p>{errors.clientName.message}</p>}
        </div>

        <div>
          <label>Client's Email</label>
          <input {...register("clientEmail")} />
          {errors.clientEmail && <p>{errors.clientEmail.message}</p>}
        </div>

        <div>
          <label>Street Address</label>
          <input {...register("clientStreetAddress")} />
          {errors.clientStreetAddress && (
            <p>{errors.clientStreetAddress.message}</p>
          )}
        </div>

        <div>
          <label>City</label>
          <input {...register("clientCity")} />
          {errors.clientCity && <p>{errors.clientCity.message}</p>}
        </div>

        <div>
          <label>Post Code</label>
          <input {...register("clientPostcode")} />
          {errors.clientPostcode && <p>{errors.clientPostcode.message}</p>}
        </div>

        <div>
          <label>Country</label>
          <input {...register("clientCountry")} />
          {errors.clientCountry && <p>{errors.clientCountry.message}</p>}
        </div>

        <div>
          <label>Invoice Date</label>
          <input type="date" {...register("invoiceDate")} />
          {errors.invoiceDate && <p>{errors.invoiceDate.message}</p>}
        </div>

        <div>
          <label>Payment Terms</label>
          <select {...register("paymentTerms", { valueAsNumber: true })}>
            <option value="">Select</option>
            <option value={1}>Net 1 Day</option>
            <option value={7}>Net 7 Days</option>
            <option value={14}>Net 14 Days</option>
            <option value={30}>Net 30 Days</option>
          </select>
          {errors.paymentTerms && <p>{errors.paymentTerms.message}</p>}
        </div>

        <div>
          <label>Project Description</label>
          <input {...register("projectDescription")} />
          {errors.projectDescription && (
            <p>{errors.projectDescription.message}</p>
          )}
        </div>

        <InvoiceFormItemList />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Invoice
        </button>
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
