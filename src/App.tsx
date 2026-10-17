import ConditionalRendering from "./components/ConditionalRendering";
import Events from "./components/Events";
import ShortCircuit from "./components/ShortCircuit";
import CleanupFunction from "./hooks/CleanupFunction";
import UseEffectBasics from "./hooks/UseEffectBasics";
import UseStateBasics from "./hooks/UseStateBasics";
import UseStateExamples from "./hooks/UseStateExamples";

const App = () => {
  return (
    <>
      {/* <Events /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateExamples /> */}
      {/* <UseEffectBasics /> */}
      {/* <CleanupFunction /> */}
      <ConditionalRendering />
      {/* <ShortCircuit /> */}
    </>
  );
};

export default App;
