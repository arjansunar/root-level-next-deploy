import styled, { css } from "styled-components";
import { defaultStyles } from "../../defaults/defaults";
import { NavButton } from "../Navbar/NavbarElements";

//getting blog styles
export const blogCardStyles = { ...defaultStyles.blogStyles.card };
export const flexStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardWrapper = styled.div`
  font-family: ${blogCardStyles.fontFamily};
  max-width: 380px;
  height: fit-content;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
  ${({ isHovered }) =>
    isHovered && `border: 2px solid ${defaultStyles.brandColor}`}
`;
export const ImagHoverStyles = css`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2c3e7ba6;
    z-index: 1;
  }
`;
export const ImageWrapper = styled.div`
  object-fit: cover;
  overflow: hidden;
  position: relative;
  height: min-content;
  & img {
    width: 100%;
  }
  ${({ isHovered }) => isHovered && ImagHoverStyles}
`;
export const TextHoverStyle = css`
  position: relative;
  top: -4rem;
  background: #fff;
  z-index: 2;
`;
export const TextWrapper = styled.div`
  padding: 1.2rem;
  height: 100%;
  min-height: 266px;
  ${({ isHovered }) => isHovered && TextHoverStyle}
`;
export const SubInfoWrapper = styled.div`
  ${flexStyles}
  justify-content: space-between;
  width: 100%;
  font-size: ${blogCardStyles.subInfo.fontSize};
  color: ${blogCardStyles.subInfo.color};
  line-height: ${blogCardStyles.subInfo.lineHeight};
  font-weight: ${blogCardStyles.subInfo.fontWeight};
`;
export const Date = styled.p`
  flex-grow: 1;
  align-self: flex-start;
`;
export const sharedInfoStyles = css`
  ${flexStyles}
  & span {
    ${flexStyles}
    margin-right:5px;

    & img {
      width: 100%;
    }
  }
`;
export const Likes = styled.p`
  ${sharedInfoStyles}
`;
export const Comments = styled.p`
  ${sharedInfoStyles}
  margin-left: 16px;
`;

const clipTextStyles = (lines, lineHeight) => css`
  --max-lines: ${lines};
  max-height: calc(${lineHeight} * var(--max-lines));
  overflow: hidden;
  position: relative;

  &::before {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1.5rem;
    background: white;
  }
`;
export const Title = styled.h3`
  margin-top: 1.2rem;
  font-size: ${blogCardStyles.title.fontSize};
  color: ${blogCardStyles.title.color};
  font-weight: ${blogCardStyles.title.fontWeight};
  line-height: ${blogCardStyles.title.lineHeight};
  padding-right: 1rem;
  ${clipTextStyles(2, blogCardStyles.title.lineHeight)}
`;
export const Category = styled.p`
  margin-top: 1.2rem;
  font-size: ${blogCardStyles.category.fontSize};
  color: ${blogCardStyles.category.color};
  font-weight: ${blogCardStyles.category.fontWeight};
  line-height: ${blogCardStyles.category.lineHeight};

  & span {
    margin-right: 12px;
  }
`;

export const Excerpt = styled.p`
  font-size: ${blogCardStyles.excerpt.fontSize};
  color: ${blogCardStyles.excerpt.color};
  font-weight: ${blogCardStyles.excerpt.fontWeight};
  line-height: ${blogCardStyles.excerpt.lineHeight};
  margin-top: 1rem;
  text-align: left;
  padding-right: 0.6rem;
  ${clipTextStyles(5, blogCardStyles.excerpt.lineHeight)}
`;

export const ReadMoreButton = styled(NavButton)`
  text-transform: none;
  font-size: ${blogCardStyles.excerpt.fontSize};
  color: ${defaultStyles.brandColor};
  font-weight: ${blogCardStyles.excerpt.fontWeight};
  line-height: ${blogCardStyles.excerpt.lineHeight};
  border: none;
  padding: 0;
  margin-top: 1.5rem;
  position: absolute;
  /* ${flexStyles} */
  & :hover {
    background: inherit;
    color: ${defaultStyles.brandColor};
  }

  @media screen {
    display: flex;
    align-items: center;
  }
`;
