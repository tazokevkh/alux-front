
import React from "react";
import { FOOTER_LIST } from "@/utils/constanst/NavList";
import Link from "next/link";
import { useTranslations } from "next-intl";

const FooterNav = () => {
  const t = useTranslations("");
  return (
    <div className="flex flex-col gap-[32px]">
      <img
        src="/images/logoImg.png"
        alt=""
        width={217}
        height={78}
        className="flex justify-center items-center mx-auto"
      />
      <div
        className={"flex flex-col md:flex-row md:justify-center items-center"}
      >
        {FOOTER_LIST.map((item) => (
          <Link key={item.id} className="flex" href={item.link}>
            <h3 className="text-base font-[avenirBold] text-textBlack px-5 py-3">
              {t(item.title)}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FooterNav;
