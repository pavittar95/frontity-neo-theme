import Link from "../link";
import { styled } from "frontity";

export const Container = styled.section`
  margin: 0;
  list-style: none;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
  color: #4c9ce6 !important;
  font-weight: 500;
`;

export const Article = styled.article`
  padding-top: 2.5rem;
  padding-bottom: 2rem;
`;

export const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  p {
    margin: 10px 0px;
  }
`;

export const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
  margin: 0;
  font-weight: 500;
  color: gray;
  text-transform: uppercase;
`;
