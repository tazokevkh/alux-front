import React from 'react'
import CardItem from '@/components/card/ProjectCardItem';
import { getLocaleUrl } from '@/utils/getLocaleUrl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import PROJECTS_DATA from "@/utils/constanst/serviceInfo.json";
import InfoCard from '@/components/about/InfoCard';

interface ServicesPageProps {
  params: any;
}

export async function generateMetadata({params}: ServicesPageProps): Promise<Metadata> {
  const {locale, id} = await params;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aurea.ge';
  const t = await getTranslations();

  return {
    title: t('project'),
    description: t('project'),
    alternates: {
      languages: {
        en: getLocaleUrl(BASE_URL, 'en', `/projects/${id}`),
        ka: getLocaleUrl(BASE_URL, 'ka', `/projects/${id}`),
        ru: getLocaleUrl(BASE_URL, 'ru', `/projects/${id}`),
        "x-default": getLocaleUrl(BASE_URL, 'ka', `/projects/${id}`),
      },
      canonical: getLocaleUrl(BASE_URL, locale, `/projects/${id}`),
    },
    openGraph: {
      type: "website",
      locale: locale,
      siteName: "aurea",
      title: "aurea",
      description: "aurea",
      url: getLocaleUrl(BASE_URL, locale, `/projects/${id}`),
      images: [
        {
          url: `${BASE_URL}/images/cover.webp`,
          width: 1200,
          height: 660,
        }],
    },
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {

  const locale = await getLocale();

  const PROJECT_DATA = PROJECTS_DATA[locale as keyof typeof PROJECTS_DATA]?.filter(item => item.id === params.id)[0]?.childProject;

  return (
      <div className='flex flex-col items-center px-4 md:px-[48px]'>
        <h1 className="leading-[36px] md:leading-[80px] font-[avenirBold] text-[28px] md:text-[72px] text-textBlack md:mt-[80px] mt-12 w-full md:w-[816px] text-center">
          {PROJECT_DATA?.title}
        </h1>

        <img
            src={PROJECT_DATA?.mainImage}
            alt=""
            width={1320}
            height={540}
            className="mt-[40px] md:mt-[100px] mb-8 md:mb-[70px]"
        />
        <p className="leading-[30px] text-textBlack font-[avenirMedium] text-base text-center md:max-w-[70%]">
          {PROJECT_DATA?.subtitle}
        </p>

        <p className="leading-[30px] font-[avenirMedium] text-base text-center w-full max-w-[1200px] mt-[16px] md:mt-[48px] mb-[20px] md:mb-[40px]">
          {PROJECT_DATA?.description}
        </p>

        {(PROJECT_DATA as any)?.descriptionList &&
          <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ${(PROJECT_DATA as any).descriptionList.length < 4 && `2xl:!grid-cols-${(PROJECT_DATA as any)?.descriptionList?.length}`} gap-[10px] md:gap-[40px] mb-[40px] md:mb-[80px]`}>
            {(PROJECT_DATA as any).descriptionList.map((item: string, i: number) => (
              <InfoCard key={i} text={item} textClassName='!text-[14px] md:!text-[16px]' />
            ))}
          </div>
        }

        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:gap-[40px] mb-[120px] md:mb-[720px] xl:w-[1320px]">
          {PROJECT_DATA?.ProjectImages?.map(({img, id}, i) => (
              <CardItem
                  key={id}
                  image={img}
              />
          ))}
        </div>

      </div>
  )
}