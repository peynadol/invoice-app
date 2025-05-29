"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  onCancel?: () => void;
  isSubmitting?: boolean;
};

const EditInvoiceFooter = ({ onCancel, isSubmitting }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full bg-white px-6 py-6 border-t shadow-inner">
      <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-x-2 gap-y-4">
        <div className="flex-shrink-0">
          <Button
            type="button"
            variant="outline"
            className="bg-[#F9FAFE] hover:bg-[#DFE3FA] text-[#7E88C3] px-4 py-2 text-sm font-semibold"
            onClick={onCancel || (() => router.back())}
          >
            Cancel
          </Button>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <Button
            type="submit"
            className="bg-[#7C5DFA] text-white hover:bg-[#9277FF] px-4 py-2 text-sm font-semibold"
            disabled={isSubmitting}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditInvoiceFooter;
