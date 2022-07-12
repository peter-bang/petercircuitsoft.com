import { NextPage } from "next";
import React from "react";
import tw, { styled } from "twin.macro";
import { Typography } from "@mui/material";

const Footer = styled.footer(() => [tw`text-center h-10 p-3`]);

const MainFooter: NextPage = () => {
  return (
    <Footer>
      <Typography fontFamily={"Maven pro"}>
        Copyright © PETER CIRCUIT SOFT co.,ltd All rights reserved.
      </Typography>
    </Footer>
  );
};

export default MainFooter;
