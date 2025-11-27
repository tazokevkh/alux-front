import React from "react";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center text-center max-w-[1150px]">
      <h2 className="text-[20px] md:text-[48px] text-textBlack font-[avenirBold]">
        {t("about_us")}
      </h2>

      <p className="text-base font-[avenirMedium] text-textBlack mt-[30px] md:mt-[40px]">
        {t("homeAboutDesc")}
      </p>
      <div className="relative mt-[100px] w-full flex justify-center md:!h-[280px] h-[170px]">
        <div className="absolute bg-[#E7E3DC] md:w-[450px] md:h-[230px] w-[274px] h-[140px] rounded-[20px] rotate-[15deg]" />
        <div className="absolute bg-[#E7E3DC] md:w-[450px] md:h-[230px] w-[274px] h-[140px] rounded-[20px] rotate-[-15deg]" />
        <img
          src="/images/aboutUs.png"
          alt="About Us Image"
          className="md:w-[450px] md:h-[230px] w-[274px] h-[140px] object-cover rounded-[20px] relative"
        />
      </div>
    </div>
  );
};

export default AboutUs;
