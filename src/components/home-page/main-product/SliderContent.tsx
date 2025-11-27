import Button from "@/components/button";
import { ReactSvgClient } from "@/components/react-svg-client";
import { useTranslations } from "next-intl";
import React from "react";

interface ISliderContent {
  data: { descriptionText: string; headerText: string };
}
const SliderContent = ({ data }: ISliderContent) => {
  const t = useTranslations("");

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-3 flex-shrink-0">
      {/* Left block */}
      <div className="bg-[#ECE9E3] p-6 md:p-10 flex flex-col justify-between rounded-[20px] w-full md:w-1/2 ">
        <div>
          <h2 className="text-[20px] md:text-[48px] text-textBlack font-[avenirBold]">
            {t(data.headerText)}
          </h2>
          <p className="text-base mt-6 md:mt-[64px] text-textBlack font-[avenirMedium]">
            {t(data.descriptionText)}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <p className="text-[#000000] font-[avenirBold] text-base">
            {t("in_details")}
          </p>
          <Button
            type={"roundWhite"}
            icon={
              <ReactSvgClient
                src="/icons/navigateArrow.svg"
                className="stroke-textBlack fill-textBlack"
              />
            }
          />
        </div>
      </div>

      {/* Right image */}
      <img
        src="/images/built_in_sauna.png"
        alt="Slider Image"
        className="w-full md:w-1/2 h-[300px] md:h-[620px] object-cover rounded-[20px]"
      />
    </div>
  );
};

export default SliderContent;
