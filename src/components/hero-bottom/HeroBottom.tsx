import React, {useMemo} from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {getSocial} from "@/utils/constanst/socialLinks";

const HeroBottom = () => {
  const t = useTranslations("");
  const phoneData = useMemo(() => getSocial("phone"), []);

  return (
    <div className="relative bg-bg_yellow w-full h-[246px] md:h-[360px] rounded-[20px] overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-[294px] md:max-w-[750px] mx-auto text-center selectReverse">
        <h2 className="text-[20px] md:text-[48px] text-textBlack font-[avenirBold] mb-[32px] md:mb-[46px] ">
          {t("createyourSpace")}
        </h2>
        <a
            href={phoneData?.href}
            className="max-md:w-full"
            data-gtm-click-url={phoneData?.href}
            data-gtm-element="call-us-button"
            aria-label={`Call us at ${phoneData?.label}`}
        >
          <p className="bg-textBlack rounded-[48px] p-4 text-[#F0EEE3] font-[avenirBold] md:text-base text-sm">
            {t("contact_us")}
          </p>
        </a>

      </div>
      <img
        src="/images/footerRight.png"
        alt=""
        className="absolute top-0 right-0 hidden md:block"
      />
      <img
        src="/images/footerLeft.png"
        alt=""
        className="absolute bottom-0 left-0 hidden md:block"
      />
    </div>
  );
};

export default HeroBottom;
