"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { useState } from "react";

const InvoiceFilter = () => {
  const [filterDraft, setFilterDraft] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const [filterPaid, setFilterPaid] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        Filter
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={filterDraft}
          onCheckedChange={setFilterDraft}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          Draft
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={filterPending}
          onCheckedChange={setFilterPending}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          Pending
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={filterPaid}
          onCheckedChange={setFilterPaid}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          Paid
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InvoiceFilter;
