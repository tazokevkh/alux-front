import React from "react";
import { useTranslations } from "next-intl";

const InfoCard = ({ text, textClassName }: { text: string, textClassName?: string }) => {
  const t = useTranslations();

  return (
    <div className="bg-margalit md:w-[315px] w-[260px] h-[140px] flex items-center justify-center rounded-[20px]">
      <p className={`md:text-[20px]  font-[avenirBold] text-[#000000] text-center px-2 ${textClassName}`}>
        {t(text)}
      </p>
    </div>
  );
};

export default InfoCard;
