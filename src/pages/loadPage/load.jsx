import "./load.css";
import { useNavigate } from "react-router-dom";
function LoadPage() {
  const Nav = useNavigate();
  const navigate = () => {
    Nav("/");
  };
  return (
    <>
      <div class="loader" style={{ marginTop : "7rem" }}>
        <div class="outer"></div>
        <div class="middle"></div>
        <div class="inner"></div>
      </div>
      <div className="text-center mx-auto btn-return">
        <button onClick={navigate} style={{marginTop : "4rem"}}
        type="button" className="btn btn-lg btn-grdiant fw-bold">
          Go To Home Page
        </button>
      </div>
    </>
  );
}

export default LoadPage;
