import React from "react";
import styled from "styled-components";

const PdfView = styled.iframe`
  margin: 16px 0;
  width: 100%;
  height: 100vh;
`;

const PdfViewer = ({ url }: { url: string }) => {
  return <PdfView src={url} />;
};

export default PdfViewer;
