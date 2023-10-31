import { Link } from 'react-router-dom';
import './../css/sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = ({ children }) => {
    return (
        <div className='SidebarComponent'>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className='sidebar-btn ml-auto'>
                        <Link to="#SidebarOffcanvas" data-bs-toggle="offcanvas" className='text-white'>
                            <i id="navbtn" className="bi bi-list" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <a href="/" className='link'><div className='title ml-auto'><i className="bi bi-person-fill"></i> Adithep | <span>Portfolio</span></div></a>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="SidebarOffcanvas" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <>
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house-fill"></i><span> Home</span></Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" to='/about'><i className="bi bi-info-circle-fill"></i><span> About</span></Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/skills"><i className="bi bi-tools"></i><span> Skills</span></Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/education"><i className="bi bi-mortarboard-fill"></i><span> Education</span></Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/experience"><i className="bi bi-terminal-fill"></i><span> Experience</span></Link>
                                    </li>

                                </ul>
                            </>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='ContentComponent'>
                {children}
            </div>
        </div>
    );
}
export default Sidebar;