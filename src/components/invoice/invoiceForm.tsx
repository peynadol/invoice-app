//TODO: change quantity and price to number inputs
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useInvoiceStore } from "@/store/invoiceStore";

const formSchema = z.object({
  fromStreetAddress: z.string().min(1),
  fromCity: z.string().min(1),
  fromPostcode: z.string().min(1),
  fromCountry: z.string().min(1),
  clientName: z.string().min(1),
  clientEmail: z.string().min(1),
  clientStreetAddress: z.string().min(1),
  clientCity: z.string().min(1),
  clientPostcode: z.string().min(1),
  clientCountry: z.string().min(1),
  invoiceDate: z.coerce.date(),
  paymentTerms: z.enum(["7", "14", "30"]),
  projectDescription: z.string().min(1),
  itemName: z.string().min(1),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  itemPrice: z.number().min(0.01, "Price must be at least 0.01"),
});

export default function InvoiceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceDate: new Date(),
    },
  });

  const addInvoice = useInvoiceStore((state) => state.addInvoice);
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const createdAt = new Date();
    const paymentTermsDays = parseInt(values.paymentTerms, 10);
    const paymentDue = new Date(createdAt);
    paymentDue.setDate(createdAt.getDate() + paymentTermsDays);

    const newInvoice = {
      createdAt: createdAt.toISOString(),
      paymentDue: paymentDue.toISOString(),
      description: values.projectDescription,
      paymentTerms: paymentTermsDays,
      clientName: values.clientName,
      clientEmail: values.clientEmail,
      status: "pending", // you can change this later with a separate button
      senderAddress: {
        street: values.fromStreetAddress,
        city: values.fromCity,
        postCode: values.fromPostcode,
        country: values.fromCountry,
      },
      clientAddress: {
        street: values.clientStreetAddress,
        city: values.clientCity,
        postCode: values.clientPostcode,
        country: values.clientCountry,
      },
      items: [
        {
          name: values.itemName,
          quantity: parseInt(values.quantity),
          price: parseFloat(values.itemPrice),
          total: parseInt(values.quantity) * parseFloat(values.itemPrice),
        },
      ],
      total: parseInt(values.quantity) * parseFloat(values.itemPrice),
    };

    addInvoice(newInvoice);
    router.push("/invoices");
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          {/* Sender Address */}
          <h2 className="text-lg font-semibold">Bill From</h2>
          <FormField
            name="fromStreetAddress"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="fromCity"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="fromPostcode"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="fromCountry"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Client Info */}
          <h2 className="text-lg font-semibold">Bill To</h2>
          <FormField
            name="clientName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client's Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="clientEmail"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client's Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="clientStreetAddress"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="clientCity"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="clientPostcode"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="clientCountry"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Invoice Metadata */}
          <h2 className="text-lg font-semibold">Invoice Details</h2>
          <FormField
            name="invoiceDate"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Invoice Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {" "}
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="paymentTerms"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Terms</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="7">Net 7 Days</SelectItem>
                    <SelectItem value="14">Net 14 Days</SelectItem>
                    <SelectItem value="30">Net 30 Days</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="projectDescription"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Item Info */}
          <h2 className="text-lg font-semibold">Item List</h2>
          <FormField
            name="itemName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="quantity"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="itemPrice"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
