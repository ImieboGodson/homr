"use client";

interface ListingHeadingProps {
  title: string;
  subtitle?: string;
  secondayAction?: boolean;
  children?: React.ReactNode;
  underline?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
}

const ListingHeading: React.FC<ListingHeadingProps> = ({
  title,
  subtitle,
  secondayAction,
  children,
  underline,
  large,
  medium,
  small,
}) => {
  return (
    <div className="w-full flex flex-row justify-between items-end">
      <div className="flex flex-col gap-1 items-start">
        <div
          className={`${!medium && !small && "text-3xl"} ${
            medium && "text-2xl"
          } ${small && "text-xl"} font-bold`}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className={`text-sm ${!medium && !small && "font-bold"} ${
              medium && "font-light"
            } ${small && "font-extralight"} text-black ${
              underline && "underline"
            }`}
          >
            {subtitle}
          </div>
        )}
      </div>
      {secondayAction && children && <>{children}</>}
    </div>
  );
};

export default ListingHeading;
