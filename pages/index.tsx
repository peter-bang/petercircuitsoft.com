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
            padding: "20%",
            position: "relative",
          }}
        >
          <Image src="/documents.jpg" layout="fill" objectFit="cover" />
          <div style={{ position: "absolute", top: "10%", left: "10%" }}>
            {/* <Typography
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
            <br></br> */}
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
                color: "rgba(0,0,0,1)",
                textDecoration: "none",
              }}
            >
              피터 서킷 소프트는
              <br /> 기술을 통한 공정한 정보 제공을
              <br /> 최고의 가치로 여깁니다.
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
