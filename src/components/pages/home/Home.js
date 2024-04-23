import MainSlogen from "@/components/ui/homepage/MainSlogen";
import React from "react";
import Story_section from "../../ui/homepage/Story_section";
import HomeCard from "@/components/modules/homeCard/HomeCard";

function HomePage() {
  return (
    <>
      <MainSlogen />
      <Story_section />
    
      <HomeCard  />
    </>
  );
}

export default HomePage;
