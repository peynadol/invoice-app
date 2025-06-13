import { z } from "zod";

export const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  postCode: z.string().min(1, "Postcode is required"),
  country: z.string().min(1, "Country is required"),
});

export const itemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  quantity: z.number().min(1, "Must be at least 1"),
  price: z.number().min(0.01, "Price must be at least £0.01"),
  total: z.number().optional(), // computed
});

export const invoiceSchema = z.object({
  senderAddress: addressSchema,
  clientAddress: addressSchema,

  client: z.object({
    name: z.string().min(1, "Client name is required"),
    email: z.string().email("Invalid email address"),
  }),

  description: z.string().min(1, "Project description is required"),
  invoiceDate: z.coerce.date(),
  paymentTerms: z.union([
    z.literal(1),
    z.literal(7),
    z.literal(14),
    z.literal(30),
  ]),

  items: z.array(itemSchema).min(1, "At least one item is required"),
  status: z.enum(["draft", "pending", "paid"]).optional(),
  total: z.number().optional(),
  createdAt: z.string().optional(),
  paymentDue: z.string().optional(),
});
