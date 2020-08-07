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
  padding: 10px 0px 40px 0px;
  color: white;
  border-bottom: 1px solid;
  margin-bottom: 20px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #1ed760;
  font-weight: bold;
`;
const PostDate = styled.i`
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  padding: 6px;
  background-color: #1ed760;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: 0px;
  font-size: 12px;
  &:visited {
    color: white;
  }
  &:hover {
    color: black;
  }
`;

export default connect(ListItem);
