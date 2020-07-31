import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Link from "./link";
import List from "./list";
import Page from "./page";
import Loading from "./loading";
import PageError from "./page-error";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      You can edit your package in:
      <pre>packages/neo-theme/src/index.js</pre>
      <p> Current url: {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/page/2">More Posts</Link>
        <Link href="/lorem-ipsum">Lorem ipsum</Link>
      </nav>
      <main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Page when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </main>
    </>
  );
};
export default connect(Root);
