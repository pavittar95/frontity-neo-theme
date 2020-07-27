import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/neo-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "neo-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
};
