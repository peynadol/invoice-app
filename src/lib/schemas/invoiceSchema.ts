import { z } from "zod";

enum paymentTerms {
  "Net 1 Day" = 1,
  "Net 7 Days" = 7,
  "Net 14 Days" = 14,
  "Net 30 Days" = 30,
}

export const invoiceSchema = z.object({
  billerStreetAddress: z.string().min(1, "Biller street address is required"),
  billerCity: z.string().min(1, "Biller city is required"),
  billerPostcode: z.string().min(1, "Biller postcode is required"),
  billerCountry: z.string().min(1, "Biller country is required"),
  clientName: z.string().min(1, "Client name is required"),
  clientEmail: z.string().email("Invalid email address"),
  clientStreetAddress: z.string().min(1, "Client street address is required"),
  clientCity: z.string().min(1, "Client city is required"),
  clientPostcode: z.string().min(1, "Client postcode is required"),
  clientCountry: z.string().min(1, "Client country is required"),
  invoiceDate: z.coerce.date({
    errorMap: () => ({ message: "Invoice date is required" }),
  }),
  paymentTerms: z.nativeEnum(paymentTerms, {
    errorMap: () => ({ message: "Payment terms is required" }),
  }),
  projectDescription: z.string().min(1, "Description is required"),
  items: z
    .array(
      z.object({
        name: z.string().min(1),
        quantity: z.number().min(1),
        price: z.number().min(0.01),
      })
    )
    .min(1, "At least one item is required"),
});
