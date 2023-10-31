import Sidebar from "../component/sidebar";
const EducationPage = () => {
    return (
        <Sidebar>
            <h2 className="fw-bold d-flex justify-content-center align-items-center mt-5 mb-5"><i className="bi bi-mortarboard-fill"></i> &nbsp; Education</h2>
            <div className="University mb-5">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center mb-5">
                        <img className='EduIMG' src='https://aucc-conf.org/submission/img/msu2.png' alt='Profile' />
                    </div>
                    <div className="col-md-8 mb-3 px-5">
                        <h5 className="fw-bold">BACHELOR OF SCIENCE PROGRAM IN COMPUTER SCIENCE</h5>
                        <p className="fw-bold">Faculty of Informatics, Mahasarakham University.</p>
                        <h5 className="fw-bold">2020 - Present</h5>
                    </div>
                </div>
            </div>
            <div className="School mb-5">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center mb-5">
                        <img className='EduIMG' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUr7k-l1b6Kqn8_o2M73glxFyrL9c-NAggw&usqp=CAU' alt='Profile' />
                    </div>
                    <div className="col-md-8 mb-3 px-5">
                        <h5 className="fw-bold">SCIENCE AND MATHEMATICS PROGRAM</h5>
                        <p className="fw-bold">Borabu School, Mahasarakham.</p>
                        <h5 className="fw-bold">2017 - 2020</h5>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}
export default EducationPage;