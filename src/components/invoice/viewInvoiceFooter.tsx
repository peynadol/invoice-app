"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useInvoiceStore } from "@/store/invoiceStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  invoiceId: string;
  status: string;
};

const ViewInvoiceFooter = ({ invoiceId, status }: Props) => {
  const router = useRouter();
  const deleteInvoice = useInvoiceStore((state) => state.deleteInvoice);
  const updateInvoiceStatus = useInvoiceStore(
    (state) => state.updateInvoiceStatus
  );

  const handleDelete = () => {
    deleteInvoice(invoiceId);
  };

  const handleMarkAsPaid = () => {
    if (status !== "paid") {
      updateInvoiceStatus(invoiceId, "paid");
      toast.success("Invoice marked as paid successfully!", {
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex justify-between gap-2 p-6 bg-background border-t">
      <Button
        className="cursor-pointer"
        variant="outline"
        onClick={() => router.push(`/invoices/${invoiceId}/edit`)}
        disabled={status === "paid"}
      >
        Edit
      </Button>

      {/* Dialog for delete confirmation */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="cursor-pointer">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this invoice? This action cannot be
            undone.
          </p>
          <DialogFooter className="mt-4">
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogTrigger>
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="cursor-pointer"
            >
              Confirm Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button
        className="bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
        onClick={handleMarkAsPaid}
        disabled={status === "paid"}
      >
        Mark as Paid
      </Button>
    </div>
  );
};

export default ViewInvoiceFooter;
