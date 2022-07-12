import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";
import tw, { styled } from "twin.macro";
import React, { ReactElement } from "react";
import Layout from "../components/Layout";

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const MainContainer = styled(Container)(() => [tw`text-center`]);

const contactUs: NextPageWithLayout<any> = () => {
  return (
    <MainContainer>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact us page for petercircuitsoft.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Contact us page입니다.</h1>
      </main>
    </MainContainer>
  );
};
export default contactUs;

contactUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
