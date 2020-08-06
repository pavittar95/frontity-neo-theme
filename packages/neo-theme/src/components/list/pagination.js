import React from "react";
import { connect, styled } from "frontity";

function Pagination() {
  return (
    <Flex>
      <Button>Next</Button>
      <Button>Prev</Button>
    </Flex>
  );
}

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    outline: none;

`;

export default Pagination;