import htmlImg from "./Img Cards/Html.png";
import cssImg from "./Img Cards/Css.png";
import jsImg from "./Img Cards/javascript.jpg";
import tWind from "./Img Cards/images.png";
import rectImg from "./Img Cards/React.png";
import tsImg from "./Img Cards/typescript.svg";
import vuejs from "./Img Cards/vuejs.png";
import angluarImg from "./Img Cards/Anglaur.svg";
import NextJs from "./Img Cards/Nextjs.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="container my-5 text-center">
        <div className="row my-5 align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* Html */}
            <Link
              className="card mx-auto"
              to="/courseHtml"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img src={htmlImg} className="card-img-top" alt="Html Picturee" />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Html Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* Css */}
            <Link
              className="card mx-auto"
              to="/courseCss"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img src={cssImg} className="card-img-top" alt="Css Picturee" />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Css Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* Js */}
            <Link
              to="/courseJs"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img
                src={jsImg}
                className="card-img-top"
                alt="Java Script Picturee"
              />
              <div
                className="card-body"
                style={{
                  width: "20rem",
                  textDecoration: "none",
                }}
              >
                <h5 className="card-text fw-bold mb-3">Java Script Course</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus deleniti, vero dolore doloremque molestiae
                  facilis vitae reiciendis, sit consequatur, eos dicta
                  doloribus!
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* Tailwind */}
            <Link
              to="/courseTiwland"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img
                src={tWind}
                className="card-img-top"
                alt="TaillWind Picturee"
              />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Tiwland Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* React */}
            <Link
              to="/courseReact"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img
                src={rectImg}
                className="card-img-top"
                alt="React Picturee"
              />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">React Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            {/* Ts */}
            <Link
              to="/courseTs"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img
                src={tsImg}
                className="card-img-top"
                alt="TypeScript Picturee"
              />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Type Script Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          {/* VueJs */}
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <Link
              to="/courseVue"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img src={vuejs} className="card-img-top" alt="VueJs Picturee" />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Vuejs Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          {/* AngluarJs */}
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <Link
              to="/courseAngluar"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img
                src={angluarImg}
                className="card-img-top"
                alt="AngluarJs Picturee"
              />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Angular Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
          {/* NextJs */}
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <Link
              to="/courseNext"
              className="card mx-auto"
              style={{
                width: "20rem",
                textDecoration: "none",
              }}
            >
              <img
                src={NextJs}
                className="card-img-top"
                alt="NextJs Picturee"
              />
              <div className="card-body">
                <h5 className="card-text fw-bold mb-3">Nextjs Course</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam ex cupiditate quibusdam?
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
