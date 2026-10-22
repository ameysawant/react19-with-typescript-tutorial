// import ConditionalRendering from "./components/ConditionalRendering";
// import Events from "./components/Events";
// import ControlledInputs from "./components/forms/ControlledInputs";
// import UncontrolledForm from "./components/forms/UnControlledInputs";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";
// import ShortCircuit from "./components/ShortCircuit";
// import CleanupFunction from "./hooks/CleanupFunction";
// import UseEffectBasics from "./hooks/UseEffectBasics";
// import UseStateBasics from "./hooks/UseStateBasics";
// import UseStateExamples from "./hooks/UseStateExamples";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />

      {/* <Events /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateExamples /> */}
      {/* <UseEffectBasics /> */}
      {/* <CleanupFunction /> */}
      {/* <ConditionalRendering /> */}
      {/* <ShortCircuit /> */}
      {/* <ControlledInputs /> */}
      {/* <UncontrolledForm /> */}
    </>
  );
};

export default App;
