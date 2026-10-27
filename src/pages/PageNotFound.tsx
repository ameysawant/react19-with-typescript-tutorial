import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";

const PageNotFound = () => {
  //   const navigate = useNavigate();

  //   const handleGoBack = () => {
  //     navigate("/");
  //   };
  const [count, setCount] = useState<number>(3);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 1) {
          clearInterval(timer);
          setRedirect(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h2>Page not found 404</h2>
      {/* <Link to="/">go to home</Link>
      <button onClick={handleGoBack}>go to home</button> */}
      {/* <Navigate to={"/"} /> */}
      {redirect && (
        <Navigate
          to={{
            pathname: "/",
            search: "?category=kishori",
          }}
          state={{
            abc: "mystate",
          }}
          replace
        />
      )}
      redirecting to homepage in {count} seconds
    </>
  );
};

export default PageNotFound;
