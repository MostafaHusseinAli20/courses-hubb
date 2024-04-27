import ElzeroImg from './Html Logos With Youtype Chanell/content Img.jpg';
import ElzeroLogo from './Html Logos With Youtype Chanell/chanell elzero logo.jpg';
import AbdrahmanGamalImg from './Html Logos With Youtype Chanell/Html Abdelrahman Gamal Content.jpg'
import AbdrahmanGamalLogo from './Html Logos With Youtype Chanell/Html Abdelrahman Gamal logo.jpg'
import RawkanImg from './Html Logos With Youtype Chanell/Rawkan Ali Content.jpg';
import RawkanLogo from './Html Logos With Youtype Chanell/Rawkan Ali Logo.jpg';
import KoderImg from './Html Logos With Youtype Chanell/Koder Content.jpg';
import KoderLogo from './Html Logos With Youtype Chanell/Koder Logo.jpg';
import LearnImg from './Html Logos With Youtype Chanell/learn bbsata content.jpg'
import LeranLogo from './Html Logos With Youtype Chanell/learn bbsata logo.jpg';
import { Link } from 'react-router-dom';
import './CourseHrml.css'
function CourseHtml() {
    return ( 
        <>
            <section className="container my-5 py-5">
                <h1 className='gradiant text-center my-4 mb-5'>Learn Html</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                            <a href='https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji'
                            target='_blank '
                             className="card mx-auto border-0 slide-left" style={{
                        width: "18rem"
                    }}>
                        <img src={ElzeroImg} className="card-img-top" alt="Html Picturee"/>
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
                    <a href='https://www.youtube.com/playlist?list=PLknwEmKsW8OvX7kZhsv6I6tT8SKDXDwUc'
                            target='_blank '
                             className="card mx-auto border-0 slide-top" style={{
                        width: "18rem"
                    }}>
                        <img src={AbdrahmanGamalImg} className="card-img-top" alt="Html Picturee"/>
                        <div className="card-body d-flex">
                            <img src={AbdrahmanGamalLogo} alt="AbdrahmanGamal" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Abd-Elrahman Gamal</p>
                            
                        </div>
                    </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                        <a  href='https://www.youtube.com/playlist?list=PLSiLeKadTQ7k-7oJN7JuwBuR-UbuONnST'
                                target='_blank '
                                className="card mx-auto border-0 slide-fwd-right" style={{
                            width: "18rem"
                        }}>
                            <img src={RawkanImg} className="card-img-top" alt="Html Picturee"/>
                            <div className="card-body d-flex">
                                <img src={RawkanLogo} alt="Rawkan" 
                                style={{
                                    width : '40px',
                                    borderRadius : '50%'
                                }}/>
                                <p className="card-text mx-2 mt-2 fw-bold">Rawkan Ali</p>
                                
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                        <a href='https://www.youtube.com/playlist?list=PLMTdZ61eBnyrnapIyOphXAkIcR5DDOGkz'
                                    target='_blank '
                                    className="card mx-auto border-0 slide-bottom" style={{
                                width: "18rem"
                            }}>
                                <img src={KoderImg} className="card-img-top" alt="Html Picturee"/>
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
                        <a href='https://www.youtube.com/playlist?list=PL8DDsWuvM_EXw2zRpz-DbBHSTtgX8NJGZ'
                                        target='_blank '
                                        className="card mx-auto border-0 slide-tl" style={{
                                    width: "18rem"
                                }}>
                                    <img src={LearnImg} className="card-img-top" alt="Html Picturee"/>
                                    <div className="card-body d-flex">
                                        <img src={LeranLogo} alt="Learning" 
                                        style={{
                                            width : '40px',
                                            borderRadius : '50%'
                                        }}/>
                                        <p className="card-text mx-2 mt-2 fw-bold">اتعلم ببساطة</p>
                                        
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

export default CourseHtml;