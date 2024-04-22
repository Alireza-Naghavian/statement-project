import HomeCard from "@/components/modules/homeCard/HomeCard";
import MultipleSelection from "@/components/ui/MultipleSelection";
import TextFiled from "@/components/ui/TextFiled";
import React from "react";
function AllHomes() {
  const homeDatas = [
    {
      id: 1,
      cat: "آپارتمان خانوادگی مدرن",
      room: 4,
      citry: "مالدیو",
      width: 400,
      price: 560,
    },
    {
      id: 2,
      cat: "واحد تجاری",
      room: 2,
      citry: "ورشو",
      width: 400,
      price: 860,
    },
    {
      id: 3,
      cat: "مگا سوییت",
      room: 6,
      citry: "پاریس",
      width: 400,
      price: 660,
    },
    {
      id: 4,
      cat: "سوپر ویلا",
      room: 4,
      citry: "بارسلون",
      width: 400,
      price: 460,
    },
    {
      id: 5,
      cat: "ویلا خانوادگی",
      room: 2,
      citry: "مادرید",
      width: 400,
      price: 320,
    },
    {
      id: 6,
      cat: "آپارتمان  مدرن",
      room: 4,
      citry: "مالدیو",
      width: 400,
      price: 560,
    },
  ];
  return (
    <>
      <HomeCard homeDatas={homeDatas}>
        <div class="home-filter-search">
          <div class="home-filter">
            <MultipleSelection />
          </div>

          <TextFiled />
        </div>
      </HomeCard>
    </>
  );
}

export default AllHomes;
