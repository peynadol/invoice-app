import { Button } from "@/components/ui/button";

const ViewInvoiceFooter = () => {
  return (
    <div className="flex justify-between gap-2 p-6 bg-background border-t">
      <Button variant="outline">Edit</Button>
      <Button variant="destructive">Delete</Button>
      <Button className="bg-purple-600 text-white hover:bg-purple-700">
        Mark as Paid
      </Button>
    </div>
  );
};

export default ViewInvoiceFooter;
