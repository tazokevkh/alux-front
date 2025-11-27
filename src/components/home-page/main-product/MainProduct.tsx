"use client";
import React, {useState} from "react";
import CustomTab, {productType} from "@/components/tab/CustomTab";
import ScrollableSlider from "@/components/slider/Slider";
import SliderContent from "@/components/home-page/main-product/SliderContent";
import {useLocale} from "next-intl";
import PROJECTS_DATA from "@/utils/constanst/serviceInfo.json";

const MainProduct = () => {
  const locale = useLocale();
  const [selectedTab, setSelectedTab] = useState<productType>("sauna");

  const data = PROJECTS_DATA[locale as keyof typeof PROJECTS_DATA];

  return (
      <div className="flex flex-col items-center gap-[40px] max:md-container">
        <CustomTab value={selectedTab} setSelectedTab={setSelectedTab}/>

        <ScrollableSlider>
          {data
              .filter((item) => item.type == selectedTab)
              .map((item) => (
                  <SliderContent key={item.id} data={item as any}/>
              ))}
        </ScrollableSlider>
      </div>
  );
};

export default MainProduct;
