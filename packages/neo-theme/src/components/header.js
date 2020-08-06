import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  color: #6eef8d;
  text-transform: uppercase;
`;

const Description = styled.h4`
  margin: 0;
  text-transform: uppercase;
  color: rgb(255 255 255 / 70%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
