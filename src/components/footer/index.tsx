import React from "react";
import FooterNav from "@/components/footer/FooterNav";
import FooterContactInfo from "@/components/footer/FooterContactInfo";
import Privacy from "@/components/footer/Privacy";

export function Footer() {
  return (
    <footer className="container !mt-[48px] md:!mt-[120px] mb-[40px] md:mb-[80px] flex flex-col gap-[32px]">
      <FooterNav />
      <FooterContactInfo />
      <Privacy />
    </footer>
  );
}
