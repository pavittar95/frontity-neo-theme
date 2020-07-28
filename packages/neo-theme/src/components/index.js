import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Link from './link';
const Root = ({ state }) => {
  console.log("state----------", state);

  return (
    <>
      You can edit your package in:
      <pre>packages/neo-theme/src/index.js</pre>
      <p> Current url:  {state.router.link}</p>
      <nav>
      <Link href="/">Home</Link>
      <Link href="/page/2">More Posts</Link>
      <Link href="/lorem-ipsum">Lorem ipsum</Link>
      </nav>
    </>
  );
};
export default connect(Root);
