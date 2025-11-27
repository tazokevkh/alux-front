
import { Link } from "@/i18n/navigation";
import PROJECTS_DATA from "@/utils/constanst/serviceInfo.json";

import React from "react";
import ProjectCardItem from "@/components/card/ProjectCardItem";
import { getLocaleUrl } from "@/utils/getLocaleUrl";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";

interface ServicesPageProps {
  params: any;
}

export async function generateMetadata({params}: ServicesPageProps): Promise<Metadata> {
  const {locale} = await params;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aurea.ge';
  const t = await getTranslations();
  return {
    title: t('projects'),
    description: t('sauna_open_description'),
    alternates: {
      languages: {
        en: getLocaleUrl(BASE_URL, 'en', `/projects`),
        ka: getLocaleUrl(BASE_URL, 'ka', `/projects`),
        ru: getLocaleUrl(BASE_URL, 'ru', `/projects`),
        "x-default": getLocaleUrl(BASE_URL, 'ka'),
      },
      canonical: getLocaleUrl(BASE_URL, locale, `/projects`),
    },
    openGraph: {
      type: "website",
      locale: locale,
      siteName: "aurea",
      title: "aurea",
      description: "aurea",
      url: getLocaleUrl(BASE_URL, locale, `/projects`),
      images: [
        {
          url: `${BASE_URL}/images/cover.webp`,
          width: 1200,
          height: 660,
        }],
    },
  }
}

export default async function ProjectsPage() {

  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center px-4 md:px-[48px]">
      <h1 className="text-[28px] md:text-[72px] leading-[80px] font-[avenirBold] mt:[24px] md:mt-[80px] mb-[32px] md:mb-[120px]">
        {t("projects")} ({PROJECTS_DATA[locale as keyof typeof PROJECTS_DATA].length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] mb-[120px]">
        {PROJECTS_DATA[locale as keyof typeof PROJECTS_DATA].map(({ image, headerText, descriptionText, id }) => (
          <Link key={id} href={`/projects/project/${id}`}>
            <ProjectCardItem
              key={id}
              image={image}
              headerText={t(headerText)}
              descriptionText={t(descriptionText)}
              hasArrow
            />
          </Link>
        ))}
      </div>
    </div>
  );
};