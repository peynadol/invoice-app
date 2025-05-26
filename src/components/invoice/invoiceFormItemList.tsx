"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Trash2 } from "lucide-react";

const InvoiceFormItemList = () => {
  const { control, register, watch, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = watch("items");

  return (
    <section className="space-y-6">
      <h2 className="text-[#7C5DFA] text-sm font-bold tracking-wide uppercase">
        Item List
      </h2>

      {fields.map((field, index) => {
        const quantity = Number(items?.[index]?.quantity || 0);
        const price = Number(items?.[index]?.price || 0);
        const total = quantity * price;

        return (
          <div key={field.id} className="space-y-4">
            {/* Item Name */}
            <div>
              <label className="block text-sm text-[#7E88C3] mb-1">
                Item Name
              </label>
              <input
                {...register(`items.${index}.name`)}
                className="w-full border border-[#DFE3FA] rounded-md px-4 py-2 font-bold"
              />
            </div>

            {/* Qty, Price, Total, Remove */}
            <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-end gap-4">
              {/* Quantity */}
              <div>
                <label className="block text-sm text-[#7E88C3] mb-1">
                  Qty.
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  {...register(`items.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "");
                    setValue(`items.${index}.quantity`, raw ? Number(raw) : 0);
                  }}
                  className="w-full border border-[#DFE3FA] rounded-md px-4 py-2 text-center font-bold"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm text-[#7E88C3] mb-1">
                  Price
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  {...register(`items.${index}.price`, { valueAsNumber: true })}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9.]/g, "");
                    setValue(`items.${index}.price`, raw ? Number(raw) : 0);
                  }}
                  className="w-full border border-[#DFE3FA] rounded-md px-4 py-2 text-center font-bold"
                />
              </div>

              {/* Total */}
              <div>
                <label className="block text-sm text-[#7E88C3] mb-1">
                  Total
                </label>
                <div className="h-[42px] flex items-center font-bold text-[#888EB0] px-2">
                  {total.toFixed(2)}
                </div>
              </div>

              {/* Delete */}
              <div className="pt-6 flex items-center">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-[#888EB0] hover:text-red-500 transition"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Add New Item Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={() => append({ name: "", quantity: 1, price: 0 })}
          className="w-full bg-[#F9FAFE] text-[#7C5DFA] font-bold py-3 rounded-full hover:bg-[#DFE3FA] transition"
        >
          + Add New Item
        </button>
      </div>
    </section>
  );
};

export default InvoiceFormItemList;
