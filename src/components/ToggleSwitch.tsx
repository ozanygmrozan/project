import React from "react";
import { TbSunHigh, TbSunLow } from "react-icons/tb";

type ToggleSwitchProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isDarkMode,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`relative flex items-center justify-between w-16 h-6 px-1 rounded-full cursor-pointer transition-colors select-none ${
        isDarkMode ? "bg-gray-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute flex items-center justify-center w-6 h-6 text-gray-800 ${
          isDarkMode ? "text-gray-300" : "text-gray-800"
        }`}
        style={{ left: "0.5rem", top: "50%", transform: "translateY(-50%)" }}
      ></span>
      <span
        className={`absolute flex items-center justify-center w-6 h-6 text-gray-800 ${
          isDarkMode ? "text-gray-300" : "text-gray-800"
        }`}
        style={{ right: "0.5rem", top: "50%", transform: "translateY(-50%)" }}
      ></span>
      <span
        className={`absolute flex items-center justify-center w-6 h-6 ${
          isDarkMode ? "text-yellow-400" : "text-gray-800"
        }`}
        style={{ left: "0.2rem", top: "50%", transform: "translateY(-50%)" }}
      >
        <TbSunHigh size={15} />
      </span>
      <span
        className={`absolute flex items-center justify-center w-6 h-6 ${
          isDarkMode ? "text-gray-300" : "text-yellow-400"
        }`}
        style={{ right: "0.2rem", top: "50%", transform: "translateY(-50%)" }}
      >
        <TbSunLow size={15} />
      </span>
      <span
        className={`absolute w-6 h-6 bg-white rounded-full transition-transform ${
          isDarkMode ? "translate-x-10" : "translate-x-0"
        }`}
        style={{ left: "0.09rem" }}
      />
    </button>
  );
};

export default ToggleSwitch;