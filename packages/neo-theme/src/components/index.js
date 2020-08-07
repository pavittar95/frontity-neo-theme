import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Header from "./header";
import List from "./list";
function Root({ state }) {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <HeadContainer>
        <Header />
      </HeadContainer>
      <Global styles={globalStyles} />
      <Main>
        <Switch>
          {/* <Loading when={data.isFetching} /> */}
          <List when={data.isArchive} />
          {/* <Post when={data.isPostType} /> */}
          {/* <PageError when={data.isError} /> */}
        </Switch>
      </Main>
    </>
  );
}

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: rgb(255 255 255 / 70%);
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1ED760;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(180deg, rgb(0 0 0), rgb(0 0 0));
`;

export default connect(Root);
