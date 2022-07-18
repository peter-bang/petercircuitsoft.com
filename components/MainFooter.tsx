import { NextPage } from "next";
import React from "react";
import tw, { styled } from "twin.macro";
import { Typography } from "@mui/material";

const Footer = styled.footer(() => [tw`text-center h-10 p-3`]);

const MainFooter: NextPage = () => {
  return (
    <>
      <Footer>
        <Typography fontSize={12} fontFamily={"Maven pro"}>
          주식회사 피터서킷소프트 <br />
          경기도 화성시 동탄대로 635 SH 타임스퀘어 1, 1318호
          <br />
          Copyright © PETER CIRCUIT SOFT co.,ltd All rights reserved.
        </Typography>
      </Footer>
    </>
  );
};

export default MainFooter;
