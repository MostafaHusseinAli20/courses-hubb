import FreeCodeLogo from './Courses And Youtype Chanells/Free Code Camp Logo.jpg';
import FreeCodeImg from './Courses And Youtype Chanells/learn-tiwland-1.webp';
import KorsatXElbrmgaImg from './Courses And Youtype Chanells/learn-tiwland-2.webp';
import KorsatXElbrmgaLogo from './Courses And Youtype Chanells/korsat logo.jpg';
import AgImg from './Courses And Youtype Chanells/Ag Content.jpg';
import AgLogo from './Courses And Youtype Chanells/Ag Logo.jpg'
import { Link } from 'react-router-dom';
function CourseTwind() {
    return ( 
        <>
            <section className="container my-5 py-4">
            <h1 className="gradiant text-center my-4 mb-5">Learn Tailwind Css</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/watch?v=ft30zcMlFao'
                            target='_blank '
                             className="card mx-auto border-0 slide-left" style={{
                        width: "18rem"
                    }}>
                        <img src={FreeCodeImg} className="card-img-top" alt="Tailwind Picturee"/>
                        <div className="card-body d-flex">
                            <img src={FreeCodeLogo} alt="Free Code Camp " 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">freeCodeCamp</p>
                        </div>
                    </a>    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/watch?v=jSbBYEfCcgo'
                            target='_blank '
                             className="card mx-auto border-0 slide-top" style={{
                        width: "18rem"
                    }}>
                        <img src={KorsatXElbrmgaImg} className="card-img-top" alt="Tailwind Picturee"/>
                        <div className="card-body d-flex">
                            <img src={KorsatXElbrmgaLogo} alt="Korsat X Elbrmga" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Korsat X Parmaga</p>
                        </div>
                    </a>    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PLnD96kXp-_pMR9cBUmvsz_kIIt9bv2UIP'
                            target='_blank '
                             className="card mx-auto border-0 slide-fwd-right" style={{
                        width: "18rem"
                    }}>
                        <img src={AgImg} className="card-img-top" alt="Tailwind Picturee"/>
                        <div className="card-body d-flex">
                            <img src={AgLogo} alt="Ag Coding" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Ag Coding</p>
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

export default CourseTwind;