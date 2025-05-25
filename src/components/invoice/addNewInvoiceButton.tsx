import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const AddNewInvoice = () => {
  return (
    <div>
      <Link href="/invoices/new" className="w-full h-full">
        <Button className="rounded-lg bg-blue-500 h-full">
          <Plus className="bg-white rounded-full text-[#7D5DFA]" />
          New
        </Button>
      </Link>
    </div>
  );
};

export default AddNewInvoice;
