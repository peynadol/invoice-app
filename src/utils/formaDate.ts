import { format } from "date-fns";
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "dd MMM yyyy");
};

export default formatDate;
