"use client";
import { useFieldArray, useFormContext } from "react-hook-form";
const InvoiceFormItemList = () => {
  const { control, register, watch, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = watch("items");

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold text-purple-600">Item List</h2>

      {fields.map((field, index) => {
        const quantity = Number(items?.[index]?.quantity || 0);
        const price = Number(items?.[index]?.price || 0);
        const total = quantity * price;

        return (
          <div key={field.id} className="space-y-2 border-b pb-4">
            <div>
              <label>Item Name</label>
              <input
                {...register(`items.${index}.name`)}
                className="block w-full"
              />
            </div>

            <div className="grid grid-cols-4 gap-2 items-end">
              <div>
                <label>Qty.</label>
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
                />
              </div>

              <div>
                <label>Price</label>
                <input
                  type="text"
                  inputMode="decimal"
                  {...register(`items.${index}.price`, { valueAsNumber: true })}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9.]/g, "");
                    setValue(`items.${index}.price`, raw ? Number(raw) : 0);
                  }}
                />
              </div>

              <div>
                <label>Total</label>
                <input
                  value={total.toFixed(2)}
                  disabled
                  readOnly
                  className="text-gray-500"
                />
              </div>

              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500"
              >
                🗑️
              </button>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => append({ name: "", quantity: 1, price: 0 })}
        className="bg-gray-100 text-purple-600 px-4 py-2 rounded w-full"
      >
        + Add New Item
      </button>
    </section>
  );
};

export default InvoiceFormItemList;
