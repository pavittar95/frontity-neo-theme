import React from "react";
import { connect } from "frontity";
import Link from "../link";
function ListItem({ state, item }) {
  const date = new Date(item.date);
  console.log("date---------", date);

  return (
    <article>
      <div className="d-flex">
        hello
        <span>{date.toDateString()}</span>
      </div>
      <Link link={item.link}>
        <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      {item.excerpt && (
        <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
      <Link link={item.link}>READ</Link>
    </article>
  );
}

export default connect(ListItem);
