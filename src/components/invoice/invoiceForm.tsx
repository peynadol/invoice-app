"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/lib/schemas/invoiceSchema";
import { z } from "zod";
import InvoiceFormItemList from "./invoiceFormItemList";

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

type Props = {
  initialData?: InvoiceFormValues;
  invoiceId?: string;
};

const InvoiceForm = ({ initialData, invoiceId }: Props) => {
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
    formState: { errors },
  } = methods;

  const onSubmit = (data: InvoiceFormValues) => {
    console.log("Invoice submitted:", data);
  };
  console.log(initialData);

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

        {/* BILL FROM */}
        <div className="space-y-6">
          <h2 className="text-[#7C5DFA] text-sm font-bold tracking-wide uppercase">
            Bill From
          </h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              {...register("billerStreetAddress")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.billerStreetAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.billerStreetAddress.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                City
              </label>
              <input
                {...register("billerCity")}
                className="w-full border rounded-md px-4 py-2"
              />
              {errors.billerCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.billerCity.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Post Code
              </label>
              <input
                {...register("billerPostcode")}
                className="w-full border rounded-md px-4 py-2"
              />
              {errors.billerPostcode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.billerPostcode.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              {...register("billerCountry")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.billerCountry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.billerCountry.message}
              </p>
            )}
          </div>
        </div>

        {/* BILL TO */}
        <div className="space-y-6">
          <h2 className="text-[#7C5DFA] text-sm font-bold tracking-wide uppercase">
            Bill To
          </h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Client's Name
            </label>
            <input
              {...register("clientName")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.clientName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.clientName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Client's Email
            </label>
            <input
              {...register("clientEmail")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.clientEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.clientEmail.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              {...register("clientStreetAddress")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.clientStreetAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.clientStreetAddress.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                City
              </label>
              <input
                {...register("clientCity")}
                className="w-full border rounded-md px-4 py-2"
              />
              {errors.clientCity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.clientCity.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Post Code
              </label>
              <input
                {...register("clientPostcode")}
                className="w-full border rounded-md px-4 py-2"
              />
              {errors.clientPostcode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.clientPostcode.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              {...register("clientCountry")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.clientCountry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.clientCountry.message}
              </p>
            )}
          </div>
        </div>

        {/* INVOICE MAIN */}
        <div className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Invoice Date
            </label>
            <input
              type="date"
              {...register("invoiceDate")}
              className="w-full border rounded-md px-4 py-2 appearance-none"
            />
            {errors.invoiceDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.invoiceDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Payment Terms
            </label>
            <select
              {...register("paymentTerms", { valueAsNumber: true })}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="">Select</option>
              <option value={1}>Net 1 Day</option>
              <option value={7}>Net 7 Days</option>
              <option value={14}>Net 14 Days</option>
              <option value={30}>Net 30 Days</option>
            </select>
            {errors.paymentTerms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.paymentTerms.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Project Description
            </label>
            <input
              {...register("projectDescription")}
              className="w-full border rounded-md px-4 py-2"
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.projectDescription.message}
              </p>
            )}
          </div>
        </div>

        {/* DYNAMIC ITEM LIST */}
        <InvoiceFormItemList />

        {/* FOOTER ACTIONS */}
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
