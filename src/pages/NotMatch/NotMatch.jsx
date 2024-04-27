import NotFoundImg from './NotFoundImg/undraw_not_found_re_bh2e.svg'
function NotMatchPage() {
    return ( 
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 notFound text-light">
                        <h1>Page Not Found Erorr 404!</h1>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5">
                        <img src={NotFoundImg} className='w-75' alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default NotMatchPage;