import indexLogo from "./imgNext/indexAcademyLogo.jpg";
import indexContent from "./imgNext/indexAcademyContent.jpg";
import codevolutionLogo from "./imgNext/codevolutionLogo.jpg";
import codevolutionContent from "./imgNext/codevolutionContent.jpg";
import netNinjaLogo from "./imgNext/netNinja Logo.jpg";
import netNinjaContent from "./imgNext/netNinja Content.jpg";

import { Link } from "react-router-dom";
function CourseNext() {
  return (
    <>
      <section className="container my-5 py-4">
        <h1 className="gradiant text-center my-4 mb-5">Learn Nextjs</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
            <a
              href="https://www.youtube.com/playlist?list=PLDQ11FgmbqQOP_nLX_oIGFucnejuPJcI6"
              target="_blank "
              className="card mx-auto border-0 slide-left"
              style={{
                width: "18rem",
              }}
            >
              <img
                src={indexContent}
                className="card-img-top"
                alt="Next Picturee"
              />
              <div className="card-body d-flex">
                <img
                  src={indexLogo}
                  alt="Index Academy"
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                  }}
                />
                <p className="card-text mx-2 mt-2 fw-bold">Index Academy</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
            <a
              href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
              target="_blank "
              className="card mx-auto border-0 slide-top"
              style={{
                width: "18rem",
              }}
            >
              <img
                src={codevolutionContent}
                className="card-img-top"
                alt="Next Picturee"
              />
              <div className="card-body d-flex">
                <img
                  src={codevolutionLogo}
                  alt="codevolution"
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                  }}
                />
                <p className="card-text mx-2 mt-2 fw-bold">codevolution</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
            <a
              href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT"
              target="_blank "
              className="card mx-auto border-0 slide-fwd-right"
              style={{
                width: "18rem",
              }}
            >
              <img
                src={netNinjaContent}
                className="card-img-top"
                alt="Next Picturee"
              />
              <div className="card-body d-flex">
                <img
                  src={netNinjaLogo}
                  alt="NetNinja"
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                  }}
                />
                <p className="card-text mx-2 mt-2 fw-bold">Net Ninja</p>
              </div>
            </a>
          </div>
        </div>
        <div className="text-center my-5 mx-auto btn-return">
          <Link to="/" type="button" className="btn btn-lg btn-grdiant fw-bold">
            Return To Home Page
          </Link>
        </div>
      </section>
    </>
  );
}

export default CourseNext;
