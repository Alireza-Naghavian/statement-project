import HomeCard from "@/components/modules/homeCard/HomeCard";
import MultipleSelection from "@/components/ui/MultipleSelection";
import TextFiled from "@/components/ui/TextFiled";
import React, { useEffect, useState } from "react";
import { useSort } from "@/contexts/SortProvider";
function AllHomes() {
  const [serach, setSearch] = useState("");
  const {dispatch,state} = useSort()

  const [homes, setHomes] = useState(state);
  useEffect(() => {
    const newHomes = [...state].filter((home) => home.title.includes(serach));
    setHomes(newHomes);
  }, [serach, state]);
  
  return (
    <>
      <HomeCard homes={homes}>
        <div className="home-filter-search">
          <div className="home-filter">
            <MultipleSelection dispatch={dispatch} state={state} />
          </div>

          <TextFiled serach={serach} setSearch={setSearch} />
        </div>
      </HomeCard>
    </>
  );
}

export default AllHomes;
