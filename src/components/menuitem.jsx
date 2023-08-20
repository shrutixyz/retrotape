import { useNavigate } from "react-router-dom";
import "../styles/menuitem.css";

const MenuItem = (props) => {
  var navigate = useNavigate();
  return (
    <>
      <div
        className="menucard"
        onClick={() => {
          window.location.href = props.nav;
        }}
      >
        <div className="menucard-icon">
          <img src={props.url} alt="" className="menucard-icon-img" srcset="" />
        </div>
        <div className="menucard-text">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
