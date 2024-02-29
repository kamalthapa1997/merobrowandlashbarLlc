import classic from "../../images/Ttreatments/classic.jpeg";
import hybrid from "../../images/Ttreatments/hybrid.jpeg";
import volume from "../../images/Ttreatments/volume.webp";
import fullface from "../../images/Ttreatments/fullface.jpeg";
import lamination from "../../images/Ttreatments/lamination.jpg";
import lipthreading from "../../images/Ttreatments/lipthreading.jpeg";
import threading from "../../images/Ttreatments/threading.jpg";
import tinting from "../../images/Ttreatments/tinting.jpg";
import "./Treatmentnavlists.css";

import { useEffect, useCallback } from "react";
const Treatmentnavlists = ({ setTreatmentType }) => {
  // const [treatmentType, setTreatmentType] = useState({});

  const treatmentdatas = [
    {
      type: "Eyelashes",
      detail: [
        {
          title: "Classic Eyelash Extention",
          wallpaper: classic,
          details: [{ time: "1 hour" }, { money: "$100" }],
        },
        {
          title: "Hybrid Eyelash Extention",
          wallpaper: hybrid,
          details: [{ time: "1 hour" }, { money: "$120" }],
        },
        {
          title: "Volume Eyelash Extention",
          wallpaper: volume,
          details: [{ time: "1 hour" }, { money: "$130" }],
        },
      ],
    },
    {
      type: "Eyebrows",
      detail: [
        {
          title: "Eyebrow ",
          wallpaper: threading,
          details: [{ time: "15 minutes" }, { money: "$12" }],
        },
        {
          title: "Full Face",
          wallpaper: fullface,
          details: [{ time: "15 minutes" }, { money: "$15" }],
        },
        {
          title: "Lip",
          wallpaper: lipthreading,
          details: [{ time: "15 minutes" }, { money: "$15" }],
        },
      ],
    },
    {
      type: "Combo",
      detail: [
        {
          title: "Threading + Lamination",
          wallpaper: lamination,
          details: [{ time: "35 minutes" }, { money: "$85" }],
        },
        {
          title: "Threading + Lamination + Tint",
          wallpaper: tinting,
          details: [{ time: "45 minutes" }, { money: "$105" }],
        },
      ],
    },
  ];

  const handleTypeClick = (clickedType) => {
    const matchingTreatment = treatmentdatas.find(
      (treatment) => treatment.type === clickedType
    );

    if (matchingTreatment) {
      localStorage.setItem(
        "selectedTreatmentType",
        JSON.stringify(matchingTreatment)
      );

      setTreatmentType(matchingTreatment);
    } else {
      setTreatmentType("Eyelashes");
      console.log(`No matching treatment found for ${clickedType}`);
    }
  };
  const handleSetTreatmentType = useCallback(
    (type) => {
      setTreatmentType(type);
    },
    [setTreatmentType]
  );

  useEffect(() => {
    const storedTreatmentType = localStorage.getItem("selectedTreatmentType");

    if (storedTreatmentType) {
      handleSetTreatmentType(JSON.parse(storedTreatmentType));
    }
  }, [handleSetTreatmentType]);

  return (
    <div className="treatmentnavlists__lists">
      <button
        className="treatmentnavlists__btn"
        tabIndex={0}
        onClick={() => handleTypeClick("Eyelashes")}
      >
        Eyelashs
      </button>
      <button
        className="treatmentnavlists__btn"
        tabIndex={0}
        onClick={() => handleTypeClick("Eyebrows")}
      >
        Eyebrows
      </button>
      <button
        className="treatmentnavlists__btn"
        tabIndex={0}
        onClick={() => handleTypeClick("Combo")}
      >
        Combo
      </button>
      <button
        className="treatmentnavlists__btn"
        tabIndex={0}
        onClick={() => handleTypeClick("Others")}
      >
        Others
      </button>
    </div>
  );
};
export default Treatmentnavlists;
