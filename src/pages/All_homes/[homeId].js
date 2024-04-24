import SingelHome from "@/components/pages/singleHomeDetail/SingelHome";
import { useRouter } from "next/router";
import React from "react";

function SingleHome() {
  const {query} = useRouter();
  return (
    <>
      <SingelHome query={query} />
    </>
  );
}

export default SingleHome;
