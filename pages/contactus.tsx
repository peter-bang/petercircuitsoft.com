import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";
import tw, { styled } from "twin.macro";
import React, { ReactElement, useEffect, useRef } from "react";
import Layout from "../components/Layout";

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const MainContainer = styled(Container)(() => [tw`text-center`]);

const contactUs: NextPageWithLayout<any> = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapDivRef.current) {
      const { kakao } = window;
      const container = mapDivRef.current;
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const newMap = new kakao.maps.Map(mapDivRef.current, options);
    }
  }, [mapDivRef]);
  return (
    <MainContainer>
      <Head>
        <title>Contact Us</title>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JAVASCRIPT_API_KEY}`}
        ></script>
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
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <div
          ref={mapDivRef}
          style={{ margin: "auto", width: "500px", height: "400px" }}
        ></div> */}
      </main>
    </MainContainer>
  );
};
export default contactUs;

contactUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
