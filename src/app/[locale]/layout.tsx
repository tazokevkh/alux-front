import "@/styles/globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import QueryProvider from "@/providers/queryProvider";
import LenisProvider from "@/providers/lenisProvider";
import { Viewport } from "next";
import Script from "next/script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}


export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const GTM = process.env.NEXT_PUBLIC_GTM || "";
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://aurea.ge";
  const GOOGLE_SITE_VERIFICATION =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={`/icons/favicon.svg`} />
        {GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={GOOGLE_SITE_VERIFICATION}
          />
        )}
      </head>
      <body>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-${GTM}');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${GTM}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <NextIntlClientProvider locale={locale}>
          <QueryProvider>
            <LenisProvider>{children}</LenisProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
