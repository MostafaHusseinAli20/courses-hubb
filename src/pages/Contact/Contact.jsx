function ContactPage() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return ( 
        <>
            <section className="container my-5 text-center contact">
            <h1 className="gradiant text-center my-4">Contact With Developer 
            This Website</h1>
            <div className="icon text-center text-light">
                <i className="fa-solid fa-arrow-down fa-2x mb-5"></i>
            </div>
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control"
                    placeholder="First Name" aria-label="First Name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" 
                    placeholder="Last Name" aria-label="Last Name"/>
                </div>
                
                </div>
                <div className="row mt-4">
                <div className="col">
                    <input type="email" className="form-control"
                    placeholder="Email Address" aria-label="Email Address"/>
                </div>
                <div className="col">
                    <input type="number" className="form-control" 
                    placeholder="Phone No." aria-label="Phone"/>
                </div>
                <div className="mt-4">
                    <textarea type="text" className="form-control py-3" 
                    placeholder="Message" aria-label="Message"/>
                </div>
                
                </div>
                <input type="submit" className="btn btn-lg text-light my-4" value="Submit" />
            </form>
            
            </section>
        </>
     );
}

export default ContactPage;