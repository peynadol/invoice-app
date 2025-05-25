import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const GoBackBar = () => (
  <Link
    href="/invoices"
    className="flex items-center gap-2 text-sm font-bold text-primary mb-6 mt-4 hover:underline"
  >
    <ChevronLeft size={18} color="#7D5DFA" />
    Go back
  </Link>
);
