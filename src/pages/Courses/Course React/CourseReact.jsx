import FreeCodeLogo from '../Course Twind/Courses And Youtype Chanells/Free Code Camp Logo.jpg'
import FreeCodeImg from './Imges & Logos/freecodecamp content.webp';
import NagebDarwishLogo from './Imges & Logos/NagebDarwish Logo.jpg';
import NagebDarwishImg from './Imges & Logos/NagebDarwish Content.jpg';
import courses4ArabLogo from './Imges & Logos/Courses 4 arab logo.jpg';
import courses4ArabImg from './Imges & Logos/Courses 4 arab Content.jpg';
import UniqueCoderzLogo from './Imges & Logos/Unique Coderz Academy logo.jpg';
import UniqueCoderzImg from './Imges & Logos/Unique Coderz Academy img.jpg'
import { Link } from 'react-router-dom';
function CourseReact() {
    return ( 
        <>
            <section className="container my-5 py-4">
            <h1 className="gradiant text-center my-4 mb-5">Learn React Js</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/watch?v=bMknfKXIFA8'
                            target='_blank '
                             className="card mx-auto border-0 slide-left" style={{
                        width: "18rem"
                    }}>
                        <img src={FreeCodeImg} className="card-img-top" alt="React Picturee"/>
                        <div className="card-body d-flex">
                            <img src={FreeCodeLogo} alt="Free Code Camp" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">freeCodeCamp</p>
                        </div>
                    </a>    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB'
                            target='_blank '
                             className="card mx-auto border-0 slide-top" style={{
                        width: "18rem"
                    }}>
                        <img src={NagebDarwishImg} className="card-img-top" alt="React Picturee"/>
                        <div className="card-body d-flex">
                            <img src={NagebDarwishLogo} alt="Nageeb Darwish" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Nageeb Darwish</p>
                        </div>
                    </a> 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PLeWmXrh00478cne-60B6MeU85l42cry2v'
                            target='_blank '
                             className="card mx-auto border-0 slide-fwd-right" style={{
                        width: "18rem"
                    }}>
                        <img src={courses4ArabImg} className="card-img-top" alt="React Picturee"/>
                        <div className="card-body d-flex">
                            <img src={courses4ArabLogo} alt="Courses 4 Arab" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Courses 4 Arab</p>
                        </div>
                    </a> 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW'
                            target='_blank '
                             className="card mx-auto border-0 slide-bottom" style={{
                        width: "18rem"
                    }}>
                        <img src={UniqueCoderzImg} className="card-img-top" alt="React Picturee"/>
                        <div className="card-body d-flex">
                            <img src={UniqueCoderzLogo} alt="Unique Coderz Academy" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Unique Coderz Academy</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="text-center my-5 mx-auto btn-return">
                <Link to="/" type="button" className="btn btn-lg btn-grdiant fw-bold">Return To Home Page</Link>
                </div>
            </section>
        </>
     );
}

export default CourseReact;