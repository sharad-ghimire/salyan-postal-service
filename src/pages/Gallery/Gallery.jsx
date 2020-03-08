import React from "react";
import styled from "styled-components";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";

import EachPageHeading from "../../components/Common/EachPageHeading";

const Gallery = () => {
  return (
    <GalleryDiv>
      <EachPageHeading title="Gallery" />
      <div className="gallery-cards"></div>
    </GalleryDiv>
  );
};

export default Gallery;

const GalleryDiv = styled.div`
  padding: 10px;
`;
