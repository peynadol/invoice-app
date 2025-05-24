type Props = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

const OrderItemRow = ({ name, quantity, price, total }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 items-start mb-4">
      <div className="col-span-2">
        <p className="font-bold">{name}</p>
        <p className="text-sm font-bold text-[#7E88C3]">
          {quantity} x £
          {price.toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="text-right font-bold">
        £
        {total.toLocaleString("en-GB", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    </div>
  );
};

export default OrderItemRow;
