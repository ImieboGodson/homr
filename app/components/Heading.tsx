"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  secondayAction?: boolean;
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  secondayAction,
  children,
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-col gap-1 items-start">
        <div className="text-2xl font-extrabold">{title}</div>
        {subtitle && <div className="text-xs">{subtitle}</div>}
      </div>
      {secondayAction && children && <>{children}</>}
    </div>
  );
};

export default Heading;
