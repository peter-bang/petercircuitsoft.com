import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";
import tw, { styled } from "twin.macro";
import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const MainContainer = styled.div(() => [tw`relative text-center p-0`]);

const Home: NextPageWithLayout<any> = () => {
  return (
    <MainContainer>
      <Head>
        <title>petercircuitsoft.com</title>
        <meta
          name="description"
          content="Home page for petercircuitsoft co.,ltd"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            width: "100%",
            padding: "30%",
            position: "relative",
          }}
        >
          <Image src="/jeju.png" layout="fill" objectFit="cover" />
          <div style={{ position: "absolute", top: "10%", left: "10%" }}>
            <Typography
              fontSize={{ xs: 30, md: 60 }}
              noWrap
              component="a"
              fontFamily="Maven pro"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                textAlign: "left",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              peter circuit soft
            </Typography>
            <Typography
              fontSize={{ xs: 15, md: 45 }}
              noWrap
              component="a"
              fontFamily="Maven pro"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                textAlign: "left",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              피터 서킷 소프트는
              <br /> 심장이 쫄깃한 모험을 좋아하는 피터가 만든
              <br /> 따끈따끈한 스타트업이에요.
            </Typography>
          </div>
        </div>
      </main>
    </MainContainer>
  );
};
export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
