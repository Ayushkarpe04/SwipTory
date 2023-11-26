import "../css/PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='MainPNF'>
      <h1 className='pnf_h1'>404 !</h1>
      <p className='pnf_p'>Look like you`re lost</p>
      <p className='pnf_p'>the page you are looking for not avaible!</p>

      <Link to={`/`}>
        <button className='pnf_btn'>Go to Home</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
