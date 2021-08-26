/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import styled from "styled-components";

function PartnersCard({ path }) {
  return (
    <ImgWrapper>
      {/* <Image height="45px" width="120px" alt="our partners" src={path} /> */}
      <img src={path} alt="our partners" />
    </ImgWrapper>
  );
}

export default PartnersCard;

const ImgWrapper = styled.div`
  max-width: 230px;
  border: 1px solid #e6e6e6;
  padding: 0 1rem;
  height: 150px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  @media (max-width: 550px) {
    padding: 2rem 1.825rem;
  }
`;
