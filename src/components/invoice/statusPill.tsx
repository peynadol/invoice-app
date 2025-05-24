import clsx from "clsx";

const StatusPill = ({ status }) => {
  const pillClass = clsx(
    "flex items-center justify-center px-4 py-2 rounded-md w-[120px] h-[40px]",
    {
      "text-[#FF8E01] bg-[#FFF9F0]": status === "pending",
      "text-[#34D69F] bg-[#F3FDFA]": status === "paid",
      "text-[#373A53] bg-[#F4F4F5]": status === "draft",
    }
  );

  return (
    <div className={pillClass}>
      <div className="flex items-center gap-1">
        <span className="text-6xl leading-none translate-y-[-5px]">
          &middot;
        </span>
        <span className="capitalize font-bold text-sm">{status}</span>
      </div>
    </div>
  );
};

export default StatusPill;
