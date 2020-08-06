import React from "react";
import { connect, styled, decode } from "frontity";
import ListItem from "./list-item";
// import Pagination from "./pagination";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div> 
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <ListItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default connect(List);
