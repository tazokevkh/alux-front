import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const PageHero = () => {
  const t = useTranslations();
  return (
    <div className="absolute md:px-3 px-4 top-0 left-0 w-full z-10 flex justify-center mt-[14px]">
      <div
        style={{
          backgroundImage: "url('/images/headerCoverHome.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000000",
        }}
        className="w-full max-w-[1424px] md:!h-[816px] !h-[530px] flex flex-col items-center justify-center rounded-[20px] px-4"
      >
        <h1 className="font-[avenirBold] text-white text-[28px] md:text-[72px] text-center">
          {t("artOfComfort")}
        </h1>
        <p className="font-[avenirMedium] text-base md:text-[20px] text-white md:mt-[70px] mt-[40px] md:mb-[48px] mb-[43px] text-center">
          {t("relaxRecovery")}
        </p>
        <Link href={"/about-us"}>
          <p className="bg-bg_yellow min-w-[204px] text-center rounded-[48px] p-4 text-textBlack font-bold">
            {t("about_us")}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PageHero;
