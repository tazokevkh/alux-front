import React, {useMemo} from "react";
import {useTranslations} from "next-intl";
import {ReactSvgClient} from "@/components/react-svg-client";
import {getSocial, getSocialFilteredArr} from "@/utils/constanst/socialLinks";

const FooterContactInfo = () => {
  const t = useTranslations();
  const phoneData = useMemo(() => getSocial("phone"), []);

  return (
      <div
          className="w-full py-[32px] flex flex-col md:flex-row md:justify-between items-center gap-5 text-center border-y border-borderGrey">
        <div className="flex itesms-center gap-3">
          <p className="text-textGrey text-base font-[avenirBold]">
            {t("contact_us")}
          </p>
          <a
              href={phoneData?.href}
              data-gtm-click-url={phoneData?.href}
              data-gtm-element="call-us-button"
              aria-label={`Call us at ${phoneData?.label}`}
              className="text-base font-[avenirBold] text-textBlack">
            {phoneData?.value}
          </a>

        </div>
        <div className="flex itesms-center gap-3">
          <p className="text-textGrey text-base font-[avenirBold]">
            {t("text_us")}
          </p>

          <a href={getSocial("email")?.href || ""} className="text-base font-[avenirBold] text-textBlack">
            {getSocial("email")?.value}
          </a>
        </div>
        <div className="flex itesms-center gap-3">
          <p className="text-textGrey text-base font-[avenirBold]">
            {t("follow_us")}
          </p>
          {getSocialFilteredArr(["facebook","instagram"]).map((item, index) => (
              <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="hover:opacity-70 transition-opacity"
              >
                <ReactSvgClient
                src={item.iconSrc}
                />
              </a>
          ))
          }
        </div>
      </div>
  );
};

export default FooterContactInfo;
