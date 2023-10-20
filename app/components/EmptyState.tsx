"use client";

import { useRouter } from "next/navigation";

import { IconType } from "react-icons/lib";
import Button from "./buttons/Button";

interface EmptyStateProps {
  title?: string;
  icon?: IconType;
  subtitle?: string;
  actionLabel?: string;
  action?: () => void;
  showButton?: boolean;
  center?: boolean;
  border?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  icon: Icon,
  subtitle,
  actionLabel,
  action,
  center,
  showButton,
  border,
}) => {
  const router = useRouter();
  return (
    <div
      className={`w-full min-h-[30vh] pt-6 pb-12 flex items-start  ${
        center ? "justify-center" : "justify-start"
      } ${border && "border-y"}`}
    >
      <div
        className={`flex flex-col gap-2 ${
          center ? "items-center" : "items-start"
        }`}
      >
        {Icon && <Icon size={30} />}
        {title && <div className="text-2xl font-bold">{title}</div>}
        {subtitle && (
          <div
            className={`text-base font-light text-neutral-600 max-w-[350px] ${
              center && "text-center"
            }`}
          >
            {subtitle}
          </div>
        )}
        <div className="w-48 mt-4">
          {showButton && actionLabel && (
            <Button
              title={actionLabel}
              onClick={() => router.push("/listings")}
              outline
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
