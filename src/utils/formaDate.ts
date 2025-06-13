import { format, isValid } from "date-fns";

const formatDate = (input: string | Date): string => {
  const date = typeof input === "string" ? new Date(input) : input;

  if (!isValid(date)) return "Invalid Date";

  return format(date, "dd MMM yyyy");
};

export default formatDate;
