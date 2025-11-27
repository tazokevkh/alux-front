"use client";
import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { NAV_LIST } from "@/utils/constanst/NavList";
import useIsMobile from "@/utils/hooks/useIsMobile";
import ChangeLangDropdown from "@/components/dropdown/ChangeLangDropwodn";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollLimit = isMobile ? 480 : 770;
      setIsScrolled(window.scrollY > scrollLimit);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const isTransparentHeader = isHomePage && !isScrolled;
  const textColorClass = isTransparentHeader ? "text-white" : "text-textBlack";
  const logoSrc = isTransparentHeader
    ? "/icons/logo.svg"
    : "/images/logoImg.png";

  console.log("pathname", pathname);

  return (
    <header className="sticky top-0 left-0 right-0 z-[11] p-y w-full items-center ">
      <div
        className={`flex w-full items-center py-5 justify-between px-4 md:px-[48px] transition-colors duration-300 ${
          isTransparentHeader ? "" : "bg-white"
        }`}
      >
        <Link
          href="/"
          scroll
          className="flex items-center mr-[20px] lg:mr-[50px]"
        >
          <img src={logoSrc} alt="Site logo" width={100} height={36} />
        </Link>

        <nav className="hidden w-full flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LIST.map((item) => {
            const isActive =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`${textColorClass} relative font-[avenirBold]`}
              >
                {t(item.title)}
                {isActive && (
                  <span
                    className="absolute bottom-[-4px] left-1/2 bg-textBlack"
                    style={{
                      width: "25%",
                      height: "2px",
                      borderRadius: "999px",
                      transform: "translateX(-50%)",
                      transition:
                        "width 0.3s cubic-bezier(.4,0,.2,1), background 0.3s cubic-bezier(.4,0,.2,1)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <ChangeLangDropdown
          isHome={isTransparentHeader}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </header>
  );
}
