function Footer() {
    return (
        <>
            <section id="footer" className="">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia commodi laudantium hic, quaerat fuga voluptatibus quae et quisquam aperiam vitae repellendus vel illum tempore nulla quos, tempora eligendi. Rerum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eos eveniet maiores laboriosam reprehenderit
                                iure, maxime ducimus repellendus porro minima facere consectetur, ea veritatis voluptatum qui minus
                                obcaecati rerum magnam?</p>
                        </div>
                        <div className="col-md-4">
                            <p id="footer-company-name">myMentor.com</p>
                            <p className="fotter-contact-p"><i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem non, cumque, autem expedita corporis alias quos officiis exercitationem, ea doloremque perferendis nihil asperiores sapiente nostrum praesentium molestias voluptas ullam?</p>
                            <p className="fotter-contact-p"><i className="fas fa-phone"></i>  +91-8238090100</p>
                            <p className="fotter-contact-p"><i className="fas fa-phone-office"></i>0141-2363663636</p>
                        </div>
                        <div className="col-md-4">
                            <p id="footer-heading-form">Query Form</p>
                            <form action="">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" name="name" id="" className="form-control form-control-sm"></input>
                                <label htmlFor="" className="form-label">email</label>
                                <input type="text" name="email" id="" className="form-control form-control-sm"></input>
                                <label htmlFor="" className="form-label">Query</label>
                                <input type="text" name="query" id="" className="form-control form-control-sm"></input>
                                <br />
                                <button type="submit" className="btn btn-success form-control form-control-sm">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row text-center">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-md-12">
                                    <img src="media/twitter-icon.png" alt="" />
                                    <img src="media/linkedin-icon.png" alt="" />
                                    <img src="media/instagram-icon.png" alt="" />
                                    <p>Copy Right</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

        </>
    );
}

export default Footer;