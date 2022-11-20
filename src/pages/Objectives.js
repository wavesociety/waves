import React from "react";
import { MainSection } from "../imports/App/components";
import ListPoints from "../shared/components/UIElements/ListPoints";
import objectives from "../imports/data/objecitves.json";

const Objectives = () => {
  return (
    <MainSection heading="Objective">
      <div className="feature-grids row text-center">
        <ListPoints data={objectives} />
      </div>
    </MainSection>
  );
};

export default Objectives;
