"use client";

import Button from "../Button";

interface NavigationFooterProps {
  onSubmit: () => void;
  secondaryAction?: () => void;
  actionLabel: string;
  secondaryActionLabel?: string;
}

const NavigationFooter: React.FC<NavigationFooterProps> = ({
  onSubmit,
  secondaryAction,
  actionLabel,
  secondaryActionLabel,
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 w-full px-12 py-6 flex flex-rol ${
        secondaryAction && secondaryActionLabel
          ? "justify-between"
          : "justify-end"
      } items-center border-t-4`}
    >
      {secondaryAction && secondaryActionLabel && (
        <div className="w-28">
          <Button
            title={secondaryActionLabel}
            onClick={secondaryAction}
            outline
          />
        </div>
      )}
      <div className="w-28">
        <Button title={actionLabel} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default NavigationFooter;
