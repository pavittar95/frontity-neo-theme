import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
function ListItem({ state, item }) {
  const date = new Date(item.date);

  return (
    <Article>
      <PostDate>{date.toDateString()}</PostDate>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      {item.excerpt && (
        <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
      <StyledLink link={item.link}>READ MORE</StyledLink>
    </Article>
  );
}

const Article = styled.article`
  padding: 10px 15px;
  color: white;
  margin-bottom: 20px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #6eef8d;
  font-weight: bold;
`;
const PostDate = styled.i`
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  padding: 6px;
  background-color: white;
  color: black;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: 0px;
  font-size: 12px;
  &:visited{
    color: black;
  }
  &:hover {
    color: #6eef8d;
  }
`;

export default connect(ListItem);
