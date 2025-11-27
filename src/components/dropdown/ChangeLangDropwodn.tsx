"use client";
import React from "react";
import { Dropdown } from "antd";
import { useLocale, useTranslations } from "use-intl";
import { LANGUAGES } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import useIsMobile from "@/utils/hooks/useIsMobile";
import { NAV_LIST } from "@/utils/constanst/NavList";
import {ReactSvgClient} from "@/components/react-svg-client";

interface IProps {
  isHome: boolean;
  setIsOpen(isOpen: boolean): void;
  isOpen: boolean;
}

const ChangeLangDropdown = ({ isHome, isOpen, setIsOpen }: IProps) => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();
  const isMobile = useIsMobile();

  const DropdownContent = () => (
    <div className="bg-white flex flex-col rounded-[12px] border border-[#0000001F] w-[200px] md:w-[148px] overflow-hidden p-6 md:p-3 shadow-[0_0_20px_0_#0000001F]">
      {/* Mobile navigation links */}
      {isMobile && (
        <div className="flex flex-col border-b border-gray-200 mb-2 pb-2">
          {NAV_LIST.map((item) => (
            <Link key={item.id} href={item.link}>
              <p className="text-[14px] text-textBlack font-[avenirBold] py-1">
                {t(item.title)}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Language options */}
      <div className="flex flex-row md:flex-col gap-y-2 justify-between">
        {Object.values(LANGUAGES).map((lang) => (
          <Link
            key={lang.shortCode}
            href={`/${pathname}`}
            locale={lang.shortCode}
            replace
          >
            <span
              className={`flex p-2 group items-center gap-x-1 rounded-[10px] transition-all duration-200 cursor-pointer ${
                LANGUAGES[locale].shortCode === lang.shortCode
                  ? "bg-gray"
                  : "bg-white hover:bg-primary"
              }`}
            >
              <p
                className={`text-[13px] font-[avenirSemi] transition-all duration-200 ${
                  LANGUAGES[locale].shortCode === lang.shortCode
                    ? "text-textBlack"
                    : "text-textGrey group-hover:text-white"
                }`}
              >
                {t(isMobile && lang.mobileName ? lang.mobileName : lang.code)}
              </p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <Dropdown
      open={isOpen}
      placement="bottomLeft"
      trigger={["click"]}
      className="!mr-0 transition-all duration-200"
      onOpenChange={() => setIsOpen(!isOpen)}
      popupRender={DropdownContent}
    >
      <div className="pl-3 pr-4 cursor-pointer py-3 gap-x-1 rounded-[100px] flex items-center ">
        {/* Desktop Language Dropdown */}
        <div className="hidden md:flex items-center cursor-pointer">
          <p
            className={`mx-1 text-[13px] font-[avenirBold] transition-all duration-300 ${
              isHome ? "text-white" : "text-textBlack"
            }`}
          >
            {t(LANGUAGES[locale].code)}
          </p>

          <ReactSvgClient
            src="/icons/arrowDown.svg"
            className={`dynamic-svg ${
              isHome ? "[--svg-color:#fff]" : "[--svg-color:#000]"
            } ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="block md:hidden w-6 h-6">
          <button
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-6 h-6 flex items-center justify-end cursor-pointer "
          >
            {/* Top line */}
            <span
              className={`absolute w-5 h-0.5 rounded-[1px] transition-all duration-300 
        ${isHome ? "bg-white" : "!bg-textBlack"}
        ${isOpen ? "rotate-45" : "-translate-y-2"}`}
            />

            {/* Middle line */}
            <span
              className={`absolute w-5 h-0.5 rounded-[1px] transition-all duration-300 
        ${isHome ? "bg-white" : "!bg-textBlack"}
        ${isOpen ? "opacity-0" : "opacity-100"}`}
            />

            {/* Bottom line */}
            <span
              className={`absolute w-5 h-0.5 rounded-[1px] transition-all duration-300 
        ${isHome ? "bg-white" : "!bg-textBlack"}
        ${isOpen ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </div>
    </Dropdown>
  );
};

export default ChangeLangDropdown;
