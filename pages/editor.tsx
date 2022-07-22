import type { NextPage } from "next";
import Head from "next/head";
import { Button, Container } from "@mui/material";
import tw, { styled } from "twin.macro";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import "quill/dist/quill.snow.css";

const Quill = typeof window === "object" ? require("quill") : () => false;

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const MainContainer = styled(Container)(() => [
  tw`relative text-center min-h-full`,
]);

const Editor: NextPageWithLayout<any> = () => {
  const quillRef = useRef<typeof Quill>(null);
  const quillEditorRef = useRef<HTMLDivElement>(null);
  const [quillState, setQuillState] = useState<boolean>(false);
  useEffect(() => {
    if (quillEditorRef.current) {
      setQuillState(true);
    }
  }, [quillEditorRef]);

  useEffect(() => {
    if (quillState) {
      quillRef.current = new Quill(quillEditorRef.current, {
        theme: "snow",
        placeholder: "type something...",
      });
    }
  }, [quillState]);

  return (
    <MainContainer>
      <Head>
        <title>Editor</title>
      </Head>
      <main>
        <div ref={quillEditorRef}></div>
        <Button
          onClick={() => {
            var delta = quillRef.current && quillRef.current.getContents();
            console.log(
              quillEditorRef.current!.querySelector(".ql-editor")!.innerHTML
            );
          }}
        >
          저장
        </Button>
      </main>
    </MainContainer>
  );
};
export default Editor;

Editor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
