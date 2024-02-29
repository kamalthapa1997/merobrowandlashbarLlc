import "./Treatments.css";

import Treatmentnavlists from "../Treatmentnavlists/Treatmentnavlists";
import { useState } from "react";

export const Treatments = () => {
  const [treatmentType, setTreatmentType] = useState({});

  return (
    <div className="treatments">
      <div className="treatments__paragraph">
        <h2 className="treatments__heading">
          Book <br /> Online /{" "}
        </h2>
        <p className="treatments__texts">
          Welcome to our hassle-free online booking section! We've simplified
          the process with three distinct options for your convenience. Click
          "Lash" to explore our lash extension services, "Eyebrow" for a list of
          eyebrow treatments, and "Other" for a peek at additional services.
          Streamlined and user-friendly, making appointments has never been this
          easy!
        </p>
      </div>

      <Treatmentnavlists setTreatmentType={setTreatmentType} />

      <div className="treatments__sublists">
        {treatmentType.detail &&
          treatmentType.detail.map((items, index) => (
            <div key={index} className="treatments__item">
              <img
                src={items.wallpaper}
                className="treatments__img"
                alt={items.title}
              />
              <div className="treatments__details">
                <p className="treatments__title">{items.title} </p>

                {items.details.map((amount, amountIndex) => (
                  <div key={amountIndex}>
                    {amount.time && (
                      <p className="treatments__text">Time: {amount.time}</p>
                    )}
                    {amount.money && (
                      <p className="treatments__text">Cost: {amount.money}</p>
                    )}
                  </div>
                ))}

                <button type="button" className="treatment__submit">
                  BOOT IT
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
