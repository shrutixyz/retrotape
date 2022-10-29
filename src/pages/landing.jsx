import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    return (
      <>
        <h1>RetroTape</h1>
        <button onClick={()=>{navigate('/create')}}>Get Started</button>
      </>
    );
  };
  
  export default Landing;
  