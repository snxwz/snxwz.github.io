import Sidebar from "../component/sidebar";
import { Link } from "react-router-dom";
const AboutPage = () => {
    return (
        <Sidebar>
            <h2 className="fw-bold d-flex justify-content-center align-items-center mt-5 mb-5"><i className="bi bi-info-circle-fill"></i> &nbsp; About Me</h2>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center mb-3">
                    <img className='profileIMG' src='https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/324341363_860087281970060_229809564157574707_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHA06Ss0v0Im1ZYzgdmtKQRUG7u1nqoOIJQbu7Weqg4gqBr5_sMtZdWyDLr3tBnrYcT2QDwaPQskf2xg_lz1Uly&_nc_ohc=ti__px3WbI0AX-1D1TZ&_nc_ht=scontent.fbkk8-2.fna&oh=00_AfDQtjGhGeISEdjzE1XEQM6aoh9dfAxBac0QyXBRndgBPg&oe=6545E9BC' alt='Profile' />
                </div>
                <div className="col-md-6 mb-3 px-5">
                    <h4 className='fw-bold'>Adithep Ponglong</h4>
                    <h6 className='fw-bold'>Computer Science Student</h6>
                    <p className="mb-5">
                        As a senior year student at Mahasarakham University, I am deeply passionate about technology,
                        with a strong interest in networking, cyber security, IoT, web development, and artificial intelligence.
                        My academic foundation, combined with practical experience, has equipped me with a versatile skill set,
                        and I am committed to continuously honing and applying these skills to real-world projects.
                        I am eager to embark on a dynamic career in the tech industry,
                        ready to tackle challenges and contribute to innovative solutions,
                        a meaningful impact in the ever-evolving world of technology
                    </p>
                    <h6 className="fw-bold"><i className="bi bi-envelope-at-fill"></i> : adithep787ch@gmail.com</h6>
                    <h6 className="fw-bold"><i className="bi bi-geo-alt-fill"></i> : Mahasarakham University, Mahasarakham, Thailand</h6>
                    <h6 className="fw-bold mb-5"><i className="bi bi-file-earmark-person-fill"></i> : <Link to='https://drive.google.com/file/d/1p2q7p1CXe5j61TBvZ24gCSLOZuQgWzQ7/view?usp=sharing'>View My CV</Link></h6>
                    <Link to='/education'><button type="button" className="btn btn-success mb-3"><i className="bi bi-mortarboard-fill"></i> <strong>Education</strong></button></Link>
                </div>
            </div>
        </Sidebar>
    );
}
export default AboutPage;