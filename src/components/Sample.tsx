import { createElement } from "react";

// const Sample = () => {
//   return <div><h2 id>This is sample text</h2></div>;
// };

const Sample = () => {
  return createElement(
    "div",
    { id: "one" },
    createElement("h2", { id: "abc" }, "This is sample text"),
  );
};

export default Sample;
