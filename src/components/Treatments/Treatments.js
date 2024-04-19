import "./Treatments.css";
import Transition from "../Hooks/Transition";

import Treatmentnavlists from "../Treatmentnavlists/Treatmentnavlists";
import CurrentAppointmentContext from "../Context/CurrentAppointmentContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Treatments = ({ handleAddService }) => {
  const [treatmentType, setTreatmentType] = useState({});

  const currentAppointment = useContext(CurrentAppointmentContext);

  const setSelectedItem = currentAppointment.setSelectedItem;
  const selectedItem = currentAppointment.selectedItem;

  const handleAppointment = (item) => () => {
    setSelectedItem(item);
  };

  return (
    <div className="treatments">
      <div className="treatments__paragraph">
        <h2 className="treatments__heading">
          <Transition>
            <span>
              Book <br /> Online /{" "}
            </span>
          </Transition>
        </h2>

        <p className="treatments__texts">
          <Transition>
            <span>
              Welcome to our hassle-free online booking section! We&apos;ve
              simplified the process with three distinct options for your
              convenience. Click &quot;Lash&quot; to explore our lash extension
              services, &quot;Eyebrow&quot; for a list of eyebrow treatments,
              and &quot;Other&quot; for a peek at additional services.
              Streamlined and user-friendly, making appointments has never been
              this easy!
            </span>
          </Transition>
        </p>
      </div>

      <Treatmentnavlists
        setTreatmentType={setTreatmentType}
        handleAddService={handleAddService}
      />

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
              className={`treatments__item ${
                selectedItem === items ? "selected" : ""
              }`}
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

                <button
                  onClick={handleAppointment(items)}
                  type="button"
                  className="treatment__submit"
                >
                  <Link className="treatment__submit-link" to="/appointment">
                    BOOK IT
                  </Link>
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};
Treatments.propTypes = {
  handleAddService: PropTypes.func.isRequired,
};
export default Treatments;
