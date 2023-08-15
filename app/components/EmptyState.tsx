"use client";

import { useRouter } from "next/navigation";

import { IconType } from "react-icons/lib";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  icon?: IconType;
  subtitle?: string;
  actionLabel?: string;
  action?: () => void;
  showReset?: boolean;
  center?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  icon: Icon,
  subtitle,
  actionLabel,
  action,
  center,
  showReset,
}) => {
  const router = useRouter();
  return (
    <div
      className={`w-full h-[35vh] flex items-center ${
        center ? "justify-center" : "justify-start"
      }`}
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
          {showReset && (
            <Button
              title="Reset"
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
