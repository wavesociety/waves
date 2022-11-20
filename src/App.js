import { React } from "./imports/App/packages";
import {
  MainCarousel,
  MainFooter,
  MainNavigation,
  AboutUs,
  MainCarouselSecond,
  MissionVision,
  Objectives,
  Testimonials,
  StickySideBar,
  Cards,
} from "./imports/App/components";
import "./shared/css/style.css";
const App = () => {
  return (
    <>
      <StickySideBar whatsapp="9953115801" />
      <MainNavigation />
      <MainCarousel />
      <AboutUs />
      <MainCarouselSecond />
      <Objectives />
      <MissionVision />
      <Testimonials />
      {/* <Cards /> */}
      <MainFooter />
    </>
  );
};

export default App;
