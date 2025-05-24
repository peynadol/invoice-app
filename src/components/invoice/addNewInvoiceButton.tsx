import { Button } from "../ui/button";
import { Plus } from "lucide-react";
const AddNewInvoice = () => {
  return (
    <div>
      <Button className="rounded-lg bg-blue-500 h-full">
        <Plus className="bg-white rounded-full text-[#7D5DFA]" />
        New
      </Button>
    </div>
  );
};

export default AddNewInvoice;
