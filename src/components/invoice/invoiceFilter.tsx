'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

type InvoiceFilterProps = {
  selected: string[];
  toggleStatus: (status: string) => void;
};

const InvoiceFilter = ({ selected, toggleStatus }: InvoiceFilterProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-1 px-4 py-2 border rounded-md shadow-sm'>
        Filter <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={selected.includes('draft')}
          onCheckedChange={() => toggleStatus('draft')}
          onSelect={(e) => e.preventDefault()}
        >
          Draft
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selected.includes('pending')}
          onCheckedChange={() => toggleStatus('pending')}
          onSelect={(e) => e.preventDefault()}
        >
          Pending
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selected.includes('paid')}
          onCheckedChange={() => toggleStatus('paid')}
          onSelect={(e) => e.preventDefault()}
        >
          Paid
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InvoiceFilter;
