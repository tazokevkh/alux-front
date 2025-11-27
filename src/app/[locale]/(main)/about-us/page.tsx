import React from "react";
import { useTranslations } from "next-intl";
import { SERVICE_LIST, VALUE_LIST } from "@/utils/constanst/InfoCardlList";
import InfoCard from "@/components/about/InfoCard";
import { div } from "framer-motion/client";
import { getLocaleUrl } from "@/utils/getLocaleUrl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

interface ServicesPageProps {
  params: any;
}

export async function generateMetadata({params}: ServicesPageProps): Promise<Metadata> {
  const {locale} = await params;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aurea.ge';
  const t = await getTranslations();
  return {
    title: t('about_us'),
    description: t('homeAboutDesc'),
    alternates: {
      languages: {
        en: getLocaleUrl(BASE_URL, 'en', `/about-us`),
        ka: getLocaleUrl(BASE_URL, 'ka', `/about-us`),
        ru: getLocaleUrl(BASE_URL, 'ru', `/about-us`),
        "x-default": getLocaleUrl(BASE_URL, 'ka', `/about-us`),
      },
      canonical: getLocaleUrl(BASE_URL, locale, `/about-us`),
    },
    openGraph: {
      type: "website",
      locale: locale,
      siteName: "aurea",
      title: "aurea",
      description: "aurea",
      url: getLocaleUrl(BASE_URL, locale, `/about-us`),
      images: [
        {
          url: `${BASE_URL}/images/cover.webp`,
          width: 1200,
          height: 660,
        }],
    },
  }
}


export default function AboutUsPage() {
  const t = useTranslations();

  return (
    <div className={"flex flex-col items-center text-center"}>
      <h1 className="font-[avenirBold] text-[28px] md:text-[72px] text-textBlack text-center md:mt-[80px] mt-12">
        {t("about_us")}
      </h1>
      <img
        src="/images/wideOpenSaunsa.png"
        alt=""
        width={1320}
        height={540}
        className="md:mt-[100px] mt-[40px] md:mb-[70px] mb-12"
      />
      <p className="leading-[30px] font-[avenirMedium] text-base text-center md:max-w-[60%]">
        {t("aureaCrates")}
      </p>
      <p className="leading-[30px] font-[avenirMedium] text-base text-center mt-10 max-w-[1192px] px-4">
        {t("homeAboutDesc")}
      </p>
      <h2 className="font-[avenirBold] text-[28px] text-textBlack mt-10 md:mt-[70px] text-center">
        {t("aurea_offers")}
      </h2>
      <div className="flex justify-center">
        <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full items-center">
          {SERVICE_LIST.map((item) => (
            <InfoCard key={item.id} text={item.text} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1192px] px-4 my-10 md:my-[70px]">
        <p className="leading-[30px] font-[avenirMedium] text-base text-center">
          {t("aurea_goal")}
        </p>
        <p className="leading-[30px] font-[avenirMedium] text-base text-center">
          {t("aurea_team")}
        </p>
      </div>
      <h3 className="font-[avenirBold] text-[28px] text-textBlack">
        {t("company_values")}
      </h3>
      <div className="flex justify-center">
        <div className="grid gap-5 mt-10 grid-cols-1 lg:grid-cols-3 w-full items-center">
          {VALUE_LIST.map((item) => (
            <InfoCard key={item.id} text={item.text} />
          ))}
        </div>
      </div>
      <h4 className="font-[avenirBold] md:text-[28px] text-[20px] text-textBlack mt-10">
        Aurea
      </h4>
      <p className="leading-[30px] font-[avenirMedium] text-base text-center md:mb-[120px] mb-[48px]">
        {t("comfort_art")}
      </p>
    </div>
  );
}
