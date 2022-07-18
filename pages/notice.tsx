import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";
import tw, { styled } from "twin.macro";
import React, { ReactElement } from "react";
import Layout from "../components/Layout";

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const MainContainer = styled(Container)(() => [
  tw`relative text-center min-h-full`,
]);

const notice: NextPageWithLayout<any> = () => {
  return (
    <MainContainer>
      <Head>
        <title>Notice</title>
        <meta
          name="description"
          content="notice page for petercircuitsoft.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Notice page입니다.</h1>
        <h2>페이지 제작중입니다.</h2>
      </main>
    </MainContainer>
  );
};
export default notice;

notice.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
