import Image from "next/image";
import styled from "styled-components";

function PartnersCard({ path }) {
  return (
    <ImgWrapper>
      <Image height="45px" width="120px" alt="our partners" src={path} />
    </ImgWrapper>
  );
}

export default PartnersCard;

const ImgWrapper = styled.div`
  max-width: 180px;
  border: 1px solid #e6e6e6;
  padding: 2.875rem 2.125rem;

  @media (max-width: 550px) {
    padding: 2rem 1.825rem;
  }
`;
