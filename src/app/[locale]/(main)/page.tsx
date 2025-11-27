// import {useTranslations} from 'next-intl';
import { Metadata } from "next";
import { getLocaleUrl } from "@/utils/getLocaleUrl";
import { useTranslations } from "next-intl";
import MainProduct from "@/components/home-page/main-product/MainProduct";
import AboutUs from "@/components/home-page/AboutUs";
import PageHero from "@/components/home-page/PageHero";
import {getTranslations} from "next-intl/server";

interface ServicesPageProps {
  params: any;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://aurea.ge";
  const t = await getTranslations();
  return {
    title: t('main_page_title'),
    description: t('main_page_description'),
    alternates: {
      languages: {
        en: getLocaleUrl(BASE_URL, "en"),
        ka: getLocaleUrl(BASE_URL, "ka"),
        ru: getLocaleUrl(BASE_URL, "ru"),
        "x-default": getLocaleUrl(BASE_URL, "ka"),
      },
      canonical: getLocaleUrl(BASE_URL, locale),
    },
    openGraph: {
      type: "website",
      locale: locale,
      siteName: "aurea",
      title: "aura",
      description: "aurea",
      url: getLocaleUrl(BASE_URL, locale),
      images: [
        {
          url: `${BASE_URL}/images/cover.webp`,
          width: 1200,
          height: 660,
        },
      ],
    },
  };
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className={" flex flex-col items-center md:gap-[120px] gap-[48px]"}>
      <div className=" md:h-[730px] h-[490px] w-full flex justify-center items-center">
        <PageHero />
      </div>
      <p className="leading-[46px] font-[avenirMedium] text-[32px] text-center">
        {t("aureaCrates")}
      </p>
      <MainProduct />
      <AboutUs />
    </div>
  );
}
