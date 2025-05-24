import StatusPill from "./statusPill";

const InvoiceStatusCard = ({ status }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg h-[90px] p-5 mb-4">
      <p className="text-sm font-semibold text-[#858BB2]">Status</p>
      <StatusPill status={status} />
    </div>
  );
};

export default InvoiceStatusCard;
