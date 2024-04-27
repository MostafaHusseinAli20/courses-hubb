import freeCodeCampLogo from '../Course Twind/Courses And Youtype Chanells/Free Code Camp Logo.jpg';
import freeCodeCampImg from './imgAngluar/freeCodeCampContent.webp';
import angluarArmyLogo from './imgAngluar/Angluar Army.jpg';
import angluarArmyImg from './imgAngluar/angluarContent.jpg';
import procademyLogo from './imgAngluar/procademyLogo.jpg';
import procademyContent from './imgAngluar/procademyContent.jpg';
import { Link } from 'react-router-dom';
function CourseAngluar() {
    return ( 
        <>
            <section className="container my-5 py-4">
            <h1 className="gradiant text-center my-4 mb-5">Learn Angular Js</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/watch?v=3qBXWUpoPHo'
                                target='_blank '
                                className="card mx-auto border-0 slide-left" style={{
                            width: "18rem"
                        }}>
                            <img src={freeCodeCampImg} className="card-img-top" alt="angular Picturee"/>
                            <div className="card-body d-flex">
                                <img src={freeCodeCampLogo} alt="freeCodeCamp" 
                                style={{
                                    width : '40px',
                                    borderRadius : '50%'
                                }}/>
                                <p className="card-text mx-2 mt-2 fw-bold">freeCodeCamp</p>
                            </div>
                        </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PL1ano0qwNuBwA90YwA-5d8g2wbOYHkl5h'
                                target='_blank '
                                className="card mx-auto border-0 slide-top" style={{
                            width: "18rem"
                        }}>
                            <img src={angluarArmyImg} className="card-img-top" alt="angular Picturee"/>
                            <div className="card-body d-flex">
                                <img src={angluarArmyLogo} alt="" 
                                style={{
                                    width : '40px',
                                    borderRadius : '50%'
                                }}/>
                                <p className="card-text mx-2 mt-2 fw-bold">Angular Army</p>
                            </div>
                        </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PL1BztTYDF-QNlGo5-g65Xj1mINHYk_FM9'
                                target='_blank '
                                className="card mx-auto border-0 slide-fwd-right" style={{
                            width: "18rem"
                        }}>
                            <img src={procademyContent} className="card-img-top" alt="angular Picturee"/>
                            <div className="card-body d-flex">
                                <img src={procademyLogo} alt="" 
                                style={{
                                    width : '40px',
                                    borderRadius : '50%'
                                }}/>
                                <p className="card-text mx-2 mt-2 fw-bold">procademy</p>
                            </div>
                        </a>
                </div>
                <div className="text-center my-5 mx-auto btn-return">
                <Link to="/" type="button" className="btn btn-lg btn-grdiant fw-bold">Return To Home Page</Link>
                </div>
            </div>
            </section>
        </>
     );
}

export default CourseAngluar;