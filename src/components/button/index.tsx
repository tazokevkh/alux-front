import { ReactNode, MouseEvent } from "react";

interface IButton {
  text?: string;
  textClasName?: string;
  icon?: ReactNode;
  btnClassName?: string; // Optional class name for additional styling
  iconPlacement?: "left" | "right";
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void; // Allow optional event parameter
  type: "primary" | "white" | "roundWhite" | "roundYellow";
  isDisable?: boolean;
}

export const BTN_VARIANTS = {
  // this is button types
  primary: {
    btn: "bg-primary hover:bg-[#78C9FF]",
    text: "text-text_main_two_primary ",
  },
  roundWhite: {
    btn: "bg-white rounded-full !w-[40px] !h-[40px] flex items-center justify-center",
    text: "text-text_main_two_primary ",
  },
  roundYellow: {
    btn: "bg-bg_yellow rounded-full !w-[40px] !h-[40px] flex items-center justify-center",
    text: "text-text_main_two_primary ",
  },
  white: {
    btn: "bg-white hover:bg-gray",
    text: "text-text_main_two_primary ",
  },
};

export default function Button({
  text = "",
  textClasName = "",
  btnClassName = "",
  icon = null,
  iconPlacement = "right",
  onClick,
  type,
  isDisable = false,
}: IButton) {
  return (
    <button
      aria-label={`Button ${text || "Icon"}`}
      type="button"
      onClick={
        onClick
          ? (e) => {
              if (isDisable) return;
              onClick(e);
            }
          : undefined
      }
      className={`${btnClassName} ${BTN_VARIANTS[type].btn} ${
        iconPlacement === "left" ? "flex-row" : "flex-row-reverse"
      } w-auto flex items-center justify-center transition1 cursor-pointer`}
    >
      {icon}
      {text && (
        <p className={`${textClasName} ${BTN_VARIANTS[type]?.text}`}>{text}</p>
      )}
    </button>
  );
}
