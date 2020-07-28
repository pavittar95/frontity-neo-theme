import React from "react";
import { Global, css, connect, styled, Head } from "frontity";

function Link({ href="", children, actions }) {
  return (
    <div>
      <a href={href} onClick={() => actions.router.set(href)}>
        {children}
      </a>
    </div>
  );
}

export default connect(Link);
