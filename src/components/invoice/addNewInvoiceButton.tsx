import { Button } from "../ui/button";
import { Plus } from "lucide-react";
const AddNewInvoice = () => {
  return (
    <div>
      <Button className="rounded-full">
        <Plus className="bg-white rounded-full text-blue-500" />
        New
      </Button>
    </div>
  );
};

export default AddNewInvoice;
