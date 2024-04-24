import HomeCard from "@/components/modules/homeCard/HomeCard";
import MultipleSelection from "@/components/ui/MultipleSelection";
import TextFiled from "@/components/ui/TextFiled";
import React, { useEffect, useState } from "react";
import { useSort } from "@/contexts/SortProvider";
import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
function AllHomes() {
  const [serach, setSearch] = useState("");
  const { dispatch, state } = useSort();
  const [page, setPage] = useState(1);
  const [homes, setHomes] = useState(state.slice(0,3));
  useEffect(() => {
    const newHomes = [...state].filter((home) => home.title.includes(serach));
    setHomes(newHomes);
  }, [serach, state]);
  const handleChange = (event, page) => {
    event.preventDefault();
    setPage(page);
    const endIndex = page * 3;
    const startIndex = endIndex - 3;
    setHomes(state.slice(startIndex,endIndex))
  };
  return (
    <>
      <HomeCard homes={homes.slice(0,3)}>
        <div className="home-filter-search">
          <div className="home-filter">
            <MultipleSelection dispatch={dispatch} state={state} />
          </div>
          <TextFiled serach={serach} setSearch={setSearch} />
        </div>

        <Container sx={{ mt: "22px", direction: "ltr", width: 1 }}>
          <Pagination
            sx={{
              mx: "auto",
              display: "flex ",
              justifyContent: "center",
            }}
            variant="outline"
            color="secondary"
            shape="rounded"
            size="large"
            className="pagination__item"
            count={Math.ceil(state?.length / 3)}

            boundaryCount={1}
            page={page}
            onChange={handleChange}
          />
         
        </Container>
      </HomeCard>
    </>
  );
}

export default AllHomes;
