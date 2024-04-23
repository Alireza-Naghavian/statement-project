import React from "react";
import Container from "@mui/material/Container";
function TextFiled({serach,setSearch}) {
  
  return (
    <>
      <Container
        className="home-search"
     
      >
         <div className="home-search">
                        <input type="text" value={serach} onChange={(e)=> setSearch(e.target.value)} placeholder="جستجو کنید" />
                    </div>
      </Container>
    </>
  );
}

export default TextFiled;
