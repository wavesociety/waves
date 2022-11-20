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
  NotFound,
} from "./imports/App/components";
import "./shared/css/style.css";
const App = () => {
  let path = window.location.pathname;
  if (path !== "/") {
    return (
      <>
        <StickySideBar whatsapp="9953115801" />
        <MainNavigation />
        <NotFound />
        <MainFooter />
      </>
    );
  } else {
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
        <MainFooter />
      </>
    );
  }
};

export default App;
