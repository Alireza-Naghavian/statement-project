import MainSlogen from "@/components/ui/homepage/MainSlogen";
import React from "react";
import Story_section from "../../ui/homepage/Story_section";
import HomeCard from "@/components/modules/homeCard/HomeCard";
import db from "../../../../data/db.json"
function HomePage() {
  return (
    <>
      <MainSlogen />
      <Story_section />
    
      <HomeCard homes={db.homes.slice(0,6)} />
    </>
  );
}

export default HomePage;
