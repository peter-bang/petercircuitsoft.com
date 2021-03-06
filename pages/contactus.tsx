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
        <div>
          <h1>Contact us</h1>
          <h2>페이지 제작중입니다.</h2>
          <span>
            문의하기:{" "}
            <a href="mailto:peter.bang@petercircuitsoft.com">
              peter.bang@petercircuitsoft.com
            </a>
          </span>
          <br></br>
          <br></br>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12710.345017738746!2d127.0981451!3d37.2100556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4be129871521d2bb!2z7ZS87YSw7ISc7YK37IaM7ZSE7Yq4!5e0!3m2!1sko!2skr!4v1658126031155!5m2!1sko!2skr"
          width="600"
          height="450"
          style={{ border: "0" }}
          // allowfullscreen={""}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </MainContainer>
  );
};
export default contactUs;

contactUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
