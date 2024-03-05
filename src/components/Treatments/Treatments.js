import "./Treatments.css";
import Transition from "../Hooks/Transition";

import Treatmentnavlists from "../Treatmentnavlists/Treatmentnavlists";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const commonAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.3 },
  },
  exit: { opacity: 0, y: -20 },
};

const Treatments = () => {
  const [treatmentType, setTreatmentType] = useState({});

  return (
    <Transition>
      <motion.div className="treatments">
        <div className="treatments__paragraph">
          <motion.h2 {...commonAnimation} className="treatments__heading">
            Book <br /> Online /{" "}
          </motion.h2>
          <motion.p {...commonAnimation} className="treatments__texts">
            Welcome to our hassle-free online booking section! We've simplified
            the process with three distinct options for your convenience. Click
            "Lash" to explore our lash extension services, "Eyebrow" for a list
            of eyebrow treatments, and "Other" for a peek at additional
            services. Streamlined and user-friendly, making appointments has
            never been this easy!
          </motion.p>
        </div>

        <Treatmentnavlists setTreatmentType={setTreatmentType} />

        <div className="treatments__sublists">
          {treatmentType.detail &&
            treatmentType.detail.map((items, index) => (
              <motion.div
                key={`${items.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                className="treatments__item"
              >
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
              </motion.div>
            ))}
        </div>
      </motion.div>
    </Transition>
  );
};

export default Treatments;
