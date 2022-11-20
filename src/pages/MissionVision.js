import React from "react";
import { MainSection } from "../imports/App/components";
import MissionVisionInMobile from "../shared/components/Mobile/MissionVisionInMobile";
import ImgText from "../shared/components/UIElements/ImgText";
import TextImg from "../shared/components/UIElements/TextImg";
import { WindowWidth } from "../shared/utils/HelperMethod";
import "./MissionVision.css";
const MissionVision = () => {
  if (WindowWidth() < 991) {
    return (
      <>
        <MainSection heading="Mission & Vision" className="mission-vision-box">
          <MissionVisionInMobile />;
        </MainSection>
      </>
    );
  }
  return (
    <>
      <MainSection heading="Mission & Vision" className="mission-vision-box">
        <div className="container">
          <ImgText
            heading="MISSION"
            text="To create, preserve and promote the Value perception among youth through a educational and training program at various levels in the society which will ultimately result into holistic growth and in future a constructive transformation of the hearts in order to ensure sustainable peace and happiness all over the world."
            url="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg"
          />
          <TextImg
            heading="Vision"
            text="To make the youth thoughtful towards importance of values in our day to day life and at the same time train and educate them  in order to check the imbalance of values in society and to achieve real unity and peace in the world."
            url="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg"
          />
        </div>
      </MainSection>
    </>
  );
};

export default MissionVision;
