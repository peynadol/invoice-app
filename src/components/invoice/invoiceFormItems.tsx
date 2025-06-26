"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";

export default function InvoiceItems() {
  const { control, watch, setValue } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchItems = watch("items");

  useEffect(() => {
    watchItems?.forEach((item: any, index: number) => {
      const quantity = Number(item.quantity) || 0;
      const price = Number(item.price) || 0;
      const total = +(quantity * price).toFixed(2);
      setValue(`items.${index}.total`, total);
    });
  }, [watchItems, setValue]);

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold">Item List</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 border-b pb-6">
          <div>
            <label className="block text-sm font-medium">Item Name</label>
            <Input
              {...field}
              {...control.register(`items.${index}.name`)}
              placeholder="e.g. Banner Design"
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium">Qty.</label>
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                {...control.register(`items.${index}.quantity`)}
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <Input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*[.,]?[0-9]*"
                {...control.register(`items.${index}.price`)}
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Total</label>
              <div className="h-10 flex items-center px-2 bg-gray-100 rounded">
                £{(Number(watchItems?.[index]?.total) || 0).toFixed(2)}
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => append({ name: "", quantity: 1, price: 0, total: 0 })}
        className="w-full"
        variant="ghost"
      >
        + Add New Item
      </Button>
    </div>
  );
}
