import "./Main.css";
// import MERO from "../../images/MERO.webp";
import profilelogo from "../../images/logo.png";
export const Main = () => {
  return (
    <div className="main">
      {/* <img className="main__bgimg" src={MERO} alt="Description of the image" /> */}
      <img className="main__profile-logo" src={profilelogo} alt="profile" />
    </div>
  );
};
