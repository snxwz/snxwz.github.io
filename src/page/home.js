import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/sidebar';
import '../css/utills.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <Sidebar>
            <div className='container-fluid'>
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center align-items-center mb-3 px-5'>
                            <img className='profileIMG' src='https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/381279252_1656675468175084_2820401091489166245_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGslGPHlzg7Htpl2Jr65CLoLCk3c5lH3i0sKTdzmUfeLV91j6EL8Fcqp1PY2Z6Y67BqDCrC5n_sIBc21lzQPigi&_nc_ohc=B4t2cGo7OF8AX9TTBhI&_nc_ht=scontent.fbkk12-2.fna&oh=00_AfCjH4fCJt8qlpMWAI7MElHt99hjVmzLBdXLtRk8NAv0yw&oe=65448D91' alt='Profile' />
                        </div>
                        <div className='col-md-6 mb-3 mt-5'>
                            <h4 className='fw-bold'>Hello There !</h4>
                            <h2 className='fw-bold fs-1 mb-3'>I'm Adithep P.</h2>
                            <hr />
                            <h5 className='fw-bold mb-3'>I'm into Cyber Security, Networking, Web Development.</h5>
                            <Link to='/about'><button type="button" className="btn btn-success mb-4"><i className="bi bi-person-fill"></i> <strong>About Me</strong></button></Link>
                            <h1><Link to='https://www.facebook.com/Adithep.787'><i className="bi bi-facebook"></i></Link> &nbsp; <Link to='https://github.com/snxwz'><i className="bi bi-github"></i></Link> &nbsp; <Link to='https://www.instagram.com/adithtor13.conf/'><i className="bi bi-instagram"></i></Link> &nbsp; <Link to={`mailto:${'adithep787ch@gmail.com'}`}><i className="bi bi-envelope-at-fill"></i></Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}
export default HomePage;