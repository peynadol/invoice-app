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
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">
          {quantity} x £{price.toFixed(2)}
        </p>
      </div>
      <div className="text-right font-bold">£{total.toFixed(2)}</div>
    </div>
  );
};

export default OrderItemRow;
