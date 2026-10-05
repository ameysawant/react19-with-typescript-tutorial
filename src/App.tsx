import React from "react";

import Card from "./components/Card";

const App = () => {
  // Nested Components
  // how to send and receive props
  // props destructuring
  // children props
  // list rendering
  // key prop
  // spread operator
  // import export
  // how to use javascript in jsx

  const products = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/237/200/200",
      title: "product 1",
      description: "product 1 description",
      price: 100,
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/1025/200/200",
      title: "product 2",
      description: "product 2 description",
      price: 200,
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/id/1074/200/200",
      title: "product 3",
      description: "product 3 description",
      price: 300,
    },
  ];

  return (
    <>
      <h2>Component Props and Types</h2>

      {products.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Card {...item} />
          </React.Fragment>
        );
      })}

      {/* <Card
        imageUrl={"https://picsum.photos/id/237/200/200"}
        title={"dog 1"}
        description={"dog 1 description"}
        price={100}
      />
      <Card
        imageUrl={"https://picsum.photos/id/1025/200/200"}
        title={"dog 2"}
        description={"dog 2 description"}
        price={200}
      />
      <Card
        imageUrl={"https://picsum.photos/id/1074/200/200"}
        title={"dog 3"}
        description={"dog 3 description"}
        price={300}
      /> */}
    </>
  );
};

export default App;
