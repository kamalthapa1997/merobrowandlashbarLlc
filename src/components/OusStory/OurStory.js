import Treatmentnavlists from "../Treatmentnavlists/Treatmentnavlists";
import { useState } from "react";
import Transition from "../Hooks/Transition";

const OurStory = () => {
  return (
    <Transition>
      <div className="treatments">
        <div className="treatments__paragraph">
          <h2 className="treatments__heading">
            Our <br /> Story /{" "}
          </h2>
          <p className="treatments__texts">THIS IS OUR STORY</p>
        </div>
        <div>Images</div>
      </div>
    </Transition>
  );
};

export default OurStory;
