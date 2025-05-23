import React from "react";
import OrderItemRow from "./OrderItemRow";

const OrderCard = ({ items, total }) => {
  return (
    <div className="overflow-hidden rounded-md">
      {/* Item List */}
      <div className="p-6 bg-muted">
        {items.map((item, index) => (
          <OrderItemRow
            key={index}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            total={item.total}
          />
        ))}
      </div>

      {/* Grand Total Bar */}
      <div className="flex justify-between items-center px-6 py-5 bg-[#373A53] text-white">
        <p className="text-sm">Grand Total</p>
        <p className="text-xl font-bold">£{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderCard;
