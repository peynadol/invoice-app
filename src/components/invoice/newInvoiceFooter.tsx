"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type Props = {
  onDiscard?: () => void;
  onSaveDraft?: () => void;
  isSubmitting?: boolean;
};

const NewInvoiceFooter = ({ onDiscard, onSaveDraft, isSubmitting }: Props) => {
  return (
    <footer className="w-full bg-white border-t  z-50">
      <div className="w-full px-6 py-4 flex flex-wrap sm:flex-nowrap justify-between items-center gap-x-2 gap-y-4">
        {/* Discard icon */}
        <div className="flex-shrink-0">
          <Button
            type="button"
            variant="outline"
            onClick={onDiscard}
            className="bg-[#F9FAFE] hover:bg-[#DFE3FA] text-[#7E88C3] px-3 py-2"
          >
            <Trash2 size={18} />
          </Button>
        </div>

        {/* Save buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <Button
            type="button"
            className="bg-[#373B53] text-white hover:bg-[#1E2139] px-4 py-2 text-sm font-semibold"
            onClick={onSaveDraft}
          >
            Save as Draft
          </Button>
          <Button
            type="submit"
            className="bg-[#7C5DFA] text-white hover:bg-[#9277FF] px-4 py-2 text-sm font-semibold"
            disabled={isSubmitting}
          >
            Save & Send
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default NewInvoiceFooter;
