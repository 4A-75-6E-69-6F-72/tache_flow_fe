import { MouseEvent } from "react";

interface ToggleButtonProps {
  isActive: boolean;
  handleToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  activeLabel?: string;
  inactiveLabel?: string;
}

export const ToggleButton = ({
  isActive,
  handleToggle,
  activeLabel = 'On',
  inactiveLabel = 'Off',
}: ToggleButtonProps) => {

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex h-6 w-11 min-w-11 min-h-6 items-center rounded-full transition-colors focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 ${isActive ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isActive ? 'translate-x-6' : 'translate-x-1'
          }`}
      />
      <span className="sr-only">{isActive ? activeLabel : inactiveLabel}</span>
    </button>
  );
};