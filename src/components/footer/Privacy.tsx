import {Link} from "@/i18n/navigation";
import React from "react";
import {useTranslations} from "next-intl";

const Privacy = () => {
  const t = useTranslations('');

  return (
      <div className="flex flex-col mb-5 gap-4 md:flex-row w-full items-center md:justify-between">
        <p className="font-[avenirMedium] text-textGrey text-[14px]">
          {t('rights')}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link href="/privacy-policy">
            <p className="font-[avenirMedium] text-textGrey text-[14px]">
              {t('terms')}
            </p>
          </Link>
          <Link href="/terms-and-conditions">
            <p className="font-[avenirMedium] text-textGrey text-[14px]">
              {t('user_policy')}
            </p>
          </Link>
        </div>
      </div>
  );
};

export default Privacy;
