import ElzeroContent from './imgVue/hqdefault.jpg'
import ElzeroLogo from '../Course Css/Css Logos With Youtype Chanell/Elzeo Logo.jpg'
import WisdomContent from './imgVue/vuejsContact.jpg'
import WisdomLogo from './imgVue/vueJsLogo.jpg'
import freeCodeCampContent from './freecodecampContent.webp'
import freeCodeCampLogo from '../Course Twind/Courses And Youtype Chanells/Free Code Camp Logo.jpg'
import { Link } from 'react-router-dom'
function VueJs() {
    return ( 
        <>
            <section className="my-5 py-4 container">
            <h1 className="gradiant text-center my-4 mb-5">Learn Vue Js</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PLDoPjvoNmBAxr5AqK3Yz4DWYKVSmIFziw'
                            target='_blank '
                             className="card mx-auto border-0 slide-left" style={{
                        width: "18rem"
                    }}>
                        <img src={ElzeroContent} className="card-img-top" alt="Vuejs Picturee"/>
                        <div className="card-body d-flex">
                            <img src={ElzeroLogo} alt="Elzero Web School" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Elzero Web School</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/playlist?list=PLzjSlWqF2aTdehPN-zFc1TKcH8eNVn1JV'
                            target='_blank '
                             className="card mx-auto border-0 slide-top" style={{
                        width: "18rem"
                    }}>
                        <img src={WisdomContent} className="card-img-top" alt="Vuejs Picturee"/>
                        <div className="card-body d-flex">
                            <img src={WisdomLogo} alt="Vuejs Wisdom" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">Vuejs Wisdom</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-4">
                <a href='https://www.youtube.com/watch?v=FXpIoQ_rT_c'
                            target='_blank '
                             className="card mx-auto border-0 slide-fwd-right" style={{
                        width: "18rem"
                    }}>
                        <img src={freeCodeCampContent} className="card-img-top" alt="Vuejs Picturee"/>
                        <div className="card-body d-flex">
                            <img src={freeCodeCampLogo} alt="Free Code Camp" 
                            style={{
                                width : '40px',
                                borderRadius : '50%'
                            }}/>
                            <p className="card-text mx-2 mt-2 fw-bold">freeCodeCamp</p>
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

export default VueJs;