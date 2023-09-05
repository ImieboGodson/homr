"use client";

interface ListingHeadingProps {
  title: string;
  subtitle?: string;
}

const ListingHeading: React.FC<ListingHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="text-3xl font-bold">{title}</div>
      {subtitle && <div className="text-lg text-neutral-600">{subtitle}</div>}
    </div>
  );
};

export default ListingHeading;
