"use client";

interface ListingHeadingProps {
  title: string;
  subtitle?: string;
  secondayAction?: boolean;
  children?: React.ReactNode;
}

const ListingHeading: React.FC<ListingHeadingProps> = ({
  title,
  subtitle,
  secondayAction,
  children,
}) => {
  return (
    <div className="w-full flex flex-row justify-between items-end">
      <div className="flex flex-col gap-1 items-start">
        <div className="text-3xl font-bold">{title}</div>
        {subtitle && (
          <div className="text-sm font-bold text-black underline">
            {subtitle}
          </div>
        )}
      </div>
      {secondayAction && children && <>{children}</>}
    </div>
  );
};

export default ListingHeading;
