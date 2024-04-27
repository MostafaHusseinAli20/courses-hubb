import ElzeroImg from './Imges & Logos/Elzero ts img.jpg';
import ElzeroLogo from '../Course Css/Css Logos With Youtype Chanell/Elzeo Logo.jpg';
import ScripterEfendiImg from './Imges & Logos/Scripter Efendi Img.jpg';
import ScripterEfendiLogo from './Imges & Logos/Scripter Efendi Logo.jpg';
import SimpleArabImg from './Imges & Logos/Simple Arab Code Img.jpg';
import SimpleArabLogo from './Imges & Logos/Simple Arab Code Logo.jpg';
import { Link } from 'react-router-dom';
function CourseTs() {
    return ( 
        <>
            <section className="container my-5 py-4">
            <h1 className="gradiant text-center my-4 mb-5">Learn Type Script</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ'
                                target='_blank '
                                className="card mx-auto border-0 slide-left" style={{
                            width: "18rem"
                        }}>
                            <img src={ElzeroImg} className="card-img-top" alt="Ts Picturee"/>
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
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLAhPJ5tzB6ALRWCae49De5C6aEs04PcCk'
                                    target='_blank '
                                    className="card mx-auto border-0 slide-top" style={{
                                width: "18rem"
                            }}>
                                <img src={ScripterEfendiImg} className="card-img-top" alt="Ts Picturee"/>
                                <div className="card-body d-flex">
                                    <img src={ScripterEfendiLogo} alt="Scripter Efendi" 
                                    style={{
                                        width : '40px',
                                        borderRadius : '50%'
                                    }}/>
                                    <p className="card-text mx-2 mt-2 fw-bold">Scripter Efendi</p>
                                </div>
                            </a> 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLxRKoQzM5m3K3OFcL4zUtpUgq8cMMceNO'
                                        target='_blank '
                                        className="card mx-auto border-0 slide-fwd-right" style={{
                                    width: "18rem"
                                }}>
                                    <img src={SimpleArabImg} className="card-img-top" alt="Ts Picturee"/>
                                    <div className="card-body d-flex">
                                        <img src={SimpleArabLogo} alt="SimpleArabImg" 
                                        style={{
                                            width : '40px',
                                            borderRadius : '50%'
                                        }}/>
                                        <p className="card-text mx-2 mt-2 fw-bold">Simple Arab Code</p>
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

export default CourseTs;