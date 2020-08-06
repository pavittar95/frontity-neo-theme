import React from "react";
import { connect, styled, decode } from "frontity";
import ListItem from "./list-item";
// import Pagination from "./pagination";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <Container> 
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <ListItem key={item.id} item={item} />;
      })}
    </Container>
  );
}

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;
export default connect(List);
