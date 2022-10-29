import { useNavigate } from "react-router-dom";
import '../styles/header.css'
import maximise from '../images/maximise.svg'
import minimise from '../images/minimise.svg'
import close from '../images/close.svg'

const Header = () => {
    const navigate = useNavigate();
    return (
      <>

        <div className="header">
           <div className="title">
<p onClick={()=>{navigate('/')}}>Retro Tape</p>
           </div>
           <div className="options" onClick={()=>{navigate('/view?87x5x')}}>
            <img src={minimise} alt="" className="option-icon" srcset="" />
<img src={maximise} alt="" className="option-icon"  srcset="" />
<img src={close} alt=""  className="option-icon" srcset="" />
           </div>
        </div>
      </>
    );
  };
  
  export default Header;
  