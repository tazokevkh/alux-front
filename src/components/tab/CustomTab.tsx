"use client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export type productType = "sauna" | "jacuzzi";

interface CustomTabProps {
  value: productType;
  setSelectedTab: (value: productType) => void;
}

const TABS: { label: productType }[] = [
  { label: "sauna" },
  { label: "jacuzzi" },
];

const CustomTab: React.FC<CustomTabProps> = ({ value, setSelectedTab }) => {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = container.querySelector<HTMLButtonElement>(
      `button[data-value="${value}"]`
    );
    if (activeButton) {
      setHighlightStyle({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft,
      });
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className="relative flex border border-gray-300 rounded-full p-1 bg-white w-fit"
      style={{
        position: "relative",
        display: "flex",
        borderRadius: "60px",
        padding: "4px",
        width: "fit-content",
      }}
    >
      <div
        className="absolute top-1 bottom-1 bg-[#FEE55E] rounded-full shadow-md transition-all duration-300 ease-in-out"
        style={{
          width: highlightStyle.width,
          left: highlightStyle.left,
        }}
      />

      {TABS.map((tab) => (
        <button
          key={tab.label}
          data-value={tab.label}
          onClick={() => setSelectedTab(tab.label)}
          className={`relative z-10 px-6 py-2 rounded-full text-textBlack font-[avenirBold] text-[16px] transition-colors duration-300 `}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t(tab.label)}
        </button>
      ))}
    </div>
  );
};

export default CustomTab;
