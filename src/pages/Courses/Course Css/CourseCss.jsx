import ElzeroImg from './Css Logos With Youtype Chanell/Elzero content.jpg';
import ElzeroLogo from './Css Logos With Youtype Chanell/Elzeo Logo.jpg';
import AbdelrahmanGamelImg from './Css Logos With Youtype Chanell/Abdelrahman gamel content.jpg';
import AbdelrahmanGamelLogo from './Css Logos With Youtype Chanell/Abdelrahman gamel logo.jpg';
import RawokanImg from './Css Logos With Youtype Chanell/Rawkon Ali Content.jpg';
import RawokanLogo from './Css Logos With Youtype Chanell/Rakowan Ali Logo.jpg';
import KoderImg from './Css Logos With Youtype Chanell/Koder content.jpg';
import KoderLogo from './Css Logos With Youtype Chanell/koder logo.jpg';
import TarmezImg from './Css Logos With Youtype Chanell/Tarmez Accademy content.jpg';
import TarmezLogo from './Css Logos With Youtype Chanell/Tarmez Accademy Logo.jpg';
import { Link } from 'react-router-dom';
function CourseCss() {
    return ( 
        <>
            <section className="container my-5 py-4">
                <h1 className="gradiant text-center my-4 mb-5">Learn Css</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe&si=7Szs8ti9v0DG6R3V'
                            target='_blank '
                             className="card mx-auto border-0 slide-left" style={{
                        width: "18rem"
                    }}>
                        <img src={ElzeroImg} className="card-img-top" alt="Css Picturee"/>
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
                    <a href='https://www.youtube.com/playlist?list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS'
                            target='_blank '
                             className="card mx-auto border-0 slide-top" style={{
                        width: "18rem"
                    }}>
                        <img src={AbdelrahmanGamelImg} className="card-img-top" alt="Css Picturee"/>
                        <div className="card-body d-flex">
                            <img src={AbdelrahmanGamelLogo} alt="AbdelrahmanGamel" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Abd-Elrahman Gamel</p>
                            
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLSiLeKadTQ7n-Ftg39kC2ss3Uogb_gu5R'
                            target='_blank '
                             className="card mx-auto border-0 slide-fwd-right" style={{
                        width: "18rem"
                    }}>
                        <img src={RawokanImg} className="card-img-top" alt="Css Picturee"/>
                        <div className="card-body d-flex">
                            <img src={RawokanLogo} alt="Rakwan" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Rakwan Ali</p>
                            
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLMTdZ61eBnyoxjc9Prw0uhwgp6YZ2-_sg'
                            target='_blank '
                             className="card mx-auto border-0 slide-bottom" style={{
                        width: "18rem"
                    }}>
                        <img src={KoderImg} className="card-img-top" alt="Css Picturee"/>
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
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                    <a href='https://www.youtube.com/playlist?list=PLYyqC4bNbCIdES52srHE6xTiIgvgMkBWu'
                            target='_blank '
                             className="card mx-auto border-0 slide-tl" style={{
                        width: "18rem"
                    }}>
                        <img src={TarmezImg} className="card-img-top" alt="Css Picturee"/>
                        <div className="card-body d-flex">
                            <img src={TarmezLogo} alt="Tarmez Accademy" 
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

export default CourseCss;