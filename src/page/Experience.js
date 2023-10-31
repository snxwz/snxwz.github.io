import Sidebar from "../component/sidebar";

const ExperiencePage = () => {
    return(
        <Sidebar>
            <h2 className="fw-bold d-flex justify-content-center align-items-center mt-5 mb-5"><i className="bi bi-terminal-fill"></i> &nbsp; Experience</h2>
            <div className="University mb-5">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center mb-4">
                        <img className='EduIMG' src='https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/395626916_609937028005867_1750825869609240445_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y_xRpqpDoswAX83sMvQ&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfA0THYLIkSDM-M4fn1Bt3lNeptyN3_E21nWxh-5F2whlQ&oe=6544F03C' alt='Project' />
                    </div>
                    <div className="col-md-8 mb-3 px-5">
                        <h5 className="fw-bold">Senior Project on Video Sharing and Streaming Platform</h5>
                        <p className="fw-bold">Develop a Video Steaming Platform Web Application and Video API Platform using React.js and Python Flask API</p>
                        <p className="fw-bold">Faculty of Informatics, Mahasarakham University</p>
                    </div>
                </div>
            </div>
            <div className="School mb-5">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center mb-4">
                        <img className='EduIMG' src='http://web.msu.ac.th/ssystem/msuhotnews/imgallery/20230317143352_2.jpg' alt='TSM Dev' />
                    </div>
                    <div className="col-md-8 mb-3 px-5">
                        <h5 className="fw-bold">Happy Academy : TSM Developer [Second runner-up] </h5>
                        <p className="fw-bold">Organized by : HAPPY GROUP</p>
                        <h5 className="fw-bold">Date : 11 - 13 March 2023 @KKU SciPark</h5>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default ExperiencePage;