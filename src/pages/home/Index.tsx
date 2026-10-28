import { useLocation } from "react-router";
import HeroSlider from "./HeroSlider";
import NewsLetter from "./NewsLetter";
import Welcome from "./Welcome";

const Index = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <HeroSlider />
      <Welcome />
      <NewsLetter />
    </>
  );
};

export default Index;
