import ElzeroImg from './Imges And Logos chanells/Elzero Content.jpg'
import ElzeroLogo from '../Course Css/Css Logos With Youtype Chanell/Elzeo Logo.jpg'
import AbderhmanGamelImg from './Imges And Logos chanells/Abderhman Gamel Content.jpg'
import AbdelrhamanGamelLogo from '../Course Css/Css Logos With Youtype Chanell/Abdelrahman gamel logo.jpg';
import RawokanImg from './Imges And Logos chanells/Rwokan Ali Content.jpg'
import RawokanLogo from '../Course Css/Css Logos With Youtype Chanell/Rakowan Ali Logo.jpg'
import KoderImg from './Imges And Logos chanells/Koder Content.jpg'
import KoderLogo from '../Course Css/Css Logos With Youtype Chanell/koder logo.jpg'
import TarmezAccademyImg from './Imges And Logos chanells/Tarmez Accademy.jpg';
import TarmezAccademyLogo from '../Course Css/Css Logos With Youtype Chanell/Tarmez Accademy Logo.jpg'
import { Link } from 'react-router-dom';
function CourseJs() {
    return ( 
        <>
            <section className="container my-5 py-4">
              <h1 className="gradiant text-center my-4 mb-5">Learn Java Script</h1>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 my-4 mx-auto">
                <a href='https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&si=bkvLR8ra7d7XaxPf'
                            target='_blank '
                             className="card mx-auto border-0 slide-left" style={{
                        width: "18rem"
                    }}>
                        <img src={ElzeroImg} className="card-img-top" alt="Js Picturee"/>
                        <div className="card-body d-flex">
                            <img src={ElzeroLogo} alt="Elzero" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Elzero Web School</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-4 mx-auto">
                <a href='https://www.youtube.com/playlist?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE'
                            target='_blank '
                             className="card mx-auto border-0 slide-top" style={{
                        width: "18rem"
                    }}>
                        <img src={AbderhmanGamelImg} className="card-img-top" alt="Js Picturee"/>
                        <div className="card-body d-flex">
                            <img src={AbdelrhamanGamelLogo} alt="AbderhmanGamel" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Abd-Elrahman Gamel</p>
                            
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-4 mx-auto">
                <a href='https://www.youtube.com/playlist?list=PLSiLeKadTQ7lSXUk3-f8NnrpYRLGKwAJ2'
                            target='_blank '
                             className="card mx-auto border-0 slide-fwd-right" style={{
                        width: "18rem"
                    }}>
                        <img src={RawokanImg} className="card-img-top" alt="Js Picturee"/>
                        <div className="card-body d-flex">
                            <img src={RawokanLogo} alt="Rawokan" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Rakwan Ali</p>
                            
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-4 mx-auto">
                <a href='https://www.youtube.com/playlist?list=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D'
                            target='_blank '
                             className="card mx-auto border-0 slide-bottom" style={{
                        width: "18rem"
                    }}>
                        <img src={KoderImg} className="card-img-top" alt="Js Picturee"/>
                        <div className="card-body d-flex">
                            <img src={KoderLogo} alt="Koder" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">كودر شيار</p>
                            
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-4 mx-auto">
                    <a href='https://www.youtube.com/playlist?list=PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0'
                                target='_blank '
                                className="card mx-auto border-0 slide-tl" style={{
                            width: "18rem"
                        }}>
                            <img src={TarmezAccademyImg} className="card-img-top" alt="Js Picturee"/>
                            <div className="card-body d-flex">
                                <img src={TarmezAccademyLogo} alt="Tarmez Accademy" 
                                style={{
                                    width : '40px',
                                    borderRadius : '50%'
                                }}/>
                                <p className="card-text mx-2 mt-2 fw-bold">اكاديمية ترميز</p>
                                
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

export default CourseJs;